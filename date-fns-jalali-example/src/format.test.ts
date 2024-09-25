import { newDate, format, setDefaultOptions } from 'date-fns-jalali';
import { enUS } from 'date-fns-jalali/locale/en-US';
import { faIR } from 'date-fns-jalali/locale/fa-IR';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  setDefaultOptions({ locale: undefined });
});

describe('date-fns-jalali format', () => {
  it('format', () => {
    const date = newDate(1393, 4, 1);
    expect(format(date, 'yyyy/MM/dd')).toEqual('1393/05/01');
    expect(format(date, 'dd MMMM yyyy')).toEqual(
      ['01', 'مرداد', '1393'].join(' '),
    );
    expect(format(date, 'PPPPpp')).toEqual(
      'چهارشنبه 1-ام مرداد 1393 در 12:00:00 ق.ظ.',
    );
  });
  it('format with locale', () => {
    const date = newDate(1393, 4, 1);
    expect(format(date, 'dd MMMM yyyy', { locale: enUS })).toBe(
      '01 Mordad 1393',
    );
    expect(format(date, 'PPPPpp', { locale: enUS })).toEqual(
      'Wednesday, Mordad 1st, 1393 at 12:00:00 AM',
    );
  });
  it('format with default Option', () => {
    const date = newDate(1393, 4, 1);
    setDefaultOptions({ locale: enUS });
    expect(format(date, 'dd MMMM yyyy')).toBe('01 Mordad 1393');
    expect(format(date, 'PPPPpp')).toEqual(
      'Wednesday, Mordad 1st, 1393 at 12:00:00 AM',
    );
    expect(format(date, 'dd MMMM yyyy', { locale: faIR })).toEqual(
      ['01', 'مرداد', '1393'].join(' '),
    );
    expect(format(date, 'PPPPpp', { locale: faIR })).toEqual(
      'چهارشنبه 1-ام مرداد 1393 در 12:00:00 ق.ظ.',
    );
  });
});
