import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Skeleton Loading NEXT.JS (13.4.4)',
  description: 'Skeleton Loading NEXT.JS (13.4.4) Example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
