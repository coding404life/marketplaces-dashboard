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
const MerchantDetails = Loadable(lazy(() => import('../views/pages/merchant/MerchantDetails')));

// Customer routes
const Customer = Loadable(lazy(() => import('../views/pages/customer/Customer')));
const CustomerDetails = Loadable(lazy(() => import('../views/pages/customer/CustomerDetails')));

// Events routes
const Events = Loadable(lazy(() => import('../views/pages/events/Events')));
const EventsDetails = Loadable(lazy(() => import('../views/pages/events/EventsDetails')));

// Product routes
const Product = Loadable(lazy(() => import('../views/pages/product/Product')));
const ProductDetails = Loadable(lazy(() => import('../views/pages/product/ProductDetails')));

// Prices routes
const Prices = Loadable(lazy(() => import('../views/pages/prices/Prices')));
const PricesDetails = Loadable(lazy(() => import('../views/pages/prices/PricesDetails')));

// Transactions routes
const Transactions = Loadable(lazy(() => import('../views/pages/transactions/Transactions')));
const TransactionsDetails = Loadable(lazy(() => import('../views/pages/transactions/TransactionsDetails')));

// Purchases routes
const Purchases = Loadable(lazy(() => import('../views/pages/purchases/Purchases')));
const PurchasesDetails = Loadable(lazy(() => import('../views/pages/purchases/PurchasesDetails')));

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
      path: 'merchant',
      children: [
        {
          path: ':merchantId',
          element: <MerchantDetails />,
        },
      ],
    },
    {
      path: 'customer',
      element: <Customer />,
    },
    {
      path: 'customer',
      children: [
        {
          path: ':customerID',
          element: <CustomerDetails />,
        },
      ],
    },
    {
      path: 'events',
      element: <Events />,
    },
    {
      path: 'events',
      children: [
        {
          path: 'events-history',
          element: <EventsDetails />,
        },
      ],
    },
    {
      path: 'transactions',
      element: <Transactions />,
    },
    {
      path: 'transactions',
      children: [
        {
          path: 'transactions-history',
          element: <TransactionsDetails />,
        },
      ],
    },
    {
      path: 'product',
      element: <Product />,
    },
    {
      path: 'product',
      children: [
        {
          path: 'product-history',
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: 'prices',
      element: <Prices />,
    },
    {
      path: 'prices',
      children: [
        {
          path: 'prices-history',
          element: <PricesDetails />,
        },
      ],
    },
    {
      path: 'purchases',
      element: <Purchases />,
    },
    {
      path: 'purchases',
      children: [
        {
          path: 'purchases-history',
          element: <PurchasesDetails />,
        },
      ],
    },
  ],
};

export default MainRoutes;
