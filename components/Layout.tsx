import React from 'react';
import NavBar from './NavBar';
import Seo from './Seo';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
