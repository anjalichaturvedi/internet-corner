import React from 'react';

const BlogPost = ({ post }) => {
  if (!post) {
    return <div className="blog-post-content">Select a post to read.</div>;
  }

  return (
    <article className="blog-post-content">
      <h1>{post.title}</h1>
      <p className="post-meta">{post.subtitle} &bull; {post.date}</p>
      <div className="post-body">
        {post.content}
      </div>
    </article>
  );
};

export default BlogPost;