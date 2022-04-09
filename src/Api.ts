import axios, { Method } from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export interface ModifyDataProps<T> {
  url: string;
  data?: T;
  method?: Method;
}

export const ModifyData = async <T>({
  url,
  data,
  method = 'GET',
}: ModifyDataProps<T>) => {
  const res = await API({
    method,
    url,
    data: data && data,
  });
  return res.data;
};
