import { Grid } from '@mui/material';

// project imports
import EventsTable from '../../../components/tables/events/EventsTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Events() {
  return (
    <MainCard title="Events">
      <Grid container>
        <Grid item xs={12}>
          <EventsTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Events;
