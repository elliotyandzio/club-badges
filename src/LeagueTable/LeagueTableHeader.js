import { TableHead, TableCell, TableRow } from '@mui/material';

const LeagueTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Pos</TableCell>
      <TableCell>Team Name</TableCell>
      <TableCell>Won</TableCell>
      <TableCell>Draw</TableCell>
      <TableCell>Loss</TableCell>
      <TableCell>GD</TableCell>
      <TableCell>Pts</TableCell>
    </TableRow>
  </TableHead>
)

export default LeagueTableHeader;