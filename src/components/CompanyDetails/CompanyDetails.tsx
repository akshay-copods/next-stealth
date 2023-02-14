import { Button, Input } from "antd"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"

export const CompanyDetails = () => {
    return (
        <div className='flex w-[44rem] flex-col gap-24'>
            <OnboardingQuestion question='Enter your company name and URL' subHeading='With your company details help us understand your company and create a customized experience for you. ' />
            <div className='flex flex-col gap-14'>
                <div>
                    <Input className='rounded-sm' addonBefore="http://" placeholder="your organization URL" />
                </div>
                <Input className='rounded-sm' placeholder="your organization URL" />
            </div>
            <Button type='primary' className='bg-geekblue-600 self-end rounded-sm'>Continue</Button>
        </div>
    )
}
