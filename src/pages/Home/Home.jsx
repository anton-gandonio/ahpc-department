import React, { useState } from "react";
import styles from "./Home.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigateTo = useNavigate();
  const notify = () =>
    toast.success("🦄 Заявка успешно отправлена!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      font: "Balsamiq Sans",
    });
  const [userName, setUserName] = useState("");
  const [userComplaint, setUserComplaint] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const serverUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userComplaint) {
      alert('Поля обязательны для заполнения!')
      return
    }
    if (userName.length < 3 || userComplaint.length < 3) {
      alert('Содержание полей слишком короткие!')
      return
    }
    if (userComplaint.length > 250) {
      alert('Содержание поля заявки слишком большая!')
      return
    }
    const newPost = {
      name: userName,
      body: userComplaint,
    };
    axios.post(`${serverUrl}/postsData`, newPost).then(() => {
      setIsUpdated((prevState) => !prevState);
      notify();
    });
  };

  const redirectToPosts = () => {
    navigateTo("../Posts");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>
        <div></div>Форма для <span className={styles.spanoch}>предложений и жалоб</span> студентов
        АВПК
      </h1>
      <form method="POST" className={styles.formochka} onSubmit={handleSubmit}>
        <input
          required={true}
          className={styles.inputovich}
          maxLength={35}
          minLength={3}
          type="text"
          value={userName}
          placeholder="Ваше имя"
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
        minLength={4}
          required={true}
          className={styles.area}
          maxLength={300}
          placeholder="Ваше предложение"
          value={userComplaint}
          onChange={(e) => setUserComplaint(e.target.value)}
          cols="60"
          rows="10"
        ></textarea>
      <button type="submit" onClick={handleSubmit} className={styles.submit}>
        Отправить заявку
      </button>
      </form>
      <Toaster></Toaster>
      <h2 title="и любимой вероничкой :3" className={styles.lumine}>made by lumine_beloved</h2>
      <a href="">
        <button onClick={redirectToPosts} className={styles.lexa}>
          Посмотреть список постов
        </button>
      </a>
    </div>
  );
};

export default Home;
