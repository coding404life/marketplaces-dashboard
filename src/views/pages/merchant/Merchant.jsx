import { Grid } from '@mui/material';

// project imports
import MerchantTable from '../../../components/tables/merchantTables/MerchantTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Merchant() {
  return (
    <MainCard title="Merchant">
      <Grid container>
        <Grid item xs={12}>
          <MerchantTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Merchant;
