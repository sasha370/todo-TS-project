import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import { Priority } from "../createTastForm/enums/Priority";
import { Status } from "../createTastForm/enums/Status";
import PropTypes from "prop-types";
import { renderPriorityBorderColor } from "./helpers/renderPriorityBorderColor";

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title = "Defult Title",
    date = new Date(),
    description = "Defult Description",
    status = Status.todo,
    priority = Priority.normal,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"flex-start"}
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  status: PropTypes.string,
  priority: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
