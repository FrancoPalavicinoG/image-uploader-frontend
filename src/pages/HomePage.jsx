import DropzoneArea from '../components/DropzoneArea';
import UploadPreview from '../components/UploadPreview';
import Loader from '../components/Loader';
import { useUpload } from '../hooks/useUpload';

export default function HomePage() {
    const { loading, error, data, selectedFile, handleUpload } = useUpload();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Subir Imagen</h1>
            <DropzoneArea onFileSelected={handleUpload} />
            {loading && <Loader />}
            {error && (
                <div className="text-red-500 mt-4">
                    Error al subir la imagen: {error.message}
                </div>
            )}
            {selectedFile && !loading && (
                <UploadPreview file={selectedFile} />
            )}
            {data && (
                <p className="mt-4 text-green-600">
                    Imagen subida correctamente ✓
                </p>
            )}
        </div>
    );
}