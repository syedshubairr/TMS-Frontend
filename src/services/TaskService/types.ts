export interface taskDataType {
  id: number;
  title: string;
  description: string;
  image: string;
  assignedUserId: number;
  tags: string[];
  deadline: string;
  createdAt: string;
  status: TaskStatus;
}

enum TaskStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  DONE = "DONE",
}
