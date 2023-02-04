import { Priority } from "../../createTastForm/enums/Priority";
import { Status } from "../../createTastForm/enums/Status";

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  status: `${Status}`;
  date: string;
  priority: `${Priority}`;
}
