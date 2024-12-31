import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { ModalProps } from "./types";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  borderRadius: "10px",
  p: 2,
};

const task = [1, 1, 1, 1];

const UserList: FC<ModalProps> = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {task.map((item, index) => (
            <>
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={"Code with Zosh"}
                      secondary={"@shubair_raza"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button className="customButton">Select</Button>
                </div>
              </div>
              {index != task.length - 1 && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default UserList;
