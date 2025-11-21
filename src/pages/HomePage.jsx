import DropzoneArea from '../components/DropzoneArea';
import UploadPreview from '../components/UploadPreview';
import Loader from '../components/Loader';
import { useUpload } from '../hooks/useUpload';
import { useDownload } from '../hooks/useDownload';

export default function HomePage() {
    const { loading, error, data, selectedFile, handleUpload } = useUpload();

    const { 
        loading: downloading,
        error: downloadError,
        imageURL,
        handleDownload
    } = useDownload();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Subir Imagen</h1>

            {/* Dropzone */}
            <DropzoneArea onFileSelected={handleUpload} />

            {/* Loader de subida */}
            {loading && <Loader />}

            {/* Error de subida */}
            {error && (
                <div className="text-red-500 mt-4">
                    Error al subir la imagen: {error.message}
                </div>
            )}

            {/* Vista previa (antes del upload final) */}
            {selectedFile && !loading && (
                <UploadPreview file={selectedFile} />
            )}

            {/* Éxito */}
            {data && (
                <p className="mt-4 text-green-600">
                    Imagen subida correctamente ✓
                </p>
            )}

            {/* Sección descarga visible SOLO cuando data existe */}
            {data && (
                <div className="mt-6">
                    <button
                        onClick={() => handleDownload(data.filename)}
                        disabled={downloading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {downloading ? "Descargando..." : "Descargar imagen"}
                    </button>

                    {/* Error de descarga */}
                    {downloadError && (
                        <p className="text-red-500 mt-2">
                            Error al descargar: {downloadError.message}
                        </p>
                    )}

                    {/* Vista previa desde el servidor (blob) */}
                    {imageURL && (
                        <div className="mt-4">
                            <h3 className="text-lg font-medium mb-2">Imagen descargada desde el servidor:</h3>
                            <img
                                src={imageURL}
                                alt="Imagen descargada"
                                className="max-w-full h-auto rounded"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}