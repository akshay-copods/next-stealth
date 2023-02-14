import { CompanyDetails, Header, ImageBanner, IntentSelection, JobFunction, ProductInfo, WelcomeUser } from "@/components"
import { useState } from "react"


const Onboarding = () => {
    const [page, setPage] = useState(0)
    function renderPage(page: number) {
        switch (page) {
            case 0:
                return <WelcomeUser changePage={setPage} />
            case 1:
                return <CompanyDetails changePage={setPage} />
            case 2:
                return <JobFunction changePage={setPage} />
            case 4:
                return <ProductInfo />
            default:
                break;
        }
    }
    return (
        <main className='flex flex-col h-screen'>
            <Header />
            {/* <IntentSelection /> */}
            {page !== 3 ? <div className='flex flex-row-reverse h-full'>
                <ImageBanner />
                <div className='flex flex-col px-24 flex-1 items-center justify-center'>
                    {renderPage(page)}
                </div>
            </div> : <IntentSelection changePage={setPage} />}
        </main>

    )
}

export default Onboarding
