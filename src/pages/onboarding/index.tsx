import { Header, ImageBanner } from "@/components"

const Onboarding = () => {
    return (
        <main className='flex flex-col h-screen'>
            <Header />
            <div className='flex flex-row-reverse h-full'>
                <ImageBanner />
                <div className='flex flex-col px-24 flex-1 items-center justify-center'>
                    {/* <WelcomeUser /> */}
                </div>
            </div>
        </main>

    )
}

export default Onboarding
