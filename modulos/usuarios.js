import solicitud from "./solicitud.js";
export const getUsuarios = async (URL, id) => {
  let ruta = "";
  if (id) {
    ruta = `${URL}/users?id=${id}`;
  } else {
    ruta = `${URL}/users`;
  }

  const usuarios = await solicitud(ruta);
  return usuarios;
};

export const getTareasPendientes = async (URL, userId) => {
  const response = await fetch(`${URL}/todos?userId=${userId}`);
  const todos = await response.json();
  return todos.filter((todo) => !todo.completed);
};

export const getUsersWithPhone = async (URL) => {
  const users = await getUsuarios(URL);
  return users.map((user) => ({ name: user.name, phone: user.phone }));
};
