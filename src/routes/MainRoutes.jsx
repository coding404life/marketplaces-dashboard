import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// Marketplace routes
const MarketPlace = Loadable(lazy(() => import('../views/pages/marketplace/MarketPlace')));
const MarketPlaceDetails = Loadable(lazy(() => import('../views/pages/marketplace/MarketPlaceDetails')));
const AddMarketPlace = Loadable(lazy(() => import('../views/pages/marketplace/AddMarketPlace')));

// Merchant routes
const Merchant = Loadable(lazy(() => import('../views/pages/merchant/Merchant')));
// Customer routes
const Customer = Loadable(lazy(() => import('../views/pages/customer/Customer')));

// ================|| MAIN ROUTING ||================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />,
    },

    {
      path: 'marketPlace',
      element: <MarketPlace />,
    },
    {
      path: 'marketPlace',
      children: [
        {
          path: 'addmarketplace',
          element: <AddMarketPlace />,
        },
        {
          path: ':marketplaceID',
          element: <MarketPlaceDetails />,
        },
      ],
    },
    {
      path: 'merchant',
      element: <Merchant />,
    },
    {
      path: 'customer',
      element: <Customer />,
    },
  ],
};

export default MainRoutes;
