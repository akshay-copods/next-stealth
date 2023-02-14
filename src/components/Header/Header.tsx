import Image from "next/image"

export const Header = () => {
    return (
        <div className='border-b border-lightgray px-5 py-4'>
            <header className='flex gap-2'>
                <Image src='/logo.png' alt='logo' width={24} height={24} />
                <h2 className='font-normal text-base text-gray-800'>Stealth-SaaS</h2>
            </header>
        </div>
    )
}