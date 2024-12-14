export const phoneRegex = /^05\d{8,}$/;
export const servUrl = `http://localhost:3001`;
export const servPassword = `2123@@!l;asd21555%!%!saq`;
export const token = localStorage.getItem("token");
export const getHeaders = (localItem) => {
  const localStorageToken = localStorage.getItem(localItem);
  return {
    headers: {
      Authorization: localStorageToken,
    },
  };
};
