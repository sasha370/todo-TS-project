import { Status } from "../../createTastForm/enums/Status";

export type TaskCounterStatusType = |
Status.todo | Status.inProgress | Status.completed;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
