import { useClipboard } from "../hooks/useClipboard";   

export default function ShareButton({ url }) {
    const { copyToClipboard, copied } = useClipboard();

    return (
        <button
            onClick={() => copyToClipboard(url)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            {copied ? '¡Copiado!' : 'Compartir Enlace'}
        </button>
    );
}