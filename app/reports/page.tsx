'use client';

import styles from '../page.module.css'
import { useContext, useState } from 'react';

import { appContext } from '../layout';
import { Donation } from '../types';


export default function Reports() {
  const { donations, inventory} = useContext(appContext);

  

  
  return (
    <main className={styles.main}>
      <h1>REPORTS</h1>
      <div className={styles.centerCont}>
        <div className={styles.formCont}>

        </div>
      </div>
    </main>
  )
}