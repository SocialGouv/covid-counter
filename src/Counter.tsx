import Link from "next/link";
import React, { useState, useContext } from "react";
import useInterval from "use-interval";

import type { CSSProperties } from "react";

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

const useCounter = ({ initialDate, initialValue, nextValue, unit }) => {
  const [value, setValue] = useState(null);

  // nombre total à prévoir pour la journée
  const countByDay = nextValue - initialValue || 0;
  // comptage effectué à 17h45
  const startDate = new Date(`${initialDate}T17:45:00+02:00`).getTime();
  // plage de vaccination = sur 13 heures par jour
  const secondIncrement = countByDay / (60 * 60 * 13);

  useInterval(() => {
    const now = new Date().getTime();
    const secondsDiff = (now - startDate) / 1000;
    const increment = Math.floor(secondsDiff * secondIncrement);
    setValue(initialValue + increment);
  }, REFRESH_INTERVAL);

  if (!value || value < 40000000) {
    return null;
  }

  if (unit === "millions") {
    return Math.floor(value / 1000000);
  } else if (unit === "milliers") {
    const millions = Math.floor(value / 1000000);
    return pad(Math.floor((value - millions * 1000000) / 1000), 3);
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
  const initialDate = data && data[0];
  const initialValue = data && data[1];
  const nextValue = data && data[2];
  const value = useCounter({ initialDate, initialValue, nextValue, unit });
  let fontSize = "calc(100vw / 3)";
  if (unit) {
    fontSize = "calc(100vw / 2)";
  }
  if (!data) {
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
