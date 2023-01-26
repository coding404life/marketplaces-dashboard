import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconCoffee } from '@tabler/icons';
import { useParams } from 'react-router';

// project files
import PurchasesDetailsTable from '../../../components/tables/purchases/PurchasesDetailsTable';
import MainCard from '../../../ui-component/cards/MainCard';

export default function PurchasesDetails() {
  const { merchantId } = useParams();

  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" alignItems="end">
            <Typography marginRight={1} variant="h4" color="rebeccapurple" display="flex" alignItems="end">
              <IconCoffee />
              <Box marginLeft={0.5}>Purchases Details</Box>
            </Typography>

            <Typography variant="h4">{merchantId}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          <PurchasesDetailsTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}
