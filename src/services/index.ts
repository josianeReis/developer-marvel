import API from './api';

export function getCharacters(params) {
  const { page, limit } = params;
  const response = API.get(
    `/v1/public/characters?limit=${limit}&offset=${page}`
  ).then((response) => {
    if (response.status !== 200) {
      console.error(':( Error, no fetched data');
      return {};
    } else {
      const message = ':) Success, fetched data';
      console.log('%c' + message);
      return {
        data: response.data.data.results,
        total: response.data.data.total,
        count: response.data.data.count,
        offset: response.data.data.offset
      };
    }
  });
  return response;
}

export function getCharacterById(id) {
  const response = API.get(`/v1/public/characters/${id}`).then((response) => {
    if (response.status !== 200) {
      console.error(':( Error, no fetched data');
      return {};
    } else {
      console.log('%c' + 'Success, fetched data');
      return response.data.data;
    }
  });
  return response;
}

export const getComicsByCharacterId = async (characterId: number) => {
  console.log('dentro characterId', typeof characterId);
  const response = await API.get(
    `/v1/public/characters/${characterId}/comics?limit=50&offset=${0}`
  ).then((response) => {
    if (response.status !== 200) {
      console.error(':( Error, no fetched data');
      return {};
    } else {
      console.log('%c' + 'Success, fetched data');
      return { ...response.data.data, characterId };
    }
  });
  return response;
};
