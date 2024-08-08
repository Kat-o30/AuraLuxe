import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const KLipKitPage = lazy(() => import('../KLipKitPage'));
const KLiquidLipstickPage = lazy(() => import('../KLiquidLipStickPage'));
const KGlowBalmPage = lazy(() => import('../KGlowBalmPage'));

const BrandsOfferProductPages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/product/1" element={<KLipKitPage />} />
        <Route path="/product/2" element={<KLiquidLipstickPage />} />
        <Route path="/product/3" element={<KGlowBalmPage />} />
      </Routes>
    </Suspense>
  );
}

export default BrandsOfferProductPages;
