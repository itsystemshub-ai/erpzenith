import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'BS' | 'USD';

interface CurrencyState {
  currency: Currency;
  exchangeRate: number;
  setCurrency: (currency: Currency) => void;
  toggleCurrency: () => void;
  setExchangeRate: (rate: number) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'BS',
      exchangeRate: 36.50,
      setCurrency: (currency) => set({ currency }),
      toggleCurrency: () => set((state) => ({ 
        currency: state.currency === 'BS' ? 'USD' : 'BS' 
      })),
      setExchangeRate: (exchangeRate) => set({ exchangeRate }),
    }),
    {
      name: 'currency-storage',
    }
  )
);
