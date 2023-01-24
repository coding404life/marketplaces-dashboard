import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import TableData from '../../../components/TableData';

function MarketPlace() {
  return (
    <MainCard title="MarketPlace">
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" mb={5}>
            <Button variant="outlined" color="primary" component={Link} to="addmarketplace">
              Add MarketPlace
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableData />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default MarketPlace;
