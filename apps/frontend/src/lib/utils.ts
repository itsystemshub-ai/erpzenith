import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number | undefined | null, 
  currency: 'BS' | 'USD' = 'BS',
  exchangeRate: number = 1
): string {
  if (amount == null) return currency === 'BS' ? 'Bs. 0,00' : '$ 0.00';
  
  // Base is BS. If target is USD, convert.
  const displayAmount = currency === 'USD' ? amount / exchangeRate : amount;
  
  const locale = currency === 'BS' ? 'es-VE' : 'en-US';
  const currencyCode = currency === 'BS' ? 'VES' : 'USD';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(displayAmount);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('es-VE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat('es-VE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

export function formatRIF(rif: string): string {
  const clean = rif.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  if (clean.length < 2) return clean;
  const type = clean[0];
  const numbers = clean.slice(1);
  if (numbers.length <= 8) return `${type}-${numbers}`;
  return `${type}-${numbers.slice(0, 8)}-${numbers.slice(8)}`;
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
