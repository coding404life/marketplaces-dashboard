import { Grid } from '@mui/material';

// project imports
import CustomersTable from '../../../components/tables/customersTables/CustomersTable';
import MainCard from '../../../ui-component/cards/MainCard';

function Customer() {
  return (
    <MainCard title="Customer">
      <Grid container>
        <Grid item xs={12}>
          <CustomersTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Customer;
