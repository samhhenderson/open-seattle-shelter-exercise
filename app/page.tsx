'use client'

import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  return (

    <main className={styles.main}>
      <Link
        href={{pathname: '/registration'}}>
        Registration
      </Link>
      <Link
        href={{pathname: '/distribution'}}>
        Distribution
      </Link>
    </main>

  )
}
