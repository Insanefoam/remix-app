import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { PropsWithChildren, useState } from 'react';
import { Link } from 'remix';
import { appRoutes } from '~/constants/routes';

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Box margin="-8px">
      <Header />
      <Box padding="4px">{children}</Box>
    </Box>
  );
}

const pages = [
  { title: 'Products', href: appRoutes.products },
  { title: 'Cart', href: appRoutes.cart },
];
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AppBar position="static" style={{ marginBottom: 24 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={appRoutes.home}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Remix App
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              open={isMobileMenuOpen}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={page.href}
                key={page.href}
              >
                <Button
                  key={page.title}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
