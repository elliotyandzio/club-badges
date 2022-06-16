import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const Search = ({ handleChange, currentLeague }) => {
  return (
    <FormControl fullWidth style={{ marginTop: '10px', marginLeft: '10px', width: '50%' }}>
      <InputLabel id="demo-simple-select-label">League</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentLeague}
        label="League"
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value='premierLeague'>Premier League</MenuItem>
        <MenuItem value='laLiga'>La Liga</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Search;