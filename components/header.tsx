import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn("hubspot");
                }}
              >
                Connect to HubSpot Account
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span className={styles.signedInText}>
                <small>Signed in with Hub ID:</small>
                <br />
                <strong>{session.user.name ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">
              <a>API Examples</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/create-contact">
              <a>Create Contact</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/create-timeline-event">
              <a>Create Timeline Event</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
