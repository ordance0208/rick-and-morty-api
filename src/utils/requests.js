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

export const fetchMultipleCharacters = async (urlToFetch, setData) => {
  try {
    const response = await fetch(urlToFetch);
    const data = await response.json();

    // If the fetched data is an array just update the state else if the data is an object
    // (meaning there was only one character/resident) put it in an empty array and update the state
    if (Array.isArray(data)) {
      setData(data);
    } else {
      setData ([data]);
    }
  } catch (err) {
    console.log(`Cannot fetch data: ${err}`);
  }
};

