// pages/index.js
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "../styles/dashboard.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.main}>
          <h1>Welcome to the Dashboard</h1>
          <p>This is your main content area.</p>
        </main>
      </div>
    </div>
  );
}
