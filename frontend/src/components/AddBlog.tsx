import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL + "/Blog-list";


const AddBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [error, setError] = useState('');
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, paragraph }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to post blog');
        alert(data.error || 'Failed to post blog');
        return;
      }
      alert('Blog posted successfully!');
      setTitle('');
      setContent('');
      setParagraph('');
    } catch (err) {
      setError('Network error');
      alert('Network error');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto' }}>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Heading"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="text"
          placeholder="Content (shown in list)"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <textarea
          placeholder="Paragraph (shown on details page)"
          value={paragraph}
          onChange={e => setParagraph(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8, minHeight: 80 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Post Blog</button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      <div>
        <h3>Existing Blogs</h3>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddBlog;