import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export const RootLayout = () => {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-[#161618] text-white">
        <main className="flex justify-center overflow-y-auto p-4">
          <Suspense>
            <Navigation />
            <Outlet />
            {/* <div>suggestions</div> */}
          </Suspense>
        </main>
      </div>
    </>
  );
};
