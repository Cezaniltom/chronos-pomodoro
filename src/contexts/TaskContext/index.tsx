import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

export function useTaskContext() {
  return useContext(TaskContext)
}