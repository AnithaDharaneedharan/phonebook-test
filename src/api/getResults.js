const apiUrl = process.env.REACT_APP_API_URL;

export async function getResults(term) {
  if (!term) {
    return [];
  }
  let getApiResults = await getResultsFromApi(term);
  return getApiResults;
}

export async function getResultsFromApi(term) {
  try {
    const data = await fetch(`${apiUrl}/contacts?term=${term}`);
    const contacts = await data.json();
    return contacts;
  } catch (error) {
    return null;
  }
}
