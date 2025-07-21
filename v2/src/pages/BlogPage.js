import React, { useState } from 'react';
import BlogSidebar from '../components/BlogSidebar';
import BlogPost from '../components/BlogPost';
import '../Global.css';

const posts = [
  {
    id: 1,
    title: "Coming soon",
    subtitle: "",
    date: "July 19, 2025",
    content: (
      <>
        <p>
          This blog is under construction. Stay tuned for updates!
        </p>
      </>
    )
  },
];


const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
    <div className="blog-page-layout">
      <BlogSidebar 
        posts={posts} 
        selectedPost={selectedPost}
        onSelectPost={setSelectedPost} 
      />
      <BlogPost post={selectedPost} />
    </div>
  );
};

export default BlogPage;