import { Dayjs } from "dayjs";
import moment from "moment";

export const dateConverter = (date: Dayjs | null) => {
  console.log("utils date", date?.date());
  return moment(date?.date()).format("YYYY-MM-DD");
};
