import '@/app/globals.css'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Theme>
          <Header />
          <main>
            {children}
          </main>
          <Footer/>
        </Theme>
      </body>
    </html>
  )
}
