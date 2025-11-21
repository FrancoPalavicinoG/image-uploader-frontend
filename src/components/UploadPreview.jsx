export default function UploadPreview({ file }) {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Vista previa de la imagen subida:</h3>
            <img
                src={URL.createObjectURL(file)}
                alt="Vista previa de la imagen subida"
                className="max-w-full h-auto rounded"
            />
        </div>
    );
}