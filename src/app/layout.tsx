import '@/app/globals.css'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { Toaster } from '@/components/ui/sonner';
import { createClient } from '@/utils/supabase/server';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang='en'>
      <body className='relative'>
        <Theme>
          <Header user={user}/>
          <main>
            {children}
          </main>
          <Footer />
        </Theme>
        <Toaster position='top-center' richColors/>
      </body>
    </html>
  )
}
