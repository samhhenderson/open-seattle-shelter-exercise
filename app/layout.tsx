'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useState, createContext, Dispatch, SetStateAction } from 'react'

import { Donation, Distribution, Inventory} from './types'

interface AppContextType {
  donations: Donation[];
  setDonations: Dispatch<SetStateAction<Donation[]>>;
  distributions: Distribution[];
  setDistributions: Dispatch<SetStateAction<Distribution[]>>;
  inventory: Inventory;
  setInventory: Dispatch<SetStateAction<Inventory>>;
}

export const appContext = createContext<AppContextType>({
    donations: [],
    setDonations: () => {},
    distributions: [],
    setDistributions: () => {},
    inventory: {clothing: 0, furniture: 0, money: 0,},
    setInventory: () => {},
  });

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [donations, setDonations] = useState<Donation[]>([])
  const [distributions, setDistributions] = useState<Distribution[]>([])
  const [inventory, setInventory] = useState<Inventory>({clothing: 0, furniture: 0, money: 0,})

  return (
    <appContext.Provider value={{ 
      donations, 
      setDonations, 
      distributions, 
      setDistributions,
      inventory,
      setInventory,
    }}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </appContext.Provider>
  )
}
