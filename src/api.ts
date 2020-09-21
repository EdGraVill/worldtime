import { TimeZone } from "./commonTypes";

export const BASE_URL = 'https://worldtimeapi.org/api';

export const getAvailableTimezones = async (): Promise<string[]> => {
  const request = await fetch(`${BASE_URL}/timezone`);

  return request.json();
};

export const getTimezone = async (timezone: string): Promise<TimeZone> => {
  const request = await fetch(`${BASE_URL}/timezone/${timezone}`);

  return request.json();
};

export const getCurrentTimezone = async (): Promise<TimeZone> => {
  const request = await fetch(`${BASE_URL}/ip`);

  return request.json();
}
