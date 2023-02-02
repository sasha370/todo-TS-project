import React, { FC, ReactElement, useState } from "react";
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

export const CreateTaskForm: FC = (): ReactElement => {
  // Declare state variables
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
        <AlertTitle>Success</AlertTitle>
        The task was created successfully
      </Alert>
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <TaskSelectField
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
        <LinearProgress />
        <Button variant="contained" size="large" fullWidth>
          Create a task
        </Button>
      </Stack>
    </Box>
  );
};
