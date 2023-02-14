import { Button } from "antd"

export const WelcomeUser = ({ changePage }: { changePage: (e: number) => void }) => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-medium text-4xl'>Welcome to Stealth-SaaS Jinisha!</h1>
                <p>We want to know you a bit so that we can get you there a tad bit faster</p>
            </div>
            <Button onClick={() => changePage(1)} className='self-start bg-geekblue-600 rounded-sm' type='primary'>Let&apos;s get started</Button>
        </div>
    )
}


