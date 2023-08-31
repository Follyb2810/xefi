import { ReactNode } from 'react';
import {Navbar} from './Navbar';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box>
      {children}
      </Box>
    </>
  );
};

export default Layout;