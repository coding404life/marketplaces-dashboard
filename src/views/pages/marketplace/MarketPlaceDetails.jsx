import { useParams } from 'react-router';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconCoffee } from '@tabler/icons';

import TransactionsTable from '../../../components/TransactionsTable';
import MainCard from '../../../ui-component/cards/MainCard';

function MarketPlaceDetails() {
  const { marketplaceID } = useParams();
  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Box display="flex" alignItems="center">
                <Typography marginBottom={0.5} marginRight={1} variant="body1" color="rebeccapurple">
                  <IconCoffee />
                </Typography>

                <Typography variant="h4">{marketplaceID}</Typography>
              </Box>

              <Typography variant="body1" color="GrayText">
                Description of marketplace
              </Typography>
              <Typography variant="body1" color="GrayText">
                Domain
              </Typography>
            </div>

            <div>
              <Typography variant="h4">Stats</Typography>
              <Typography variant="body1" color="black" display="flex">
                Total no of transactions:
                <Typography marginLeft={0.5} color="purple">
                  20412
                </Typography>
              </Typography>
              <Typography variant="body1" color="black" display="flex">
                Total revanue:
                <Typography marginLeft={0.5} color="purple">
                  $3000
                </Typography>
              </Typography>
              <Typography variant="body1" color="black" display="flex">
                Total no of merchants:
                <Typography marginLeft={0.5} color="purple">
                  51
                </Typography>
              </Typography>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} marginTop={10}>
          <TransactionsTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default MarketPlaceDetails;
