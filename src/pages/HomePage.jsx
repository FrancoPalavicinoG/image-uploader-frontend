import DropzoneArea from '../components/DropzoneArea';
import UploadPreview from '../components/UploadPreview';
import ShareButton from '../components/ShareButton';
import Loader from '../components/Loader';
import Alert from "../components/Alert";
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

            {/* Dropzone */}
            <DropzoneArea onFileSelected={handleUpload} />

            {/* Loader de subida */}
            {loading && <Loader />}

            {/* Error subida */}
            {error && (
                <Alert type="error" message={`Error al subir la imagen: ${error.message}`} />
            )}


            {/* Vista previa (antes del upload final) */}
            {selectedFile && !loading && (
                <UploadPreview file={selectedFile} />
            )}

            {/* Éxito */}
            {data && (
                <Alert type="success" message="Imagen subida correctamente ✓" />
            )}


            {/* Sección descarga visible SOLO cuando data existe */}
            {data && (
                <div className="mt-6">
                    {/* Botones juntos */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleDownload(data.filename)}
                            disabled={downloading}
                            className={
                                downloading
                                ? "px-5 py-3 rounded-xl font-medium transition-all duration-300 border backdrop-blur-md shadow-sm bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                                : "px-5 py-3 rounded-xl font-medium transition-all duration-300 border backdrop-blur-md shadow-sm bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80"
                            }
                            >
                            {downloading ? "Downloading..." : "Download Image"}
                        </button>

                        {/* Botón de compartir URL después de subir imagen */}
                        <ShareButton url={data.url} />
                    </div>
                    {/* Error descarga */}
                    {downloadError && (
                        <Alert type="error" message={`Error al descargar: ${downloadError.message}`} />
                    )}

                    {/* Vista previa desde el servidor (blob) */}
                    {imageURL && (
                    <div className="mt-10 flex justify-center">
                        <div
                            className="
                                w-full max-w-3xl
                                bg-transparent
                                rounded-2xl
                                shadow-md
                                border 
                                border-gray-300 dark:border-gray-600
                                p-6 
                                transition-all 
                                duration-300
                            "
                        >
                        {/* Título */}
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Image Downloaded Preview
                        </h3>

                        {/* Contenedor imagen */}
                        <div
                            className="
                            rounded-xl 
                            overflow-hidden 
                            border border-gray-200 dark:border-gray-700 
                            shadow-sm
                            "
                        >
                            <img
                            src={imageURL}
                            alt="Imagen descargada"
                            className="w-full h-auto object-cover"
                            />
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            )}
        </div>
    );
}