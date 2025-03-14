import solicitud from "./solicitud";

export const getPhotos = async (URL, album) => {
    return await solicitud(`${URL}/photos?albumId=${album.id}`);
}
