import React, {
  FC,
  createContext,
  ReactElement,
  PropsWithChildren,
  useState,
} from "react";

export const TaskStatusChangeContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangeProvider: FC<PropsWithChildren> = (
  props
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangeContext.Provider
      value={{
        updated,
        toggle: toggleHandler,
      }}
    >
      {props.children}
    </TaskStatusChangeContext.Provider>
  );
};
