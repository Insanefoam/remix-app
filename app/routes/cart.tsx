import { useCart } from '~/hooks/useCartContext';
import MainLayout from '~/layouts/main.layout';
import {
  Grid,
  Paper,
  experimentalStyled as styled,
  ImageListItem,
  Typography,
  IconButton,
  Badge,
  Box,
} from '@mui/material';
import { RemoveShoppingCart } from '@mui/icons-material';
import { Product } from '~/common/types';
import { useMemo } from 'react';

export default function Cart() {
  const { products, removeProduct } = useCart();

  const handleRemoveProduct = (product: Product) => {
    removeProduct(product);
  };

  const getBadgeContent = (product: Product) => {
    const productInCartCount = products.filter(
      (item) => item.id === product.id
    ).length;

    if (productInCartCount) {
      return productInCartCount;
    }

    return null;
  };

  const uniqueProducts = useMemo(
    () =>
      products.reduce<Product[]>(
        (uniq, current) => (uniq.includes(current) ? uniq : [...uniq, current]),
        []
      ),
    [products]
  );

  return (
    <MainLayout>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {uniqueProducts.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Item style={{ position: 'relative' }}>
              <Box position="absolute" top="16px" right="16px">
                <Badge badgeContent={getBadgeContent(product)} color="primary">
                  <IconButton onClick={() => handleRemoveProduct(product)}>
                    <RemoveShoppingCart fontSize="large" />
                  </IconButton>
                </Badge>
              </Box>
              <ImageListItem
                style={{ maxWidth: 200, maxHeight: 200 }}
                key={product.image}
              >
                <img
                  src={product.image}
                  srcSet={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              </ImageListItem>
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="caption">{product.price}$</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
