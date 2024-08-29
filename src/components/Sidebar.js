import styles from "../styles/dashboard.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logocnt}>
        <img className={styles.logo} src="/images/Logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Sidebar;
