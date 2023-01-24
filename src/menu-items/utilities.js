// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconUser,
} from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconUser,
};

// ============|| UTILITIES MENU ITEMS ||================== //

const utilities = {
  id: 'utilities',
  title: 'Marketplace',
  type: 'group',
  children: [
    {
      id: 'marketplace',
      title: 'MarketPlace',
      type: 'item',
      url: '/marketplace',
      icon: icons.IconBuildingStore,
      breadcrumbs: false,
    },
    {
      id: 'merchant',
      title: 'Merchant',
      type: 'item',
      url: '/merchant',
      icon: icons.IconBuildingWarehouse,
      breadcrumbs: false,
    },
    {
      id: 'customer',
      title: 'Customer',
      type: 'item',
      url: '/customer',
      icon: icons.IconUser,
      breadcrumbs: false,
    },
  ],
};

export default utilities;
