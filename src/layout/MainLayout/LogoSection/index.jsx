import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from '../../../ui-component/Logo';
import config from '../../../config';

// ==============================|| MAIN LOGO ||============================== //

function LogoSection() {
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
}

export default LogoSection;
