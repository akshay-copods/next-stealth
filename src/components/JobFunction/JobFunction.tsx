import { Button, Select } from "antd"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"

const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
]

export const JobFunction = ({ changePage }: { changePage: (e: number) => void }) => {
    return <div className='flex flex-col gap-20 w-[44rem]'>
        <OnboardingQuestion question='What best describes your job function?' subHeading='This will help us personalize your experience with StealthSaaS' />
        <div className='flex flex-col gap-24'>
            <Select
                size='large'
                defaultValue="lucy"
                className='w-full'
                options={options}
            />
            <Button onClick={() => changePage(3)} className='bg-geekblue-600 self-end rounded-sm' type='primary'>Continue</Button>
        </div>
    </div>
}