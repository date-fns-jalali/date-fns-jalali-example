import { describe, expect, it } from 'vitest';
import { dateFnsJalaliExample } from './date-fns-jalali-example';

describe('dateFnsJalaliExample', () => {
  it('return date-fns-jalali-example', () => {
    expect(dateFnsJalaliExample()).toBe('date-fns-jalali-example');
  });
});
