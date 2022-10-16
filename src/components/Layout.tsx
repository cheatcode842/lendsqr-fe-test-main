import { Fragment, ReactNode } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

type LayoutPropTypes = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutPropTypes) => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <main className='content'>{children}</main>
    </Fragment>
  );
};

export default Layout;
