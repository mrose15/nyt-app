import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'New York Times API App',
  description: 'I am using Mantine with Next.js!',
};

const RootLayout = ({ children }: { children: any }) => (
  <html lang="en">
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
      <MantineProvider theme={theme}>
        <Container size="xxl">{children}</Container>
      </MantineProvider>
    </body>
  </html>
);

export default RootLayout;
