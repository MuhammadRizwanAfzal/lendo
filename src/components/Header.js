import styles from "../styles/dashboard.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Invest</a>
          </li>
          <li className={styles.active}>
            <a className={styles.active} href="#">
              Auto-Invest
            </a>
          </li>
          <li>
            <a href="#">My Portfolio</a>
          </li>
          <hr className={styles.bottomBorder} />
        </ul>
      </nav>

      <div className={styles.navRight}>
        <div className={styles.language}>
          <p>En</p>
        </div>
        <div className={styles.notificationIcon}>
          <img
            className={styles.icon}
            src="/images/Frame 15.png"
            alt="User Avatar"
          />
          <span className={styles.badge}>5</span>
        </div>
        <div className={styles.avatar}>
          <img
            src="/images/Avatar.png"
            alt="User Avatar"
            className={styles.avatarImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
