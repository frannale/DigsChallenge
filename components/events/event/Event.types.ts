import type { Action, Customer } from '@/app/models/ChallengeData';

export interface EventProps {
  event: Action;
  customer?: Customer;
}
