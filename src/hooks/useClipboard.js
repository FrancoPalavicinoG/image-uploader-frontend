import { useState } from "react";

export function useClipboard() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text, duration = 2000) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), duration);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return {
        copied,
        copyToClipboard,
    };
}