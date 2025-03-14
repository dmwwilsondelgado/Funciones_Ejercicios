
// Listar todas las tareas pendientes por cada usuario registrado en la API
const URL = "https://jsonplaceholder.typicode.com";

const tareasPendientes = async (URL,usuario) => {
    const tareas = await fetch(`${URL}/todos?userId=${usuario.id}`);
    const tareasJson = await tareas.json();
    console.log(tareasJson);
    tareasJson.filter(tarea => tarea.completed === false);
    return;

}
// const getUsuarios = async (URL) => {};

manejo_datos().then(()=>{});

// manejodatos().then(()=>{
//     console.log(id[0],tareasPendientes);
// });

