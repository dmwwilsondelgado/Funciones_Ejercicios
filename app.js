import {getUsuarios,getPost,getCommets,getAlbumm,getPhotos} from "./modulos/index.js";// importamos las funciones de los modulos estas funciones son asincronas
const URL = "https://jsonplaceholder.typicode.com"; // declaramos la url de la api que es una constante para trabajar con ella
const usuarioId=3;// selecionamos el usuario que queremos buscar con ayuda de baclist 

const getusuarioId= async (usuarioId)=>{ // creamos una funcion asincrona que recibe un parametro que es el id del usuario
    let usuario= await getUsuarios(URL,usuarioId);// declaramos una variable que va a recibir el resultado de la funcion getUsuarios que recibe la url y el id del usuario
    let post =await getPost(URL,usuario[0]) // declaramos una variable que va a recibir el resultado de la funcion getPost que recibe la url y el usuario
}// finalizamo la funcion asicorna con un corchete
getusuarioId(usuarioId);// llamamos a la funcion id y su respectivo parametro que es el id del usuario

const manejardatos = async () => { // creamos una funcion asicrona que  no recibe parametros 
    const usuarios =  await getUsuarios(URL);// declaramos una variable que va a recibir el resultado de la funcion getUsuarios y su respectivo enlace URL
    return await Promise.all(usuarios.map(async(usuario)=>{ // retornamos una promesa que recibe un arrglo de usuarios y un map que recorre el arreglo de usuarios 
        const album = await getAlbumm(URL,usuario);// declaramos una variable const que va a recibir el resultado de la funcion getAlbumes que recibe la url y el usuario
        const getAlbum = await Promise.all(album.map(async(album)=>{
            const fotos = await getPhotos(URL,album);
            return {...album,fotos};
        })); // declaramos una variable const que va a recibir una promesa que recibe un arreglo de albumes y un map que recorre el arreglo de albumes
        const posts = await getPost(URL,usuario);//declaramos una variable const que va recibir el resultado de la funcion getPost que recibe esta url con el usuario 
        const comentPost = await Promise.all( posts.map(async(post)=>{ // declaramos una variable que va a recibir una promesa que recibe un arreglo de post y un map que recorre el arreglo de post
            const coments = await getCommets(URL,post);// declaramos una variable const que va a recibir el resultado de la funcion getComments 
            return {...post,coments};// retornamo un objeto que va a tener las propiedade de post y coments 
        })); // ciere
        return {...usuario,comentPost,getAlbum}; // retornamos un objeto que va a tener las propiedades de usuario y comentPost
    }));// ciere de la promesa retornando un arreglo de usuarios con sus respectivos comentarios
};
manejardatos().then((data)=>{// llamamos a la funcion manejardatos y le pasamos un parametro que es una funcion que recibe un arreglo de datos
    console.log(data[0]);// mostramos en consola el primer elemento del arreglo de datos
});// cierre de la funcion manejardatos


