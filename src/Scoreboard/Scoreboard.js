import { Grid, Container } from '@mui/material';

const Scoreboard = ({ data }) => {
  return (
    <Container style={{ maxWidth: 'unset', padding: '10px' }}>
      <Grid container spacing={1} style={{ height: '150px', border: '1px solid lightgrey', borderRadius: '4px', display: 'flex', alignItems: 'center', margin: '0' }}>
        <Grid item xs={5} style={{ display: 'flex', paddingLeft: '20px', alignItems: 'center' }}>
          <img src={data[2].badges.big} alt="bigBadge" style={{ height: '100px', width: '100px' }} />
          <h2>{data[2].name}</h2>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>2 - 1</h2>
        </Grid>
        <Grid item xs={5} style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', paddingRight: '20px' }}>
          <img src={data[1].badges.big} alt="bigBadge" style={{ height: '100px', width: '100px' }} />
          <h2>{data[1].name}</h2>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Scoreboard;