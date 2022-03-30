export const fetchPage = async (urlToFetch, setResults, setInfo, setError) => {
  try {
    if(urlToFetch === '') return;

    const response = await fetch(urlToFetch);
    const data = await response.json();

    if(data.error) {
      setError(true);
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
  // Return for the initial call when the location/episode object is empty
  if (Object.keys(objWithCharacters).length === 0) return;

  // Return if characters/residents array is empty
  if (objWithCharacters[objToLookFor].length === 0) return;

  // The characters/residents array contains endpoints for each character individually,
  // this loop is getting the id from every array item and adds it on a string that will
  // be the URL to fetch multiple characters
  for (let i = 0; i < objWithCharacters[objToLookFor].length; i++) {
    const indexToSliceFrom = objWithCharacters[objToLookFor][i].lastIndexOf('/');
    const characterIndex = objWithCharacters[objToLookFor][i].slice(indexToSliceFrom + 1);

    urlToFetch += `${characterIndex},`;
  }

  // Deletes the extra , at the end
  urlToFetch = urlToFetch.slice(0, urlToFetch.length - 1);

  try {
    const response = await fetch(urlToFetch);
    const data = await response.json();

    // If the fetched data is an array just update the state else if the data is an object
    // (meaning there was only one character/resident) put it in an empty array and update the state
    if (Array.isArray(data)) {
      setCharacters(data);
    } else {
      setCharacters([data]);
    }
  } catch (err) {
    console.log(`Cannot fetch data: ${err}`);
  }
};
