export const fetchPage = async (urlToFetch, setResults, setInfo, setError) => {
  try {
    const response = await fetch(urlToFetch);
    const data = await response.json();

    if(data.error) {
      setError(true);
      setInfo({})
      throw new Error('Not Found');
    }

    setError(false);
    setResults(data.results);
    setInfo(data.info);
  } catch (err) {
    console.log(`Cannot fetch data: ${err}`);
  }
};

export const fetchSingleSubject = async (urlToFetch, setData) => {
  try {
    const response = await fetch(urlToFetch);
    const data = await response.json();
    setData(data);
  } catch (err) {
    console.log(`Cannot fetch data: ${err}`);
  }
};

export const fetchMultipleCharacters = async (
  urlToFetch,
  objWithCharacters,
  setCharacters,
  objToLookFor
) => {
  // Return for the initial call when the objWithCharacters is empty
  if (Object.keys(objWithCharacters).length === 0) return;

  // Return if characters/residence array is empty
  if (objWithCharacters[objToLookFor].length === 0) return;

  for (let i = 0; i < objWithCharacters[objToLookFor].length; i++) {
    const indexToSliceFrom = objWithCharacters[objToLookFor][i].lastIndexOf('/');
    const characterIndex = objWithCharacters[objToLookFor][i].slice(indexToSliceFrom + 1);

    urlToFetch += `${characterIndex},`;
  }

  urlToFetch = urlToFetch.slice(0, urlToFetch.length - 1);

  try {
    const response = await fetch(urlToFetch);
    const data = await response.json();

    if (Array.isArray(data)) {
      setCharacters(data);
    } else {
      setCharacters([data]);
    }
  } catch (err) {
    console.log(`Cannot fetch data: ${err}`);
  }
};
