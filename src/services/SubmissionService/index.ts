/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../apiClient";

export const submitTask = createAsyncThunk(
  "submission/submitTask",
  async ({ taskId, githubLink }: { taskId: number; githubLink: string }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.post(
        `/api/submission?task_id=${taskId}&github_link=${githubLink}`,
        {}
      );
      console.log("Submitted Task", data);
      return data;
    } catch (error: any) {
      console.log("error: ", error);
      throw Error(error.response.data.error);
    }
  }
);
export const fetchAllSubmissions = createAsyncThunk(
  "submission/fetchAllSubmissions",
  async () => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get("/api/submission");
      console.log("Submitted Task", data);
      return data;
    } catch (error: any) {
      console.log("error: ", error);
      throw Error(error.response.data.error);
    }
  }
);
export const fetchSubmissionByTaskId = createAsyncThunk(
  "submission/fetchSubmissionByTaskId",
  async ({ taskId }: { taskId: number }) => {
    console.log("jwt by shu", localStorage.getItem("jwt"));
    try {
      const { data } = await api.get(`/api/submission/task/${taskId}`);
      console.log("Fetch Task by id", data);
      return data;
    } catch (error: any) {
      console.log("error: ", error);
      throw Error(error.response.data.error);
    }
  }
);
export const acceptDeclineSubmission = createAsyncThunk(
  "submission/acceptDeclineSubmission",
  async ({ taskId, status }: { taskId: number; status: boolean }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.put(
        `/api/submission/task/${taskId}?status=${status}`
      );
      console.log("accept or Decline Submission", data);
      return data;
    } catch (error: any) {
      console.log("error: ", error);
      throw Error(error.response.data.error);
    }
  }
);
