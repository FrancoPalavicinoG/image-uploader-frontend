import { useState } from 'react';
import { downloadFile } from '../api/download';  

export function useDownload() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const handleDownload = async (filename) => {
        try {
            setLoading(true);
            setError(null);

            const blob = await downloadFile(filename);
            const url = URL.createObjectURL(blob);
            setImageURL(url);

            // Descarga automática
            const link = document.createElement("a");
            link.href = url;
            link.download = filename; 
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        imageURL,
        handleDownload,
    };
}