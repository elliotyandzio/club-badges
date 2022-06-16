import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import Search from './Search/Search';
import Scoreboard from './Scoreboard';
import LeagueTable from './LeagueTable';

function App() {
  const [badgeData, setBadgeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [league, setLeague] = useState('')

  const fetchData = async (league) => {
    try {
      setIsLoading(true)
      const res = await fetch(`http://localhost:5000/badges/${league}`)
      const data = await res.json();
      setBadgeData(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(true)
      console.warn('Server not returning data')
      setIsLoading(false)
    }
  }

  const handleChange = e => {
    setLeague(e.target.value)
    fetchData(e.target.value)
  }

  return (
    <div className="App">
      <Search handleChange={handleChange} currentLeague={league} />
      {isLoading && <CircularProgress />}
      {!isLoading && badgeData.length > 0 && (
        <>
          <Scoreboard data={badgeData} />
          <LeagueTable data={badgeData} />
        </>
      )}
    </div>
  );
}

export default App;
