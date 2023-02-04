import React, { FC, ReactElement } from "react";
import { Box, Switch, FormControlLabel, Button } from "@mui/material";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import PropTypes from "prop-types";
import { Status } from "../createTastForm/enums/Status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => {
      console.log(e);
    },
    onClick = (e) => {
      console.log(e);
    },
  } = props;

  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      alignContent={"center"}
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.inProgress ? true : false}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "white" }}
        onClick={(e) => {
          onClick(e, id);
        }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
