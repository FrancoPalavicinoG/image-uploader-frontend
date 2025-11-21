import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

export default function DropzoneArea({ onFileSelected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
      "image/gif": [],
    },
    maxSize: 2 * 1024 * 1024, // 2 MB
    onDrop: (acceptedFiles) => onFileSelected(acceptedFiles[0]),
  });

  return (
    <div className="flex justify-center">
    <div
        {...getRootProps()}
        className={`
        w-full 
        max-w-3xl 
        bg-transparent
        rounded-2xl 
        shadow-md 
        border-2 
        border-dashed
        transition-all 
        duration-300 
        cursor-pointer 
        py-16 
        px-6 
        text-center
        ${isDragActive
            ? "border-blue-500 bg-blue-50 dark:bg-gray-700"
            : "border-gray-300 dark:border-gray-600"}
        `}
    >
        <input {...getInputProps()} />

        {/* Ícono */}
        <div className="flex justify-center mb-4">
          <UploadCloud
            className={`
              w-14 h-14 
              transition-colors
              ${isDragActive ? "text-blue-500" : "text-gray-400"}
            `}
          />
        </div>

        {/* Mensaje */}
        <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">
          {isDragActive ? (
            "Suelta la imagen aquí..."
          ) : (
            <>
              <span className="font-semibold">Drag & drop</span> a file or{" "}
              <span className="text-blue-500">browse files</span>
            </>
          )}
        </p>

        {/* Subtexto */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          JPG, PNG or GIF — Max file size 2MB
        </p>
      </div>
    </div>
  );
}