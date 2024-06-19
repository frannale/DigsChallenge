import type { Calendar, Customer } from '@/app/models/ChallengeData';

export interface MonthProps {
  month: Calendar;
  customer?: Customer;
}
