
import { Dispatch, SetStateAction, createContext } from 'react'
import { Donation, Distribution } from './types'

interface AppContextType {
  donations: Donation[];
  setDonations: Dispatch<SetStateAction<Donation[]>>;
  distributions: Distribution[];
  setDistributions: Dispatch<SetStateAction<Distribution[]>>;
}

export const appContext = createContext<AppContextType>({
  donations: [],
  setDonations: () => {},
  distributions: [],
  setDistributions: () => {}
});