import React from 'react';
import '../styles/Blog.css'; 
import RiseAI from '../assets/RiseAI.jpeg';
import WebDT from '../assets/WDT.webp';
import PythonDA from '../assets/PDA.jpeg';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Rise of AI in Software Development",
      excerpt: "Discover how artificial intelligence is transforming the way we build applications...",
      image: RiseAI,
    },
    {
      id: 2,
      title: "Top Web Development Trends in 2025",
      excerpt: "Stay ahead with the latest tools, frameworks, and best practices in web development...",
      image: WebDT,
    },
    {
      id: 3,
      title: "Mastering Python for Data Analytics",
      excerpt: "Learn how Python continues to dominate the data analytics world with powerful libraries...",
      image: PythonDA,
    },
  ];

  return (
    <div className="blog-page">
      <h2 className="blog-title">Latest from Our Blog</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
