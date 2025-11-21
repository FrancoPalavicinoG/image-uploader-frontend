import { useState } from "react";   
import { uploadFile } from "../api/upload";

export function useUpload() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = async (file) => {
        try {
            setSelectedFile(file);
            setLoading(true);
            setError(null);
            const response = await uploadFile(file);
            setData(response);
        } catch (err) {
            const backendMessage =
                err.response?.data?.message || "Unkown error occurred during upload.";
        
            setError({ message: backendMessage });
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        data,
        selectedFile,
        handleUpload,
    };
}