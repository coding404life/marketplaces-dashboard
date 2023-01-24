import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

// project imports
import { Box } from '@mui/system';
import MainCard from '../../../ui-component/cards/MainCard';

function MarketPlace() {
  const [marketPlaceName, setMarketPlaceName] = useState('');
  const [webHookUrl, setWebHookUrl] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // console.log('marketPlaceName 👉️', marketPlaceName);
    // console.log('webHookUrl 👉️', webHookUrl);

    setMarketPlaceName('');
    setWebHookUrl('');
  };

  return (
    <MainCard title="MarketPlace">
      <Grid container>
        <Grid item xs={12}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            display="flex"
            mb={5}
            onSubmit={handleOnSubmit}
          >
            <TextField
              id="outlined-basic"
              label="MarketPlace Name"
              placeholder="MarketPlace Name"
              variant="outlined"
              value={marketPlaceName}
              onChange={(e) => setMarketPlaceName(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="URL"
              placeholder="URL"
              variant="outlined"
              value={webHookUrl}
              onChange={(e) => setWebHookUrl(e.target.value)}
            />

            <Button sx={{ width: '25ch !important' }} type="submit" variant="contained" color="primary">
              Create MarketPlace
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default MarketPlace;
