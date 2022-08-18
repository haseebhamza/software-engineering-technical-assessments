import fetchResults from '../dataFetcher';
import { fetchResultData, fetchCandidateData } from '../fakeAPI';

jest.mock('../fakeAPI');

const mockFakeApi = (votingComplete, results, candidates) => {
  fetchResultData.mockResolvedValue({
    isComplete: votingComplete,
    results: results,
  })
  fetchCandidateData.mockReturnValue(candidates);
}

test('returns an Object', async () => {
    mockFakeApi(false, [], []);
    const resultData = await fetchResults();
    expect(typeof resultData).toBe('object');
});

test('response contains a result array', async () => {
  mockFakeApi(false, [], []);
  const resultData = await fetchResults();
  expect(Array.isArray(resultData.results)).toBe(true);
});
