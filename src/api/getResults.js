const apiUrl = process.env.REACT_APP_API_URL;

export async function getResults(str) {
  if (!str) {
    return [];
  }
  let getApiResults = await getResultsFromApi(str);
  return getApiResults;
}

export async function getResultsFromApi(str) {
  try {
    const data = await fetch(`${apiUrl}/contacts?term=${str}`);
    const contacts = await data.json();
    return contacts;
  } catch (error) {
    return null;
  }
}
