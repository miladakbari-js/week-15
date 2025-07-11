import styles from "./Layout.module.css"


function Layout({children}) {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <div>
        <img src="./calendar.svg" alt="calendar" />
        <h4>Task-Week15</h4>
      </div>
    </header>
    {children}
    <footer className={styles.footer}>Developed By Milad Akbari | Botostart BOOTCAMP</footer>
    </div>
  )
}

export default Layout