import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconCoffee } from '@tabler/icons';
import { useParams } from 'react-router';

// project files
import CustomerDetailsTable from '../../../components/tables/customersTables/CustomerDetailsTable';
import MainCard from '../../../ui-component/cards/MainCard';

export default function CustomerDetails() {
  const { customerID } = useParams();

  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" alignItems="end">
            <Typography marginRight={1} variant="h4" color="rebeccapurple" display="flex" alignItems="end">
              <IconCoffee />
              <Box marginLeft={0.5}>Customer Name:</Box>
            </Typography>

            <Typography variant="h4">{customerID}</Typography>
          </Box>
          <Box display="flex" mt={1} ml={3.5}>
            <Typography variant="h4" color="rebeccapurple">
              Email:
            </Typography>
            <Typography variant="h4" marginLeft={0.5}>
              {customerID}@gmail.com
            </Typography>
          </Box>
          <Box display="flex" mt={1} ml={3.5}>
            <Typography variant="h4" color="rebeccapurple">
              Profile Url:-
            </Typography>
            <Typography
              variant="h4"
              marginLeft={0.5}
              href="https://dev.hawker.social/RiteshThummar"
              component="a"
              target="_blank"
            >
              {customerID}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          <CustomerDetailsTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}
