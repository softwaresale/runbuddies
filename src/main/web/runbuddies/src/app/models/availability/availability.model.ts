
export interface Duration {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface Availability {
  id?: number;
  day: string;
  startTime: string;
  duration: string;
  endTime?: string;
}

export type DaysOfWeekType = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const dayToNum = (day: DaysOfWeekType) => daysOfWeek.indexOf(day);
export const numToDay = (day: number) => daysOfWeek[day];

const durationToString = (duration: Duration) => `PT${duration?.hours ?? 0}H${duration?.minutes ?? 0}M`;

export const availabilityCreate = (dayInfo: number | DaysOfWeekType, startTime: string, duration: Duration) => {
  let day: DaysOfWeekType;
  if (typeof dayInfo === 'number') {
    day = numToDay(dayInfo) as DaysOfWeekType;
  } else {
    day = dayInfo;
  }
  const offset = new Date().toString().match(/([-\+][0-9]+)\s/)?.[1] ?? '-0000';
  const updatedOffset = offset.slice(0, 3) + ':' + offset.slice(3, 5);

  const startTimeOffset = startTime + updatedOffset;

  return {
    day,
    startTime: startTimeOffset,
    duration: durationToString(duration)
  };
};
