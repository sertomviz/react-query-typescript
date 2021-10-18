import React from 'react';
import { styled, Box } from '@mui/material';
import { Header } from './';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Header />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
          }}
        >
          {children}
        </Box>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;

const ContentWrapper = styled('div')`
  min-height: 100vh;
`;

// const DrawerHeader = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));
