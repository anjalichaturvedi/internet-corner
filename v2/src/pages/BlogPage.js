import React, { useState } from 'react';
import BlogSidebar from '../components/BlogSidebar';
import BlogPost from '../components/BlogPost';
import '../components/Global.css'; // Make sure you have your global CSS

// --- DUMMY BLOG POSTS ---
// You can replace this with your actual content
const posts = [
  {
    id: 1,
    title: "Why I Chose React for My Portfolio",
    subtitle: "A Technical Deep Dive",
    date: "July 19, 2025",
    content: (
      <>
        <p>When deciding on the tech stack for this portfolio, React was the obvious choice. Its component-based architecture allowed me to build reusable UI elements, like the project cards and experience items, which saved a significant amount of time.</p>
        <p>Furthermore, the power of state management with hooks like `useState` made complex interactions, such as the expandable details sections, surprisingly straightforward to implement. This modularity is not just a developer convenience; it leads to a more maintainable and scalable application.</p>
      </>
    )
  },
  {
    id: 2,
    title: "Product Thinking for Engineers",
    subtitle: "Bridging the Gap Between Code and User",
    date: "July 12, 2025",
    content: (
      <>
        <p>As a developer with a passion for product management, I believe it's crucial for engineers to understand the 'why' behind what they're building. It’s not just about writing functional code; it's about solving a real user problem.</p>
        <p>This means asking questions like: Who is our user? What are their pain points? How will this feature deliver value? By embedding this product-centric mindset into the development process, we can build not just features, but experiences that users truly love.</p>
      </>
    )
  },
];
// --- END DUMMY POSTS ---


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