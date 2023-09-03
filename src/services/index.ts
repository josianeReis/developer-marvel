import API from './api';

export function getCharacters() {
  // const { page } = params;
  const response = API.get(`/v1/public/characters?limit=10&offset=1`);
  return response;
}
