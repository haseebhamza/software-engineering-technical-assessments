import { fetchResultData, fetchCandidateData } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const resultData = await fetchResultData();
  const candidateData = fetchCandidateData();

  resultData.results = resultData.results.map( resultEntry => {
    return {
      ...resultEntry,
      candidate: candidateData.find(c => c.id === resultEntry.candidateId)
    }
  })

  return resultData;
}

export default fetchResults;
