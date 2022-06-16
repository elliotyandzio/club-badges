import { Table, TableBody, TableContainer } from '@mui/material';
import LeagueTableHeader from './LeagueTableHeader';
import LeagueTableRow from './LeagueTableRow';

const LeagueTable = ({ data }) => {
  return (
    <TableContainer style={{ height: '600px', width: '600px', overflow: 'scroll', border: '1px solid lightgrey', borderRadius: '4px', margin: '10px' }}>
      <Table>
        <LeagueTableHeader />
        <TableBody>
          {data.map((team, index) => <LeagueTableRow teamData={team} index={index} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LeagueTable;