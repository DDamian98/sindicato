import './globals.css'
import 'flowbite/dist/flowbite.css';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Confederación de Trabajadores de México',
  description: 'El sindicalismo de vanguardia que promueve la “Federación Regional de Trabajadores Sección 1 del Estado de Querétaro CTM”',
}

export default function RootLayout({ children, displayNavFooter = true }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
