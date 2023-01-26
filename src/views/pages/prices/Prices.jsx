import { Grid } from '@mui/material';

// project imports
import PricesTable from '../../../components/tables/prices/PricesTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Prices() {
  return (
    <MainCard title="Prices">
      <Grid container>
        <Grid item xs={12}>
          <PricesTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Prices;
