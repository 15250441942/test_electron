let token = '';
const getToken = () => _token;
const setToken = (_token) => {
  token = _token;
};
const clear = () => {
  token = '';
};
export { getToken, clear, setToken };