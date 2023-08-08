'use client';

import styles from '../page.module.css'
import { useContext, useState } from 'react';
import Link from 'next/link';

import { appContext } from '../layout';
import { Distribution } from '../types';

export default function Distribution() {
  const { distributions, setDistributions, setInventory, inventory} = useContext(appContext);

  const [distributionType, setdistributionType] = useState<string>('clothing');
  const [quantity, setQuantity] = useState<number>(0);
  const [date, setDate] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!quantity || !date) {
      alert('Please fill out all required fields.');
      return;
    }

    if (distributionType !== 'money' && distributionType !== 'clothing' && distributionType !== 'furniture') {
      alert('Please select valid distribution type.');
      return;
    }

    const newdistribution: Distribution = {
      type: distributionType,
      quantity,
      date,
    }

    setDistributions((state: Distribution[]) => [...state, newdistribution]);
    setInventory((state) => {
      const newState = {...state};
      newState[distributionType] -= quantity;
      return newState;
      })
    setdistributionType('clothing');
    setQuantity(0);
    setDate('');

    console.log(distributions)
    console.log('INVENTORY', inventory)
  }
  
  return (
    <main className={styles.main}>
      <h1>DONATION DISTRIBUTION</h1>
      <div className={styles.centerCont}>
        <div className={styles.formCont}>
          <form className={styles.grid} onSubmit={onSubmit}>
            <label htmlFor="distributionType">Type of distribution</label>
            <select 
              id="distributionType" 
              name="distribution-type" 
              value={distributionType} 
              onChange={(e) => setdistributionType(e.target.value)}
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