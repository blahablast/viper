import Header from './components/layout/header/page'
import './globals.css'

export const metadata = {
  title: 'Viper | SNEKs badass brother',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
