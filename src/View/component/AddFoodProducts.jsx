
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Typography, Box } from '@mui/material';

const AddFoodProducts = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    productCategory: '',
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)

    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    console.log(e.target)
    // console.log(value)
    setFormData({ productCategory: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        {/* <TextField
          label="Product Details"
          name="productDetails"
          value={formData.productDetails}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        /> */}

        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={shiftSchedule}
              label="Food Category"
              // onChange={handleShift}
              value={formData.category}
              onChange={handleCategoryChange}

            >
              <MenuItem value={'Milk Coffee'}>Milk Coffee</MenuItem>
              <MenuItem value={'Black Coffee'}>Black Coffee</MenuItem>
              <MenuItem value={'Coffee Dessert'}>Coffee Dessert</MenuItem>
              <MenuItem value={'Momo'}>Momo</MenuItem>
              <MenuItem value={'Chowmin'}>Chowmin</MenuItem>
              <MenuItem value={'Iced Coffee'}>Iced Coffee</MenuItem>

            </Select>
          </FormControl>
        </Box>

        {/* <FormControl fullWidth margin="normal" required>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="furniture">Furniture</MenuItem>
            <MenuItem value="books">Books</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl> */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>


        </Box>

      </form>
    </Container>
  );
};

export default AddFoodProducts;
