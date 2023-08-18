import Link from 'next/link';
import styles from './NavBar.module.css';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === '/' ? styles.active : ''
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === '/about' ? styles.active : '',
        ].join(' ')}
      >
        About
      </Link>
    </nav>
  );
}

export default NavBar;
