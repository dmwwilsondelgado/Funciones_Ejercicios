import solicitud from "./solicitud.js"; // importamos la funcion solicitud del modulo solicitud
export const getAlbumm = async(URL,album)=>{ // exportamos la funcion getPost que recibe dos parametros URL y usuario
    return  await  solicitud(`${URL}/albums?userId=${album.id}`) // retornamos una promesa que recibe la funcion solicitud que recibe la url y el id del usuario
} // cierre de la funcion getPost