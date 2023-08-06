import React from 'react';
import styles from './dashboard.module.css';
import BlogsTab from './blogsTab/blogsTab';

const Dashboard = () => (
  <div className={styles.dashboardContainer}>
    <BlogsTab key="blogs" />
  </div>
);

export default Dashboard;
