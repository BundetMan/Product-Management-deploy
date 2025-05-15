import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const nagivate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    // Fetch existing product to prefill form
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://product-service-deploy-production.up.railway.app/product/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const product = await response.json();
        setFormData(product);
      } catch (error) {
        console.error('Failed to load product:', error);
        alert('Failed to load product data.');
      }
      finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://product-service-deploy-production.up.railway.app/product/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to update product');
      }

      const data = await response.json();
      console.log('Product updated:', data);
      toast.success('Product updated successfully!');
      nagivate('/'); // Redirect to the product list page
      handleReset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error updating the product. Please try again.', error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      price: '',
      stock: '',
      category: '',
      description: '',
    });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card-body card w-100" style={{ maxWidth: '700px' }}>
        <h3 className="card-title text-center">Edit Product</h3>
        {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <form className="row g-3" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="stock" className="form-label">Stock</label>
            <input type="text" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="category" className="form-label">Category</label>
            <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          />
           <div className="text-center">
            <Link to="/" className="btn btn-success me-2">Back</Link>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
};

export default EditProduct;
