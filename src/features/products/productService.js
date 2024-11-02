// src/services/products/productService.js

import api from '../api';

// Function to get all products
export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data; // Return the data directly
};

// Function to get a single product by ID
export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

// Function to create a new product
export const createProduct = async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
};

// Function to update an existing product by ID
export const updateProduct = async (id, productData) => {
    const response = await api.put(`/products/edit/${id}`, productData);
    return response.data;
};

// Function to delete a product by ID
export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/delete/${id}`);
    return response.data;
};
