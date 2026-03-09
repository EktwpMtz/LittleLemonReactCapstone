import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import { BookingPage } from './booking/BookingPage';
import { RootLayout } from './layout/RootLayout';
import { MenuPage } from './menu/MenuPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
