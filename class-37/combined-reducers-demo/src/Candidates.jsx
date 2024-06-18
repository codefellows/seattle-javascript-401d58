import { useSelector, useDispatch } from 'react-redux';

import { castVote, reset, disable } from './store/actions.js';

function Candidates() {

  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates) || [];
  const totalVotes = useSelector((state) => state.votes.totalVotes) || 0;

  function handleVote(candidate) {
    dispatch(castVote(candidate));
  }

  function disableCandidate(candidate) {
    console.log('disable');
    dispatch(disable(candidate));
  }

  function calculatePercentage(votes) {
    let pct = votes ? parseFloat((votes / totalVotes) * 100).toFixed(2) : 0;
    return `${pct}%`;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Actions</th>
            <th>Votes</th>
            <th>Pct</th>
          </tr>
        </thead>
        <tbody>

          {
            candidates.map(candidate =>

              <tr className={`eligible-${candidate.eligible}`} key={`candidate-${candidate.name}`}>
                <td onDoubleClick={() => disableCandidate(candidate)}>{candidate.name}</td>
                <td>
                  {
                    candidate.eligible
                      ? <button onClick={() => handleVote(candidate)}>Vote</button>
                      : null
                  }
                </td>
                <td>{candidate.votes}</td>
                <td>{calculatePercentage(candidate.votes)} </td>
              </tr>

            )
          }

        </tbody>
      </table>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default Candidates;
