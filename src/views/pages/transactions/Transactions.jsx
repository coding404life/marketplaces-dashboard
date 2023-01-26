import { Grid } from '@mui/material';

// project imports
import TransactionsTable from '../../../components/tables/transactions/TransactionsTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Transactions() {
  return (
    <MainCard title="Transactions">
      <Grid container>
        <Grid item xs={12}>
          <TransactionsTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Transactions;
