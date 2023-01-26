import { useParams } from 'react-router';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconCoffee } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';

// assets
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import TransactionsTable from '../../../components/tables/marketplaceTables/TransactionsTable';
import MainCard from '../../../ui-component/cards/MainCard';
import TotalIncomeDarkCard from '../../dashboard/Default/TotalIncomeDarkCard';

function MarketPlaceDetails() {
  const { marketplaceID } = useParams();
  const theme = useTheme();
  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Box marginRight={5}>
              <Box display="flex" alignItems="end">
                <Typography marginRight={1} variant="h4" color="rebeccapurple" display="flex" alignItems="end">
                  <IconCoffee />
                  <Box marginLeft={0.5}>MarketPlace Name:</Box>
                </Typography>

                <Typography variant="h4">{marketplaceID}</Typography>
              </Box>
              <Box display="flex" mt={1} ml={3.5}>
                <Typography variant="h4" color="rebeccapurple">
                  Description:
                </Typography>
                <Typography variant="h4" marginLeft={0.5}>
                  Amazing community
                </Typography>
              </Box>
              <Box display="flex" mt={1} ml={3.5}>
                <Typography variant="h4" color="rebeccapurple">
                  Domain:-
                </Typography>
                <Typography
                  variant="h4"
                  marginLeft={0.5}
                  href="https://dev.hawker.social/RiteshThummar"
                  component="a"
                  target="_blank"
                >
                  {marketplaceID}
                </Typography>
              </Box>
            </Box>

            <Box display="flex">
              <TotalIncomeDarkCard
                title="Total no of transactions"
                message="20412"
                OptionIcon={<AutorenewIcon />}
                sx={{ backgroundColor: theme.palette.primary.dark }}
                avatarSX={{ backgroundColor: theme.palette.primary[800] }}
              />
              <TotalIncomeDarkCard
                title="Total revanue"
                message="$3000"
                OptionIcon={<AttachMoneyIcon />}
                sx={{ backgroundColor: theme.palette.success.dark }}
                avatarSX={{ backgroundColor: theme.palette.success.main }}
              />
              <TotalIncomeDarkCard title="Total no of merchants" message="51" OptionIcon={<Diversity1Icon />} />
            </Box>
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
