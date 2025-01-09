export interface ModalProps {
  handleClose: (isOpen: boolean) => void;
  open: boolean;
}
export interface FormData {
  title: string;
  image: string;
  description: string;
  tag: string[];
  deadline: string;
}
