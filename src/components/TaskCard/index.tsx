import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import { useState } from "react";
import UserList from "./ListAndForms/UserList";
import EditTaskForm from "./ListAndForms/EditTaskForm";
import SubmissionList from "./ListAndForms/SubmissionList";
import { TaskCardType } from "./types";
const role = "ROLE_ADMIN";
const TaskCard = ({ task }: TaskCardType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openUserList, setOpenUserList] = useState<boolean>(false);
  const [openSubmissionList, setOpenSubmissionList] = useState<boolean>(false);
  const [openEditTaskForm, setOpenEditTaskForm] = useState<boolean>(false);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleOpenSubmissionList = (
    setOpenSubmissionList: (open: boolean) => void,
    handleMenuClose: () => void
  ) => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleOpenUpdateTaskForm = (
    setEditTaskList: (open: boolean) => void,
    handleMenuClose: () => void
  ) => {
    setEditTaskList(true);
    handleMenuClose();
  };
  const handleCloseUpdateTaskForm = () => {
    setOpenEditTaskForm(false);
  };

  const handleDeleteTask = () => {};

  const handleUserList = (
    setOpenUserList: (open: boolean) => void,
    handleMenuClose: () => void
  ) => {
    setOpenUserList(true);
    handleMenuClose();
  };
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="border-2">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src={task.image}
              alt="car-rental"
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">{task.title}</h1>
              <p className="text-gray-500 text-sm">{task.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {task.tags.map((tag: string) => (
                <span className="py-1 px-5 rounded-full techStack">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {role === "ROLE_ADMIN" ? (
              <div>
                <MenuItem
                  onClick={() => {
                    handleUserList(setOpenUserList, handleMenuClose);
                  }}
                >
                  Assign User
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleOpenSubmissionList(
                      setOpenSubmissionList,
                      handleMenuClose
                    )
                  }
                >
                  See Submission
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleOpenUpdateTaskForm(
                      setOpenEditTaskForm,
                      handleMenuClose
                    )
                  }
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </div>
            ) : (
              <div></div>
            )}
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <EditTaskForm
        open={openEditTaskForm}
        handleClose={handleCloseUpdateTaskForm}
      />
    </div>
  );
};

export default TaskCard;
