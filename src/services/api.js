const BASE_URL = 'https://rickandmortyapi.com/api/';

async function fetchEpisodes(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/episode?page=${page}`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
}

async function fetchCharactersByEpisode(episodeId) {
  try {
    const response = await fetch(`${BASE_URL}/episode/${episodeId}`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    return data.characters;
  } catch (error) {
    console.error('Error fetching characters by episode:', error);
    throw error;
  }
}

async function fetchCharacter(characterId) {
  try {
    const response = await fetch(`${BASE_URL}/character/${characterId}`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
}

export {fetchEpisodes, fetchCharactersByEpisode, fetchCharacter};
