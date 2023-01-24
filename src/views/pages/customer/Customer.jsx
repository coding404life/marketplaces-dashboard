import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from '../../../store/constant';
import MainCard from '../../../ui-component/cards/MainCard';

// ==============================|| TYPOGRAPHY ||============================== //

function Customer() {
  return (
    <MainCard title="Customer">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          Customer
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Customer;
