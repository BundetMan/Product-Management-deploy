
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductTable from './components'
import CreateProduct from './components/create'
import EditProduct from './components/edit'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Feedback from './components/feedback'
import AboutMe from './components/aboutMe'
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<ProductTable />} />
      <Route path="/products/new" element={<CreateProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
      <Route path="/aboutme" element={<AboutMe/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
  </Router>
  )
}

export default App;
