import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
    return <Button {...rest}>{children}</Button>;
};

export default CustomButton;
