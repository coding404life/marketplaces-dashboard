import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from '../../../store/constant';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Merchant() {
  return (
    <MainCard title="Merchant">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          Merchant
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Merchant;
