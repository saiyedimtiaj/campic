const IMG_BB_API_KEY = 'ca1e75a277bb15be2aa64bc489aa437b';
const IMG_BB_API_URL = 'https://api.imgbb.com/1/upload';

interface ImgBBResponse {
    data: {
        url: string;
    };
}

const uploadImageToImgBB = async (imageFile: File): Promise<ImgBBResponse> => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(`${IMG_BB_API_URL}?key=${IMG_BB_API_KEY}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error uploading image to ImgBB:', error);
        throw error;
    }
};

export default uploadImageToImgBB;
