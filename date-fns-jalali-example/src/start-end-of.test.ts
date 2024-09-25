import {
  newDate,
  startOfMonth,
  startOfWeek,
  startOfYear,
  endOfYear,
  endOfWeek,
  endOfMonth,
  setDefaultOptions,
} from 'date-fns-jalali';
import { enUS } from 'date-fns-jalali/locale/en-US';
import { faIR } from 'date-fns-jalali/locale/fa-IR';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  setDefaultOptions({ locale: undefined });
});

describe('date-fns-jalali', () => {
  it('start of', () => {
    const date = newDate(1393, 4, 8);
    expect(startOfWeek(date)).toEqual(newDate(1393, 4, 4));
    expect(startOfMonth(date)).toEqual(newDate(1393, 4, 1));
    expect(startOfYear(date)).toEqual(newDate(1393, 0, 1));
  });
  it('end of', () => {
    const date = newDate(1393, 4, 8);
    expect(endOfWeek(date)).toEqual(newDate(1393, 4, 10, 23, 59, 59, 999));
    expect(endOfMonth(date)).toEqual(newDate(1393, 4, 31, 23, 59, 59, 999));
    expect(endOfYear(date)).toEqual(newDate(1393, 11, 29, 23, 59, 59, 999));
  });
  it('start of with locale', () => {
    const date = newDate(1393, 4, 8);
    setDefaultOptions({ locale: enUS });
    expect(startOfWeek(date)).toEqual(newDate(1393, 4, 5));
    expect(startOfMonth(date)).toEqual(newDate(1393, 4, 1));
    expect(startOfYear(date)).toEqual(newDate(1393, 0, 1));
    expect(startOfWeek(date, { locale: faIR })).toEqual(newDate(1393, 4, 4));
  });
  it('end of with locale', () => {
    const date = newDate(1393, 4, 8);
    setDefaultOptions({ locale: enUS });
    expect(endOfWeek(date)).toEqual(newDate(1393, 4, 11, 23, 59, 59, 999));
    expect(endOfMonth(date)).toEqual(newDate(1393, 4, 31, 23, 59, 59, 999));
    expect(endOfYear(date)).toEqual(newDate(1393, 11, 29, 23, 59, 59, 999));
    expect(endOfWeek(date, { locale: faIR })).toEqual(
      newDate(1393, 4, 10, 23, 59, 59, 999),
    );
  });
});
