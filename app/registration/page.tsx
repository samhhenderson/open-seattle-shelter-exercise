'use client';

import styles from '../page.module.css'
import { useContext, useState } from 'react';
import Link from 'next/link';

import { appContext } from '../layout';
import { Donation } from '../types';


export default function Registration() {
  const { donations, setDonations, setInventory, inventory} = useContext(appContext);
  const [name, setName] = useState<string>('');
  const [donationType, setDonationType] = useState<string>('clothing');
  const [quantity, setQuantity] = useState<number>(0);
  const [date, setDate] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !quantity || !date) {
      alert('Please fill out all required fields.');
      return;
    }

    if (donationType !== 'money' && donationType !== 'clothing' && donationType !== 'furniture') {
      alert('Please select valid donation type.');
      return;
    }

    const newDonation: Donation = {
      name,
      type: donationType,
      quantity,
      date,
    }

    setDonations((state: Donation[]) => [...state, newDonation]);
    setInventory((state) => {
      const newState = {...state};
      newState[donationType] += quantity;
      return newState;
      })
    setName('');
    setDonationType('clothing');
    setQuantity(0);
    setDate('');

    console.log(donations)
    console.log('INVENTORY', inventory)
  }
  
  return (
    <main className={styles.main}>
      <h1>DONATION REGISTRATION</h1>
      <div className={styles.centerCont}>
        <div className={styles.formCont}>
          <form className={styles.grid} onSubmit={onSubmit}>
            <label htmlFor="name">Donor Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label htmlFor="donationType">Type of Donation</label>
            <select 
              id="donationType" 
              name="donation-type" 
              value={donationType} 
              onChange={(e) => setDonationType(e.target.value)}
            >
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="money">Money</option>
            </select>
            <label htmlFor="quantity">Quantity *</label>
            <input 
              type="number" 
              id="quantity" 
              name="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))} 
            />
            <label htmlFor="date">Date *</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            <input type="submit" value='Submit' className={styles.submit}/>
          </form>
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