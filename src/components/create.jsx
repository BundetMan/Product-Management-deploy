import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const CreateProducts = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    description: '',
  });

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
      const response = await fetch('https://product-service-deploy-production.up.railway.app/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to create product');
      }

      const data = await response.json();
      console.log('Product created:', data);
      toast.success('Product created successfully!');
      handleReset();
      navigate('/'); // Redirect to the product list page
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error('There was an error creating the product. Please try again.');
    }
    finally{
      setLoading(false);
    }

  }

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
      <div className="card-body card w-100" style={{ maxWidth: '700px'}}>
        <h3 className="card-title text-center">Create New Product</h3>
        <form className="row g-3" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Input Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">price</label>
            <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="stock" className="form-label">Stock</label>
            <input type="text" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange}/>
          </div>
          <div className="col-6">
            <label htmlFor="category" className="form-label">Category</label>
            <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange}/>
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
        <div className="text-center py-2">
          <Link to={'/'} className="btn btn-success m-2">Back</Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>

            <button
              type="reset"
              className="btn btn-secondary ms-2"
              disabled={loading}
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
