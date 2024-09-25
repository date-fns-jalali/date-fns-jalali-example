import { startOfMonth, startOfWeek } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale/fa-IR';
function logStartOfMonth(date: Date) {
  console.log(startOfWeek(date, { locale: faIR }));
  console.log(startOfMonth(date));
}

logStartOfMonth(new Date());
