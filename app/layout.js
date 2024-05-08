import './globals.css'
import 'flowbite/dist/flowbite.css';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Federación Regional de Trabajadores de México - Sección 1',
  description: 'El sindicalismo de vanguardia que promueve la “Federación Regional de Trabajadores Sección 1 del Estado de Querétaro CTM”',
}

export default function RootLayout({ children, displayNavFooter = true }) {
  return (
    <html lang="es">
      <meta name="google-site-verification" content="whgZtmHO4c_5r2aQDdsFhJ4xr_tAemOO336QfbogaII" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
