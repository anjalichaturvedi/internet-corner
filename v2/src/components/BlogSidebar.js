import React from 'react';

const BlogSidebar = ({ posts, onSelectPost, selectedPost }) => {
  return (
    <aside className="blog-sidebar">
      <h3>All Posts</h3>
      <ul className="blog-post-list">
        {posts.map(post => (
          <li key={post.id}>
            <button 
              className={selectedPost.id === post.id ? 'active' : ''}
              onClick={() => onSelectPost(post)}
            >
              <span className="post-title">{post.title}</span>
              <span className="post-date">{post.date}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidebar;