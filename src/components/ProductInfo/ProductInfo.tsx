import { Button, Input, Select } from "antd"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"
const options = [{}]
export const ProductInfo = () => {
    return (
        <div className='flex flex-col gap-20 w-[44rem]'>
            <OnboardingQuestion question='What are you building this workflow for and which product?' />
            <div className='flex flex-col gap-14'>
                <Select
                    size='large'
                    defaultValue="lucy"
                    className='w-full'
                    options={options}
                />
                <Input size="large" placeholder="Enter a product name" />
                <Button disabled className='bg-geekblue-600 self-end rounded-sm' type='primary'>Continue</Button>
            </div>
        </div>
    )
}


