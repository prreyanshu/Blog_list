import React, { useEffect, useState } from 'react';

type Blog = {
  _id?: string;
  title: string;
  content: string;
};

const API_URL = 'http://localhost:3000/blog-list';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className='masterpage'>
        <div className="parenthead">
          <div className="heading">
            <h2>Blog's</h2>
            <ul className='lister'>
              {blogs.map(blog => (
                <li className='lister2' key={blog._id}>
                  <strong>{blog.title}</strong>: {blog.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>    
  );
};

export default BlogList;