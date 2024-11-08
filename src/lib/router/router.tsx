/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../../layouts/RootLayout';
import HomePage from '../../pages/HomePage';

const CollectionPage = lazy(() => import('../../pages/CollectionPage'));
const MessagePage = lazy(() => import('../../pages/MessagePage'));
const NotificaitonPage = lazy(() => import('../../pages/NotificationPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage'));
const SubscriptionPage = lazy(() => import('../../pages/SubscriptionPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/collections',
        element: <CollectionPage />,
      },
      {
        path: '/messages',
        element: <MessagePage />,
      },
      {
        path: '/notifications',
        element: <NotificaitonPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/subscriptions',
        element: <SubscriptionPage />,
      },
    ],
  },
]);
