import React, { FC, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectField, ISelectItems } from "./interfaces/ISelectField";
import ProrTypes from "prop-types";

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = "",
    label = "Select Box",
    name = "selectBox",
    items = [{ value: "", label: "Add items" }],
    disabled = false,
    onChange = (e) => {
      console.log(e);
    },
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item: ISelectItems, index: number) => (
          <MenuItem key={item.value + index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  value: ProrTypes.string,
  label: ProrTypes.string,
  name: ProrTypes.string,
  items: ProrTypes.arrayOf(
    ProrTypes.shape({
      value: ProrTypes.string.isRequired,
      label: ProrTypes.string.isRequired,
    }).isRequired
  ),
  disabled: ProrTypes.bool,
  onChange: ProrTypes.func,
};
