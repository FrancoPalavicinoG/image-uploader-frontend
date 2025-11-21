export default function Loader() {
    return (
      <div className="flex flex-col items-center mt-6">
        {/* Texto */}
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
          Uploading… Please wait
        </p>
  
        {/* Barra contenedora */}
        <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          {/* Barra animada */}
          <div className="h-full bg-blue-500 rounded-full animate-loaderBar" />
        </div>
      </div>
    );
}