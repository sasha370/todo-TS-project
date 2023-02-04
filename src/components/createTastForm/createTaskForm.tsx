import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useContext,
} from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";
import { TaskStatusChangeContext } from "../../context";

export const CreateTaskForm: FC = (): ReactElement => {
  // Declare state variables
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  // Declare mutation
  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest("http://localhost:3200/tasks", "POST", data)
  );

  // Declare context
  const tasksUpdatedContext = useContext(TaskStatusChangeContext);

  function createTaskHandler() {
    if (!title || !description || !date) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccessAlert(true);
      tasksUpdatedContext.toggle();
    }
    const successTimeout = setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccessAlert && (
        <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
          <AlertTitle>Success</AlertTitle>
          The task was created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDateField
          disabled={createTaskMutation.isLoading}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { value: Status.todo, label: Status.todo.toLocaleUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toLocaleUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            // Todo: fix statuses
            items={(Object.keys(Priority) as Array<keyof typeof Priority>).map(
              (prior) => {
                return { value: prior, label: prior.toLocaleUpperCase() };
              }
            )}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          disabled={!title || !description || !date}
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create a task
        </Button>
      </Stack>
    </Box>
  );
};
