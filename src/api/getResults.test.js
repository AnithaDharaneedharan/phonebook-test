const { getResults, getResultsFromApi } = require('./getResults');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'Isaac Ingram',
        phone: '012345678916',
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('getResults API mocked tests', () => {
  it('should return an empty array when search str is empty or undefined', async () => {
    expect(await getResults()).toEqual([]);
    expect(await getResults('')).toEqual([]);
  });

  it('should return the filtered data according to case-insensitive partial name match', async () => {
    const results = await getResultsFromApi('aac');
    expect(results).toEqual({
      name: 'Isaac Ingram',
      phone: '012345678916',
    });
    expect(results.name).toEqual('Isaac Ingram');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('returns null when exception', async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const results = await getResultsFromApi('ani');
    expect(results).toEqual(null);
  });

});
