import React, { useState } from "react";
import useSWR from "swr";
import {
  set,
  addDays,
  formatISO,
  differenceInCalendarDays,
  closestIndexTo,
  isBefore,
} from "date-fns";

const URL = process.env.DATA_URL || "/sample.csv";

// en ms
const INTERVAL =
  (process.env.DATA_URL_INTERVAL && parseInt(process.env.DATA_URL_INTERVAL)) ||
  10000;

/*
fetch, retry and deduplicate DATA_URL calls
*/

const fetcher = () => {
  return fetch(URL + "?" + Math.random())
    .then((r) => r.text())
    .then((rows) =>
      // CSV poor man parser
      rows
        .split("\n")
        .filter(Boolean)
        .map((row) => row.split(","))
    )
    .then((rows) => {
      if (rows.length) {
        const cells = rows[0];
        // ensure CSV is conform
        if (cells.length === 9) {
          // convert date to date and numbers to numbers
          const startDate = set(new Date(cells[0]), {
            hours: 17,
            minutes: 45,
            seconds: 0,
          });
          return [startDate, ...cells.slice(1).map((v) => parseInt(v))];
        }
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

type DataResult = (string | number)[];

// extract current day values from CSV
export const pickDayValues = (row) => {
  const [startDate, ...previsions] = row;
  const now = new Date();

  if (isBefore(now, startDate)) {
    // dont parse results before expected date/time
    console.log("error: now is before startDate");
    return;
  }

  let daysDiff = differenceInCalendarDays(now, startDate);
  const todaySwitchStart = set(now, { hours: 17, minutes: 45, seconds: 0 });
  if (daysDiff >= 1 && isBefore(now, todaySwitchStart)) {
    // offset-1 si on est avant 17h45 (on se base sur les chiffres de la veille)
    daysDiff -= 1;
  }
  if (daysDiff < 0 || daysDiff > 7) {
    // we cant have a future dataset and we dont have more 7 data points
    return;
  }
  // set the new reference date
  let valueDateReference = addDays(startDate, daysDiff);
  //console.log({ row, valueDateReference, daysDiff });

  // only return current day and next day values
  const result = [
    valueDateReference,
    ...previsions.slice(daysDiff, daysDiff + 2),
  ];
  return result;
};

export const useData = (): DataResult => {
  // this intermediate state is needed to prevent SWR from flushing the state on error
  const [data, setData] = useState(null as DataResult);
  const swr = useSWR("/sample.csv", {
    refreshInterval: INTERVAL,
    fetcher,
  });
  if (swr.data) {
    const parsedValues = pickDayValues(swr.data);
    console.log("data", parsedValues);
    if (parsedValues && (!data || data.join("") !== parsedValues.join(""))) {
      //  console.log("parsedValues2", parsedValues);
      setData(parsedValues);
    }
  }
  return data;
};
