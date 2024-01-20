"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HowSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepContent = [
    'You share and discuss your ideas with us',
    'We start creating your design with right measurements',
    'Then we try to make it realistic for you to see what it will look like',
    'Final product',
  ]

  const handleStepClick = (step: React.SetStateAction<number>) => {
    setCurrentStep(step)
    resetInterval()
  }

  const resetInterval = () => {
    clearInterval(intervalId);
    startInterval()
  }

  let intervalId: string | number | NodeJS.Timeout | undefined;

  const startInterval = () => {
    intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % 4) + 1);
    }, 5000)
  }

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalId)
  }, [currentStep])

  return (
    <section className='max-container flexCenter flex-col mt-[200px] relative' id='steps'> 
      <h2 className='capitalize regular-40 text-gold-90'>How does this work?</h2>
      <div className='flexCenter gap-10 mt-10 howsection'>
        <div className='overflow-hidden rounded-md lg:ml-2'>
          {[1, 2, 3, 4].map((step) => (
            <Image
              key={step}
              src={`/step-${step}.png`}
              alt={`step ${step}`}
              width={500}
              height={500}
              className={`transition-opacity duration-500 ease-in-out ${
                currentStep === step ? '' : 'hidden'
              }`}
            />
          ))}
        </div>
        <div className='w-[500px] p-2 flex flex-col'>
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`cursor-pointer regular-24 mb-10 text-gold-90 relative transition-transform duration-500 ease-in-out transform `}
              onClick={() => handleStepClick(step)}
            >
              <span className={`w-1 h-full bg-gold-50 rounded-sm absolute left-[-10px] transition-opacity duration-500 ease-in-out ${
                currentStep === step ? 'opacity-100' : 'opacity-0'
              }`}></span>
              <h3 className='w-full transition-opacity duration-500 ease-in-out'>
                Step {step}
              </h3>
              <p
                className={`regular-14 transition-opacity duration-500 ease-in-out ${
                  currentStep === step ? '' : 'hidden'
                }`}
              >
                {stepContent[step - 1]}
              </p>
            </div>
          ))}
          <Link href={"https://www.facebook.com/profile.php?id=100054641310989"} target='_blank' 
          className="capitalize mt-5 text-white outline outline-gold-50 cursor-pointer px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 
                    hover:shadow-[0.5rem_0.5rem_#D6AE7B,-0.5rem_-0.5rem_#EACDA3] hover:outline-none transition-all self-center">
            <button>
                Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
