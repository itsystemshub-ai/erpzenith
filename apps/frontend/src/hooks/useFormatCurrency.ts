import { useCurrencyStore } from '@/stores/currencyStore';
import { formatCurrency } from '@/lib/utils';
import { useCallback } from 'react';

export function useFormatCurrency() {
  const { currency, exchangeRate } = useCurrencyStore();

  return useCallback(
    (amount: number | undefined | null) => {
      return formatCurrency(amount, currency, exchangeRate);
    },
    [currency, exchangeRate]
  );
}
