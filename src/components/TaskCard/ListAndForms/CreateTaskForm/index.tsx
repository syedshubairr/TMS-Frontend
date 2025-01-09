/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC, useState } from "react";
import { FormData, ModalProps } from "./types";
import { Autocomplete, Button, Grid2, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const tags = ["Angular", "React", "Java", "Micro-Services", "NodeJS"];
const CreateNewTaskForm: FC<ModalProps> = ({ handleClose, open }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image: "",
    description: "",
    tag: [],
    deadline: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTagsChange = (event: any, value: string[]) => {
    setSelectedTags(value);
  };
  const handleDeadlineChange = (date: any) => {
    setFormData({
      ...formData,
      deadline: moment(date.$d).format("YYYY-MM-DD"),
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    formData.tag = selectedTags;
    handleClose(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2} alignItems={"center"}>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  label="Title"
                  name="title"
                  fullWidth
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  label="Image"
                  name="image"
                  fullWidth
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  label="Description"
                  name="description"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField label="Tags" {...params} />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      onChange={handleDeadlineChange}
                      className="w-full"
                      label="Deadline"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Button
                  className="customButton"
                  type="submit"
                  fullWidth
                  sx={{ padding: "0.9rem" }}
                  onClick={handleSubmit}
                >
                  Create
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateNewTaskForm;
