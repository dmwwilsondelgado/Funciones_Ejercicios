import {getUsuarios,getPost,getCommets} from "./modulos/index.js";
const URL = "https://jsonplaceholder.typicode.com";
const usuarioId=3;

const getusuarioId= async (usuarioId)=>{
    let usuario= await getUsuarios(URL,usuarioId);
    let post =await getPost(URL,usuario[0])
}

getusuarioId(usuarioId);


const manejardatos = async () => {
    const usuarios =  await getUsuarios(URL);
    return await Promise.all(usuarios.map(async(usuario)=>{
        const posts = await getPost(URL,usuario);
        const comentPost = await Promise.all( posts.map(async(post)=>{
            const coments = await getCommets(URL,post);
            return {...post,coments};
        }));
        return {...usuario,comentPost};
    }));
};
manejardatos().then((data)=>{
    console.log(data[0]);
});



const compani = async () => {
    const album = await getAlbunes(URL);
}

mostrarAlbunes = async (album) => {
    //aca desarrollar
}