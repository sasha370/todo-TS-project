import React from "react";


export interface ITaskFooter {
  onStatusChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>| React.MouseEvent<HTMLAnchorElement>) => void;
}
