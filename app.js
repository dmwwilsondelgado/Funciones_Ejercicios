import {
  getUsuarios,
  getPost,
  getCommets,
  getAlbumm,
  getPhotos,
} from "./modulos/index.js"; // importamos las funciones de los modulos estas funciones son asincronas
const URL = "https://jsonplaceholder.typicode.com"; // declaramos la url de la api que es una constante para trabajar con ella
const usuarioId = 3; // selecionamos el usuario que queremos buscar con ayuda de baclist

const getusuarioId = async (usuarioId) => {
  // creamos una funcion asincrona que recibe un parametro que es el id del usuario
  let usuario = await getUsuarios(URL, usuarioId); // declaramos una variable que va a recibir el resultado de la funcion getUsuarios que recibe la url y el id del usuario
  let post = await getPost(URL, usuario[0]); // declaramos una variable que va a recibir el resultado de la funcion getPost que recibe la url y el usuario
}; // finalizamo la funcion asicorna con un corchete
getusuarioId(usuarioId); // llamamos a la funcion id y su respectivo parametro que es el id del usuario

const manejardatos = async () => {
  // creamos una funcion asicrona que  no recibe parametros
  const usuarios = await getUsuarios(URL); // declaramos una variable que va a recibir el resultado de la funcion getUsuarios y su respectivo enlace URL
  return await Promise.all(
    usuarios.map(async (usuario) => {
      const posts = await getPost(URL, usuario); //declaramos una variable const que va recibir el resultado de la funcion getPost que recibe esta url con el usuario
      const comentPost = await Promise.all(
        posts.map(async (post) => {
          // declaramos una variable que va a recibir una promesa que recibe un arreglo de post y un map que recorre el arreglo de post
          const coments = await getCommets(URL, post); // declaramos una variable const que va a recibir el resultado de la funcion getComments
          return { ...post, coments }; // retornamo un objeto que va a tener las propiedade de post y coments
        })
      ); // ciere
      return { ...user, albums: albumPhotos, posts: comentPost }; // retornamos un objeto que va a tener las propiedades de usuario y comentPost y album
    })
  ); // ciere de la promesa retornando un arreglo de usuarios con sus respectivos comentarios
};
console.log(data);
manejardatos().then((data) => {
  // llamamos a la funcion manejardatos y le pasamos un parametro que es una funcion que recibe un arreglo de datos
  console.log(data[0]); // mostramos en consola el primer elemento del arreglo de datos
}); // cierre de la funcion manejardatos

const obtenerUsername = async (URL, username) => {
  const users = await getUsuarios(URL);
  const user = users.find((user) => user.username === username); // Buscar por username
  if (!user) {
    console.log("Usuario no encontrado");
    return;
  }
  const albums = await getAlbum(URL, user.id);
  const albumPhotos = await Promise.all(
    albums.map(async (album) => {
      const photos = await getPhotos(URL, album.id);
      return { ...album, photos };
    })
  );

  console.log({ user, albums: albumPhotos });
};

const filtrarPostsPorNombre = async (URL, nombre) => {
  const posts = await getPost(URL);
  const filteredPosts = posts.filter((post) => post.title.includes(nombre));

  const postsWithComments = await Promise.all(
    filteredPosts.map(async (post) => {
      const comments = await getComments(URL, post.id);
      return { ...post, comments };
    })
  );

  console.log(postsWithComments);
};

const menuInteractivo = async () => {
  console.log("Seleccione una opción:");
  console.log("1. Listar tareas pendientes");
  console.log("2. Buscar por nombre de usuario");
  console.log("3. Filtrar posts por nombre");
  console.log("4. Consultar usuarios con nombre y teléfono");
  console.log("5. Solicitar usuarios con todos sus datos");

  const opcion = prompt("Ingrese el número de la opción:");

  switch (opcion) {
    case "1":
      manejarDatos(); // Implementa la lógica correspondiente
      break;
    case "2":
      obtenerUsername(URL, prompt("Ingrese el username:"));
      break;
    case "3":
      filtrarPostsPorNombre(URL, prompt("Ingrese el nombre:"));
      break;
    case "4":
      console.log(await getUsersWithPhone(URL));
      break;
    case "5":
      manejarDatos();
      break;
    default:
      console.log("Opción inválida");
      break;
  }
};

menuInteractivo();
