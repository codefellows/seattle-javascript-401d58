import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

function Header() {

  const [currentLeader, setCurrentLeader] = useState({});

  const votes = useSelector((state) => state.votes);
  const candidates = useSelector((state) => state.candidates);

  useEffect(() => {

    let leader = candidates.reduce((leader, candidate) => {
      return candidate.votes > leader.votes ? candidate : leader;
    });

    setCurrentLeader(leader);

  }, [candidates]);


  return (
    <header>
      <h1>Decision '24</h1>
      <h3>Leader: <span>{currentLeader.name}</span></h3>
      <h3>Votes: <span>{votes.totalVotes}</span></h3>
    </header>
  );
}

export default Header;
