/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import { Counter } from "../src/Counter";

jest.useFakeTimers();

const invalidData = [new Date("2021-07-29T17:45:00"), 10000000, 60000000];
const sampleData = [
  new Date("2021-07-29T17:45:00"),
  40000000,
  60000000,
  80000000,
  100000000,
];

test("should always be UTC+02:00", () => {
  expect(new Date().getTimezoneOffset()).toBe(-120);
});

test(`No data should return nothing`, () => {
  render(<Counter />);
  jest.setSystemTime(new Date("2021-07-29T17:45:00+02:00"));
  const text = document.body.textContent;
  expect(text).toEqual("");
});

test(`Invalid data should return nothing`, () => {
  render(<Counter data={invalidData} />);
  jest.setSystemTime(new Date("2021-07-29T17:45:00+02:00"));
  const text = document.body.textContent;
  expect(text).toEqual("");
});

test(`Posterious data return nothing`, () => {
  jest.setSystemTime(new Date("2021-07-29T08:00:00+02:00"));
  render(<Counter data={invalidData} />);
  const text = document.body.textContent;
  expect(text).toEqual("");
});

test(`Valid data should return initial results at 17:45`, () => {
  jest.setSystemTime(new Date("2021-07-29T17:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("40000000");
});

test(`Valid data should return intermediate results at 20:00`, () => {
  jest.setSystemTime(new Date("2021-07-29T20:00:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("41875000");
});

test(`Valid data should return final result at 21:00`, () => {
  jest.setSystemTime(new Date("2021-07-29T21:00:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("42708330");
});

test(`Valid data should return final results at 21:30`, () => {
  jest.setSystemTime(new Date("2021-07-29T21:30:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("42708330");
});

test(`Valid data should return final results at 7:30 the day after`, () => {
  jest.setSystemTime(new Date("2021-07-30T07:30:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("42708330");
});

test(`Valid data should return intermediate results at 08:00 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-30T08:00:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("51875000");
});

test(`Valid data should return final results at 17:45 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-30T17:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("60000000");
});

test(`Valid data should return intermediate results at 18:45 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-30T18:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("60833333");
});

test(`Valid data should return final results at 21:00 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-30T21:00:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("62708330");
});

test(`Valid data should return final results at 7:45 the next day 2`, () => {
  jest.setSystemTime(new Date("2021-07-31T07:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("62708330");
});

test(`Valid data should return expected results at 17:45 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-31T17:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("80000000");
});

test(`Valid data should return final results at 21:00 the next day`, () => {
  jest.setSystemTime(new Date("2021-07-31T21:00:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("82708330");
});

test(`Valid data should return final results at 7:45 the next day 2`, () => {
  jest.setSystemTime(new Date("2021-08-01T07:45:00+02:00"));
  render(<Counter data={sampleData} />);
  const text = document.body.textContent;
  expect(text).toEqual("82708330");
});
