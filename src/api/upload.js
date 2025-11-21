import http from "./http";

export async function uploadFile(file) {
    const formData = new FormData();
    formData.append('image', file);

    const { data } = await http.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return data;
}