import { Header, LandingPageBanner, LoginForm } from '@/components'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        <LandingPageBanner />
        <div className='flex flex-col flex-1 items-center justify-center'>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
