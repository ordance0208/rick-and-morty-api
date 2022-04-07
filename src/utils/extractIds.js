const extractIds = (array) => {
  let urlToFetch = '';

  for(let i = 0; i < array.length; i++) {
    const indexToSliceFrom = array[i].lastIndexOf('/');
    const characterIndex = array[i].slice(indexToSliceFrom + 1);

    urlToFetch += `${characterIndex},`
  }

  urlToFetch = urlToFetch.slice(0, urlToFetch.length - 1);

  return urlToFetch;
}

export default extractIds;