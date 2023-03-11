import React from 'react';
import styles from './content.module.css';

export default function ProjectContent() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.content}>
          <a href="/projects">{'<'} Back</a>
          <h1>Desert Wildlife Conservation</h1>
          <h3>
            This is placeholder text. To change this content, double-click on
            the element and click Change Content.
          </h3>
          <p>
            This is placeholder text. To change this content, double-click on
            the element and click Change Content. Want to view and manage all
            your collections? Click on the Content Manager button in the Add
            panel on the left. Here, you can make changes to your content, add
            new fields, create dynamic pages and more. You can create as many
            collections as you need.
          </p>
          <p>
            This is placeholder text. To change this content, double-click on
            the element and click Change Content. Want to view and manage all
            your collections? Click on the Content Manager button in the Add
            panel on the left. Here, you can make changes to your content, add
            new fields, create dynamic pages and more. You can create as many
            collections as you need.
          </p>
          <p>
            This is placeholder text. To change this content, double-click on
            the element and click Change Content. Want to view and manage all
            your collections? Click on the Content Manager button in the Add
            panel on the left. Here, you can make changes to your content, add
            new fields, create dynamic pages and more. You can create as many
            collections as you need.
          </p>
          <div className={styles.buttons}>
            <a href="/projects">Previous</a>
            <a href="/projects">Next</a>
          </div>
        </section>
      </div>
    </div>
  );
}
