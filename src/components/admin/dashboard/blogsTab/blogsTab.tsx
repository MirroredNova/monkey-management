import React, { useState } from 'react';

const BlogsTab = () => {
  const [activeTab, setActiveTab] = useState('existing');
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setActiveTab('existing')}>
            Existing Blogs
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('new')}>New Blog</button>
        </li>
      </ul>
      <div>{activeTab}</div>
    </div>
  );
};

export default BlogsTab;
