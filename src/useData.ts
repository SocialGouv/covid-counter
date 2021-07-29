import React, { useState } from "react";
import useSWR from "swr";

const url = process.env.DATA_URL || "/sample.csv";

const fetcher = () => {
  return fetch(url + "?" + Math.random())
    .then((r) => r.text())
    .then((rows) =>
      rows
        .split("\n")
        .filter(Boolean)
        .map((row) => row.split(","))
    )
    .then((rows) => {
      if (rows.length) {
        const cells = rows[0];
        return [cells[0], ...cells.slice(1).map((v) => parseInt(v))];
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const INTERVAL =
  (process.env.DATA_URL_INTERVAL && parseInt(process.env.DATA_URL_INTERVAL)) ||
  60000;

export const useData = () => {
  // this intermediate state is needed to prevent SWR from flushing the state on error
  const [data, setData] = useState(null);
  const swr = useSWR("/sample.csv", {
    refreshInterval: INTERVAL,
    fetcher,
  });
  if (swr.data && data !== swr.data) {
    setData(swr.data);
  }
  return data;
};
