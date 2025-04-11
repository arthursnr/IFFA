import { IBM_Plex_Sans, Jost } from 'next/font/google';

export const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    variable: '--font-ibm',
    display: 'swap',
    weight: ['300', '400', '500', '700'],
});

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});
