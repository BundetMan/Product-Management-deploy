import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from './create';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductTable = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try{
      const res = await fetch('https://product-service-deploy-production.up.railway.app/products');
      const data = await res.json();
      setProducts(data);
    }
    catch (error) {
      console.error('Error fetching products:', error);
      toast.error('There was an error fetching the products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) {
      toast.info('Product deletion cancelled.');
      return;
    }
    try {
      const response = await fetch(`https://product-service-deploy-production.up.railway.app/product/delete/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      toast.success('Product deleted successfully!');
      fetchProducts(); // refresh table
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('There was an error deleting the product. Please try again.');
    }
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
  <div className="container py-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="text-primary fw-bold">Products Management</h2>
      <Link to={'/products/new'} className="btn btn-primary">
        <i className="fa-solid fa-plus"></i> Add New Product
      </Link>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered" style={{ tableLayout: 'fixed' }}>
        <thead>
          <tr className="table-light text-center">
            <th>ID</th>
            <th>Name</th>
            <th className="d-none d-md-table-cell">Description</th>
            <th className="d-none d-md-table-cell">Price</th>
            <th className="d-none d-md-table-cell">Stock</th>
            <th className="d-none d-md-table-cell">Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="align-middle text-center">
          {loading ? (
            <tr>
              <td colSpan="7">
                <div className="d-flex justify-content-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className="d-none d-md-table-cell">{product.description}</td>
              <td className="d-none d-md-table-cell">${product.price}</td>
              <td className="d-none d-md-table-cell">{product.stock}</td>
              <td className="d-none d-md-table-cell">{product.category}</td>
              <td>
                <Link to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm me-2">
                  <i className="fa-solid fa-pen"></i>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default ProductTable;
