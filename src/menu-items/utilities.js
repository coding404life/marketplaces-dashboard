// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconUser,
  IconTag,
  IconBrandProducthunt,
  IconCalendarEvent,
  IconTransform,
  IconShoppingCart,
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
  IconTag,
  IconBrandProducthunt,
  IconCalendarEvent,
  IconTransform,
  IconShoppingCart,
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
    {
      id: 'events',
      title: 'Events',
      type: 'item',
      url: '/events',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false,
    },
    {
      id: 'product',
      title: 'Product',
      type: 'item',
      url: '/product',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false,
    },
    {
      id: 'purchases',
      title: 'Purchases',
      type: 'item',
      url: '/purchases',
      icon: icons.IconShoppingCart,
      breadcrumbs: false,
    },
    {
      id: 'prices',
      title: 'Prices',
      type: 'item',
      url: '/prices',
      icon: icons.IconTag,
      breadcrumbs: false,
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.IconTransform,
      breadcrumbs: false,
    },
  ],
};

export default utilities;
