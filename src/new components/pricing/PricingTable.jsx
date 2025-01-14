import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography, Paper } from '@mui/material';

const pricedata = [
  { feature: 'Feature 1', free: false, standard: true, premium: true },
  { feature: 'Feature 2', free: true, standard: true, premium: true },
  { feature: 'Feature 3', free: false, standard: false, premium: true },
  { feature: 'Feature 4', free: true, standard: true, premium: false },
  { feature: 'Feature 5', free: false, standard: true, premium: true },
];

const PricingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {pricedata.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: 'grey.400',
                  padding: 2,
                  textAlign: 'center',
                  backgroundColor: 'grey.100',
                }}
              >
                <Typography variant="body1">{row.feature}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: 'grey.400',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1">{row.free ? 'Yes' : 'No'}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: 'grey.400',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1">{row.standard ? 'Yes' : 'No'}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: 'grey.400',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1">{row.premium ? 'Yes' : 'No'}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PricingTable;
