import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog'; // <-- Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/add" element={<AddBlog />} /> {/* <-- Add this route */}
      </Routes>
    </Router>
  );
}

export default App;