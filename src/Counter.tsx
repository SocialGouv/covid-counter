import Link from "next/link";
import React, { useState } from "react";
import useInterval from "use-interval";
import { setHours, startOfDay, differenceInCalendarDays } from "date-fns";
import type { CSSProperties } from "react";

import { pickDayValues } from "../src/useData";

const REFRESH_INTERVAL =
  (process.env.REFRESH_INTERVAL && parseInt(process.env.REFRESH_INTERVAL)) ||
  100;

const pad = (num, count) => {
  let padded = num;
  while (("" + padded).length < count) {
    padded = "0" + padded;
  }
  return padded;
};

const useCounter = ({ referenceDate, referenceValue, nextValue, unit }) => {
  // nombre total à prévoir pour la journée
  const countByDay = nextValue - referenceValue || 0;
  const now = new Date();
  const incrementRate = 1; // todo
  const secondIncrement = (countByDay / (60 * 60 * 24)) * incrementRate;

  if (now.getHours() >= 21 || now.getHours() < 8) {
    return;
  }
  // setup initial value
  const getNewValue = () => {
    const now = new Date();
    if (!referenceDate || now < referenceDate) {
      return;
    }

    let secondsDiff = (now.getTime() - referenceDate.getTime()) / 1000;

    const increment = Math.floor(secondsDiff * secondIncrement);
    const newValue = referenceValue + increment;

    return newValue; // Math.min(nextValue, newValue);
  };

  const [value, setValue] = useState(getNewValue());

  // repeat
  useInterval(() => {
    setValue(getNewValue());
  }, REFRESH_INTERVAL);

  if (!referenceDate || !value || value < 40000000) {
    return null;
  }

  const millions = Math.floor(value / 1000000);

  if (unit === "millions") {
    return millions;
  } else if (unit === "milliers") {
    const milliers = Math.floor((value - millions * 1000000) / 1000);
    return pad(milliers, 3);
  } else if (unit === "unites") {
    const milliers = Math.floor(value / 1000);
    return pad(Math.floor(value - milliers * 1000), 3);
  }
  return pad(value, 3);
};

const counterStyle = {
  fontVariantNumeric: "tabular-nums",
  fontSize: "5rem",
  textAlign: "center" as const,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  margin: 20,
};

type Unit = "millions" | "milliers" | "unites";

export type CounterProps = {
  data?: (string | number)[] | void;
  href?: string;
  unit?: Unit;
  style?: CSSProperties;
};

export const Counter = ({ data, href, unit, style = {} }: CounterProps) => {
  const values = data && pickDayValues(data);
  const referenceDate = values && values[0];
  const referenceValue = values && values[1];
  const nextValue = values && values[2];

  const value = useCounter({ referenceDate, referenceValue, nextValue, unit });
  let fontSize = "calc(100vw / 3)";
  if (unit) {
    fontSize = "calc(100vw / 2)";
  }

  if (!data || !value) {
    return null;
  }
  const styles = {
    ...counterStyle,
    fontSize,
    ...style,
  };
  const content = <div style={styles}>{value}</div>;
  if (href) {
    return (
      <Link href={href}>
        <a>{content}</a>
      </Link>
    );
  }
  return content;
};
