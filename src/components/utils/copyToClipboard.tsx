import { toast } from "react-toastify";

export function copyToClipboard(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast("Code Copied to Clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }