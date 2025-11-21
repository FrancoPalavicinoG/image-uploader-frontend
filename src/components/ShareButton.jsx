import { useClipboard } from "../hooks/useClipboard";
import { LinkIcon, Check } from "lucide-react";

export default function ShareButton({ url }) {
  const { copyToClipboard, copied } = useClipboard();

  return (
    <button
      onClick={() => copyToClipboard(url)}
      className={
        copied
          ? "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 border backdrop-blur-md shadow-sm bg-green-500 text-white border-green-600 hover:bg-green-600"
          : "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 border backdrop-blur-md shadow-sm bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80"
      }
    >
      {copied ? (
        <Check className="w-5 h-5" />
      ) : (
        <LinkIcon className="w-5 h-5" />
      )}
      {copied ? "Copied!" : "Share Link"}
    </button>
  );
}