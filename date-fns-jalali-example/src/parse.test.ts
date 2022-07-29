import { newDate, parse, setDefaultOptions } from 'date-fns-jalali';
import enUs from 'date-fns-jalali/locale/en-US';
import faIR from 'date-fns-jalali/locale/fa-IR';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  setDefaultOptions({ locale: undefined });
});

describe('date-fns-jalali parse', () => {
  it('parse', () => {
    const date = newDate(1393, 4, 1);
    expect(parse('1393/05/01', 'yyyy/MM/dd', new Date())).toEqual(date);
    expect(
      parse(['1', 'مرداد', '1393'].join(' '), 'dd MMMM yyyy', new Date()),
    ).toEqual(date);
    expect(parse('دوشنبه', 'EEEE', date)).toEqual(newDate(1393, 3, 30));
  });
  it('parse with locale', () => {
    const date = newDate(1393, 4, 1);
    expect(
      parse('1393/05/01', 'yyyy/MM/dd', new Date(), { locale: enUs }),
    ).toEqual(date);
    expect(
      parse(['1', 'Mordad', '1393'].join(' '), 'dd MMMM yyyy', new Date(), {
        locale: enUs,
      }),
    ).toEqual(date);
    expect(parse('Monday', 'EEEE', date, { locale: enUs })).toEqual(
      newDate(1393, 3, 30),
    );
  });
  it('format with default Option', () => {
    const date = newDate(1393, 4, 1);
    setDefaultOptions({ locale: enUs });
    expect(parse('1393/05/01', 'yyyy/MM/dd', new Date())).toEqual(date);

    expect(
      parse(['1', 'Mordad', '1393'].join(' '), 'dd MMMM yyyy', new Date()),
    ).toEqual(date);
    expect(parse('Monday', 'EEEE', date)).toEqual(newDate(1393, 3, 30));

    expect(parse('دوشنبه', 'EEEE', date, { locale: faIR })).toEqual(
      newDate(1393, 3, 30),
    );
    expect(
      parse(['1', 'مرداد', '1393'].join(' '), 'dd MMMM yyyy', new Date(), {
        locale: faIR,
      }),
    ).toEqual(date);
  });
});
