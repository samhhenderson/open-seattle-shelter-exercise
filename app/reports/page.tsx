'use client';

import styles from '../page.module.css'
import { useContext, useState } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import Link from 'next/link';

import { appContext } from '../layout';
import { Donation } from '../types';

interface DonatorNode {
  id: string;
  name: string;
  money: number;
  clothing: number;
  furniture: number;
}

export default function Reports() {
  const { donations, inventory } = useContext(appContext);

  const donatorNodes = (() => {
    const donators = donations.reduce((acc: {[key: string]: DonatorNode}, donation: Donation) => {
      if (!acc[donation.name]) {
        acc[donation.name] = {
          id: donation.name,
          name: donation.name,
          money: 0,
          clothing: 0,
          furniture: 0,
        }
      }
      acc[donation.name][donation.type] += donation.quantity;
      return acc;
    }, {});
    
    return Object.values(donators);
  })();
  
  const donatorColumns = [
    { label: 'Donator', renderCell: (item: DonatorNode) => item.name },
    { label: 'Money', renderCell: (item: DonatorNode) => item.money },
    { label: 'Clothing', renderCell: (item: DonatorNode) => item.clothing },
    { label: 'Furniture', renderCell: (item: DonatorNode) => item.furniture },
  ];

  const inventoryNodes = Object.entries(inventory).map(([key, value]) => {
    return {
      id: key,
      type: key,
      quantity: value,
    }
  });

  const inventoryColumns = [
    { label: 'Type', renderCell: (item: any) => item.type },
    { label: 'Quantity', renderCell: (item: any) => item.quantity },
  ];

  return (
    <main className={styles.main}>
      <h1>REPORTS</h1>
      <div className={styles.centerCont}>
        <h3>Donators</h3>
        <div className={styles.formCont}>
          <CompactTable
            columns={donatorColumns}
            data={{nodes: donatorNodes}}
          />
        </div>
      </div>
      <div className={styles.centerCont}>
        <h3>Inventory</h3>
        <div className={styles.formCont}>
          <CompactTable
            columns={inventoryColumns}
            data={{nodes: inventoryNodes}}
          />
        </div>
      </div>
      <Link
        className={styles.link}
        href={{pathname: '/'}}>
        Home
      </Link>
    </main>
  )
}