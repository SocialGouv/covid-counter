import { pickDayValues } from "../src/useData";

jest.useFakeTimers();

const row = [new Date("2021-07-29T17:45:00+02:00"), 123, 456, 789, 101];

test("dont return before date", () => {
  jest.setSystemTime(new Date("2021-07-29T08:00:00+02:00"));
  expect(pickDayValues(row)).toEqual();
});

test("return data after date", () => {
  jest.setSystemTime(new Date("2021-07-29T18:00:00+02:00"));
  expect(pickDayValues(row)).toEqual([
    new Date("2021-07-29T17:45:00+02:00"),
    123,
    456,
  ]);
});

test("next day, before 17h45", () => {
  jest.setSystemTime(new Date("2021-07-30T10:00:00+02:00"));
  expect(pickDayValues(row)).toEqual([
    new Date("2021-07-29T17:45:00+02:00"),
    123,
    456,
  ]);
});

test("next day, after 17h45", () => {
  jest.setSystemTime(new Date("2021-07-30T18:00:00+02:00"));
  expect(pickDayValues(row)).toEqual([
    new Date("2021-07-30T17:45:00+02:00"),
    456,
    789,
  ]);
});

test("next day 2, before 17h45", () => {
  jest.setSystemTime(new Date("2021-07-31T10:00:00+02:00"));
  expect(pickDayValues(row)).toEqual([
    new Date("2021-07-30T17:45:00+02:00"),
    456,
    789,
  ]);
});

test("next day 2, after 17h45", () => {
  jest.setSystemTime(new Date("2021-07-31T18:00:00+02:00"));
  expect(pickDayValues(row)).toEqual([
    new Date("2021-07-31T17:45:00+02:00"),
    789,
    101,
  ]);
});
