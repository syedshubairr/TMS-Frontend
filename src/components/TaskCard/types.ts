export interface ListProps {
  handleClose: (isOpen: boolean) => void;
  open: boolean;
}
export type TaskCardType = {
  task: TaskType;
};
type TaskType = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};
