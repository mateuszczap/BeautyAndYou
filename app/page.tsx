import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <h1>Strona główna</h1>
      {/* <Link href="/cennik">Do cennika</Link> */}
    </main>
    </>
  )
}
