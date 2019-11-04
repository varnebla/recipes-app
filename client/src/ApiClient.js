const BASE_URL = 'http://localhost:3001';

const fetchRequest = (path, options) => {
  return fetch(BASE_URL + path, options)
    .then(response => response.json())
    .catch(reject => console.error(reject));
}

exports.getRandom = () => {
  return fetchRequest('/random');
};