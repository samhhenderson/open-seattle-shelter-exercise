'use client'

import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  return (

    <main className={styles.main}>
      <h1>HOME</h1>
      <div className={styles.centerCont}>
        <Link
          className={styles.link}
          href={{pathname: '/registration'}}>
          Registration
        </Link>
        <Link
          className={styles.link}
          href={{pathname: '/distribution'}}>
          Distribution
        </Link>
        <Link
          className={styles.link}
          href={{pathname: '/reports'}}>
          Reports
        </Link>
      </div>
    </main>

  )
}
