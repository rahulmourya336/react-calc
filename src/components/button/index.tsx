import { FC } from "react";
import { ButtonPropType } from "../../models/button";
import { Key } from "../../styles";

const Button: FC<ButtonPropType> = ({
  label,
  value,
  onButtonPress,
  classes,
  key
}) => (
  <Key onClick={() => onButtonPress(value)} className={classes} key={key}>
    {label}
  </Key>
);

export default Button;
