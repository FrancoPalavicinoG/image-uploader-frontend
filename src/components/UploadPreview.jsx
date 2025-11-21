export default function UploadPreview({ file }) {
    return (
      <div className="mt-8 flex justify-center">
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
            Image Preview
          </h3>
  
          {/* Contenedor de la imagen */}
          <div className="
            rounded-xl 
            overflow-hidden 
            border border-gray-200 dark:border-gray-700
            shadow-sm
          ">
            <img
              src={URL.createObjectURL(file)}
              alt="Vista previa"
              className="w-full h-auto object-cover"
            />
          </div>
  
        </div>
      </div>
    );
  }