import Link from "next/link";
import styles from "./Navbar.module.css";

const menuItems = [
  { label: "Overview", href: "#" },
  { label: "Inspections", href: "#" },
  { label: "Vendors", href: "#" },
  { label: "Archive", href: "#" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.label} className={styles.menuItem}>
            <Link href={item.href} className={styles.menuLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
