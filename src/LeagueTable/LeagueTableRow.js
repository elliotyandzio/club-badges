import { TableCell, TableRow } from '@mui/material';

const LeagueTableRow = ({ teamData, index }) => {
  return (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={teamData.badges.small} alt="tiny" style={{ height: '15px', maxWidth: '20px', width: '15px', marginRight: '10px' }} />{teamData.name}
        </div>
      </TableCell>
      <TableCell>0</TableCell>
      <TableCell>0</TableCell>
      <TableCell>0</TableCell>
      <TableCell>0</TableCell>
      <TableCell>0</TableCell>
    </TableRow>
  )
}

export default LeagueTableRow;