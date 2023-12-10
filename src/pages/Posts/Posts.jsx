import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import postsData  from "../../services/postsData.js";
import axios from "axios";

const Posts = () => {
  const [postsArray, setPostsArray] = useState([]);
  const serverUrl = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    axios.get(`${serverUrl}/postsData`)
      .then(res => {
        console.log(res.data); // Проверяем формат первого элемента возвращаемого массива
        if (Array.isArray(res.data) && res.data.length > 0) {
          console.log(res.data[0]); // Логируем первый элемент массива для проверки структуры
          setPostsArray(res.data.reverse());
        } else {
          console.error('Invalid data format');
        }
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.headerText}>Список постов</h1>
      <div className={styles.container}>
      {postsArray.map((post, index) => (
        <div className={styles.postContainer} key={index}>
          <h2 className={styles.nameText}>{post.name}</h2>
          <span className={styles.neRabotaet}>#{post.id}</span>
          <p className={styles.bodyText}>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Posts;
