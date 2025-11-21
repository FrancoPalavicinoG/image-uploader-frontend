import { useDropzone } from "react-dropzone";

export default function DropzoneArea({ onFileSelected }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': [],
            'image/gif': [],
        },
        maxSize: 2 * 1024 * 1024, // 2 MB
        onDrop: (acceptedFiles) => onFileSelected(acceptedFiles[0]),
    });

    return (
        <div
          {...getRootProps()}
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Suelta la imagen...</p>
            ) : (
                <p>Arrastra una imagen o haz click para seleccionar</p>
            )}
        </div>
    );
}