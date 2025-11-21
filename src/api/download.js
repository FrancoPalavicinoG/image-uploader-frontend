import http from "./http";

export async function downloadFile(filename) {
    const response = await http.get(`/download/${filename}`, {
        responseType: 'blob',
    });

    return response.data;
}