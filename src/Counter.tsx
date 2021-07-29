import Link from "next/link";
import React, { useState } from "react";
import useInterval from "use-interval";

import type { CSSProperties } from "react";

const pad = (num, count) => {
  let padded = num;
  while (("" + padded).length < count) {
    padded = "0" + padded;
  }
  return padded;
};

const useCounter = ({ unit }) => {
  const startValue = 39901727;
  const countByDay = 300000;
  const startDate = new Date("2021-07-25").getTime();
  const secondIncrement = countByDay / (60 * 60 * 24);

  const [value, setValue] = useState(null);

  useInterval(() => {
    const now = new Date().getTime();
    const secondsDiff = (now - startDate) / 1000;
    const increment = Math.floor(secondsDiff * secondIncrement);
    setValue(startValue + increment);
  }, 100);

  if (!value) {
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

type CounterProps = {
  href?: string;
  unit?: Unit;
  style?: CSSProperties;
};

export const Counter = ({ href, unit, style = {} }: CounterProps) => {
  const value = useCounter({ unit });
  let fontSize = "calc(100vw / 3)";
  if (unit === "millions") {
    fontSize = "calc(100vw / 2)";
  } else if (unit === "milliers") {
    fontSize = "calc(100vw / 2)";
  } else if (unit === "unites") {
    fontSize = "calc(100vw / 2)";
  }
  const styles = {
    ...counterStyle,
    fontSize,
    //lineHeight: fontSize,
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
