import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Blog = {
  _id?: string;
  title: string;
  content: string;
  paragraph?: string;
};

const API_URL = 'https://blog-list-07.onrender.com/Blog-list';



const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(err => console.error('Fetch error:', err));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h2>{blog.title}</h2>
      <p>{blog.paragraph}</p> {/* <-- Show paragraph */}
    </div>
  );
};

export default BlogDetails;