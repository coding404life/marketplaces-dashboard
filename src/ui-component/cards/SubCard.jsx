import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

// eslint-disable-next-line react/display-name
const SubCard = forwardRef(
  ({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        sx={{
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
          },
          ...sx,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />
        )}
        {darkTitle && title && (
          <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />
        )}

        {/* content & header divider */}
        {title && (
          <Divider
            sx={{
              opacity: 1,
              borderColor: theme.palette.primary.light,
            }}
          />
        )}

        {/* card content */}
        {content && (
          <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  },
);

SubCard.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.bool,
  contentClass: PropTypes.string.isRequired,
  darkTitle: PropTypes.bool.isRequired,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  contentSX: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]).isRequired,
};

SubCard.defaultProps = {
  content: true,
};

export default SubCard;
