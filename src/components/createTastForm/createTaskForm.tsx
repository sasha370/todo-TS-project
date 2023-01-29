import React, { FC, ReactElement } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6"></Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
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
            // Todo: fix statuses
            items={(Object.keys(Priority) as Array<keyof typeof Priority>).map(
              (prior) => {
                return { value: prior, label: prior.toLocaleUpperCase() };
              }
            )}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
