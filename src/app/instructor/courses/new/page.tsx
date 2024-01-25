'use client'

import CourseLanding from "@/components/CourseLanding";
import PricingCard from "@/components/PricingCard";
import PromotionsCard from "@/components/PromotionsCard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const NewCourse = () => {
  const [CurrCard, setCurrCard] = useState('option-one');

  const onSubmit = (value: string) => {
    setCurrCard(value);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="lg:w-1/4">
        <RadioGroup defaultValue="option-one" className="sm:max-lg:flex sm:max-lg:justify-around sm:max-lg:items-center">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" onClick={() => { onSubmit('option-one') }} />
            <Label htmlFor="option-one">Course landing page</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" onClick={() => { onSubmit('option-two') }} />
            <Label htmlFor="option-two">Pricing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" onClick={() => { onSubmit('option-three') }} />
            <label htmlFor="option-three">Promotions</label>
          </div>
        </RadioGroup>
        {`current card: ${CurrCard}`}
      </div>
      <div className="lg:w-3/4">
        {CurrCard === 'option-one' && <CourseLanding />}
        {CurrCard === 'option-two' && <PricingCard />}
        {CurrCard === 'option-three' && <PromotionsCard />}
      </div>
    </div>
  )
}

export default NewCourse;