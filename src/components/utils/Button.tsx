/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  isLoading?: boolean;
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any)
    | (() => any)
    | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  loadingColor?: string;
  className?: string;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  onClick,
  children,
  disabled = false,
  loadingColor,
  className,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${className || "button"} ${
        (disabled || isLoading) && "cursor-not-allowed bg-opacity-40"
      }`}
    >
      {children}
      {isLoading ? (
        <ClipLoader size={20} color={loadingColor || "#ffffff"} />
      ) : null}
    </button>
  );
};

export default Button;
