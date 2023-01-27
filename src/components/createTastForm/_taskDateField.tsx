import React, { FC, ReactElement } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { IDateField } from "./interfaces/IDateField";
import PropTypes from "prop-types";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  // Deconstruct props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => {
      console.log(date);
    },
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          disabled={disabled}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
