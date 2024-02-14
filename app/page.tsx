import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <Logo/>
      <div className={styles.mainTile}>zdjęcie z opisem</div>
      <div className={styles.tiles}>
        <Link href='/strefa-makijazu' className={styles.tile}>
        <div className={styles.tile}>strefa makijażu permanentnego</div>
        </Link>
        <div className={styles.tile}>Strefa szkoleń</div>
        <div className={styles.tile}>Strefa usuwania makijażu / tatuażu</div>
      </div>
    </main>
    </>
  )
}
