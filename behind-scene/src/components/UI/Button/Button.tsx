import React, { ReactNode } from "react";

import classes from "./Button.module.css";

const Button: React.FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button className={`${classes.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
