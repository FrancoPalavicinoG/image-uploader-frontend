import { AlertCircle, CheckCircle } from "lucide-react";

export default function Alert({ type = "success", message }) {
  const isSuccess = type === "success";

  return (
    <div
      className={`
        flex items-center gap-3 p-4 rounded-xl border 
        shadow-sm mt-4 animate-fadeIn
        ${isSuccess 
          ? "bg-green-100/60 dark:bg-green-800/40 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200"
          : "bg-red-100/60 dark:bg-red-800/40 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200"
        }
      `}
    >
      {isSuccess ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}

      <span className="font-medium">{message}</span>
    </div>
  );
}