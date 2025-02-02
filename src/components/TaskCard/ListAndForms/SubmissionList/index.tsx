import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalProps } from "./types";
import { FC } from "react";
import SubmissionCard from "../../../SubmissionCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const submissions = [1, 1, 1];

const SubmissionList: FC<ModalProps> = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {submissions.length > 0 ? (
              <div className="space-y-2">
                {submissions.map((sub, index) => (
                  <SubmissionCard key={index} />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-center">No Submission Found</div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubmissionList;
