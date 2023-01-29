import React, { FC, ReactElement } from "react";
import { Box, Switch, FormControlLabel, Button } from "@mui/material";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import PropTypes from "prop-types";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
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
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "white" }}
        onClick={(e) => {
          onClick(e);
        }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
