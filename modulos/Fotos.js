import solicitud from "./solicitud";

export const getPhotos = async (URL,photos) => {
    return await solicitud(`${URL}/photos?albumId=${photos.id}`);
}
