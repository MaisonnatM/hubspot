import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <p>Thanks for stopping by!</p>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Demo App</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
