import { Inter } from '@next/font/google'
import { Button } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Button type='primary'>JOker</Button>
    </>
  )
}
