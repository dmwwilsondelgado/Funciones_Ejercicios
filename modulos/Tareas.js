import solicitud from "./solicitud.js";
export const getTareasPendientes = async (URL, userId) => {
  const response = await fetch(`${URL}/todos?userId=${userId}`);
  const todos = await solicitud(ruta);
  return todos.filter((todo) => !todo.completed);
};
