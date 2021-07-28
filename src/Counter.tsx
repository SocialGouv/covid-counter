import { useState, useEffect } from "react";
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

  const [value, setValue] = useState(startValue);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const secondsDiff = (now - startDate) / 1000;
      const increment = Math.floor(secondsDiff * secondIncrement);
      setValue(startValue + increment);
    }, 200);
  }, [startDate, secondIncrement]);

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

export const Counter = ({
  unit,
  style = {},
}: {
  unit?: string;
  style?: CSSProperties;
}) => {
  let fontSize = "calc(80vw / 8)";
  if (unit === "millions") {
    fontSize = "calc(80vw / 3)";
  } else if (unit === "milliers") {
    fontSize = "calc(80vw / 3)";
  } else if (unit === "unites") {
    fontSize = "calc(80vw / 3)";
  }

  const styles = {
    ...counterStyle,
    fontSize,
    ...style,
  };
  const value = useCounter({ unit });
  return <div style={styles}>{value}</div>;
};
