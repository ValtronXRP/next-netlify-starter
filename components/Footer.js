import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for our contributors
      </footer>
    </>
  )
}
