export function searchRecent() {

  const URI = 'album/302127';
  _getJsonp(URI)
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

export function searchMusic(title = '') {
  // TODO: implement searchMusic
}

export function searchAlbums(title = '') {
  // TODO: implement search Albums
}

export function searchArtists(name = '') {
  // TODO: implement searchArtists
}

async function _getJsonp(endpoint = '') {
  try {
    const response = await fetchJsonp(`https://api.deezer.com/${endpoint}?output=jsonp`, { mode: 'no-cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}