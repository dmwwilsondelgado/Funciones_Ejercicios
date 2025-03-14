importScripts;
export const getUsersPhone = async (URL) => {
  const users = await getUsuarios(URL);
  return users.map((user) => ({ name: user.name, phone: user.phone }));
};
