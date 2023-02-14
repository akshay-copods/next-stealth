import { Header } from '@/components'
import { LandingPageBanner } from '@/components/LandingPageBanner/LandingPageBanner'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        <LandingPageBanner />
      </div>
    </main>
  )
}
