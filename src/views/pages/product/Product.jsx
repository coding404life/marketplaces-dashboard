import { Grid } from '@mui/material';

// project imports
import ProductTable from '../../../components/tables/product/ProductTable';
import MainCard from '../../../ui-component/cards/MainCard';

// =================|| TYPOGRAPHY ||=================== //

function Product() {
  return (
    <MainCard title="Product">
      <Grid container>
        <Grid item xs={12}>
          <ProductTable />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Product;
