import { Grid } from '@mui/material';

// project imports
import PurchasesTable from '../../../components/tables/purchases/PurchasesTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Purchases() {
  return (
    <MainCard title="Purchases">
      <Grid container>
        <Grid item xs={12}>
          <PurchasesTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Purchases;
