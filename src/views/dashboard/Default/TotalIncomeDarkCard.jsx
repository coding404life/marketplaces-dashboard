import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import TotalIncomeCard from '../../../ui-component/cards/Skeleton/TotalIncomeCard';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  marginRight: theme.spacing(1),
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

// =============|| DASHBOARD - TOTAL INCOME DARK CARD ||================ //

function TotalIncomeDarkCard({ isLoading, message, title, OptionIcon, sx, avatarSX }) {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false} sx={sx}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.secondary[800],
                      ...avatarSX,
                      color: '#fff',
                    }}
                  >
                    {OptionIcon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                  }}
                  primary={
                    <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                      {title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="h4" sx={{ color: 'primary.light', mt: 0.25 }}>
                      {message}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
}

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  OptionIcon: PropTypes.element,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  avatarSX: PropTypes.object,
};
TotalIncomeDarkCard.defaultProps = {
  OptionIcon: null,
  sx: {},
  avatarSX: {},
};

export default TotalIncomeDarkCard;
