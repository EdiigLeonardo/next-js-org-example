import { Lusitana } from 'next/font/google';
import {Inter} from 'next/font/google';

// Importing the Lusitana font with specific weights
export const lusitana = Lusitana({
  subsets: ['latin'], // You can adjust subsets as needed
  weight: ['400', '700'], // Choose the weights you need
  display: 'swap', // Optional: Improves font loading
});

export const inter = Inter({
    subsets: ['latin'], // You can adjust subsets as needed
    weight: ['400', '700'], // Choose the weights you need
    display: 'swap', // Optional: Improves font loading
  });
