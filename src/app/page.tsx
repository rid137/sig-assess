"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import PersonalInfo from './components/personal-info';
import AcademicDetails from './components/academic-details';
import Preferences from './components/preferences';
import LearningGoals from './components/learning-goals';
import Terms from './components/terms';

{/* <Image src="/icons/logo.png" width={50} height={50} alt='authentication image' /> */}

const Login = () => {
    const [index, setIndex] = useState(1);
    const [headText, setHeadText] = useState("Personal Information")

    const handlePersonalInfoClick = () => {
        setHeadText("Personal Information");
        setIndex(1)
    }

    const handleAcademicDetailsClick = () => {
        setHeadText("Academic Details");
        setIndex(2)
    }

    const handlePreferencesClick = () => {
        setHeadText("Preferences");
        setIndex(3)
    }

    const handleLearningGoalsClick = () => {
        setHeadText("Learning Goals");
        setIndex(4)
    }

    const handleTermsClick = () => {
        setHeadText("Terms & Conditions");
        setIndex(5)
    }

    const previousIndexClick = () => {
        if(index === 1) return
        setIndex(index - 1)
    }

    const nextIndexClick = () => {
        if(index === 5) return
        setIndex(index + 1)
    }

    const getHeaderText = (index: number | undefined) => {
        switch (index) {
            case 1:
            return '| Personal Information';
            case 2:
            return '| Academic Details';
            case 3:
            return '| Preferences';
            case 4:
            return '| Learning Goals';
            case 5:
            return '';
            default:
            return '';
        }
    };

    return (
        <section className=' py-6'>
            <div className="mb-5 common__padding">
                <Image src="/icons/logo.png" width={150} height={200} alt='authentication image' />
            </div>

            <h3 className="common__padding py-3 font-bold text-[.7rem] sm:text-normal uppercase mb-4 block md:hidden bg-[#186BAD] text-white">Student Registration {getHeaderText(index)}</h3>

            <div className="flex__column mb- common__padding">
                {/* <h3 className="font-bold text-lg mb-6">Student Registration | {headText}</h3> */}
                <h3 className="font-bold text-[1.4rem] mb-6 hidden md:block">Student Registration {getHeaderText(index)}</h3>

                <ul className="border-t border-b md:flex items-center justify-center gap- list-none mb-6 hidden">
                    {/* <li onClick={handlePersonalInfoClick} className={`${headText === "Personal Information" || index === 1 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Personal Information</li> */}
                    <li onClick={handlePersonalInfoClick} className={`${index === 1 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Personal Information</li>
                    {/* <li onClick={handleAcademicDetailsClick} className={`${headText === "Academic Details" || index === 2 ? "bg-[#186BAD] text-white" : ""} border- p-3 cursor-pointer`}>Academic Details</li> */}
                    <li onClick={handleAcademicDetailsClick} className={`${index === 2 ? "bg-[#186BAD] text-white" : ""} border- p-3 cursor-pointer`}>Academic Details</li>
                    {/* <li onClick={handlePreferencesClick} className={`${headText === "Preferences" && index === 3 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Preferences</li> */}
                    <li onClick={handlePreferencesClick} className={`${index === 3 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Preferences</li>
                    {/* <li onClick={handleLearningGoalsClick} className={`${headText === "Learning Goals" && index === 4 ? "bg-[#186BAD] text-white" : ""} p-3 cursor-pointer`}>Learning Goals</li> */}
                    <li onClick={handleLearningGoalsClick} className={`${index === 4 ? "bg-[#186BAD] text-white" : ""} p-3 cursor-pointer`}>Learning Goals</li>
                    {/* <li onClick={handleTermsClick} className={`${headText === "Terms & Conditions" && index === 5 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Terms & Conditions</li> */}
                    <li onClick={handleTermsClick} className={`${index === 5 ? "bg-[#186BAD] text-white" : ""} border-x p-3 cursor-pointer`}>Terms & Conditions</li>

                </ul>

                {index === 1 && <PersonalInfo />}
                {index === 2 && <AcademicDetails />}
                {index === 3 && <Preferences />}
                {index === 4 && <LearningGoals />}
                {index === 5 && <Terms />}

                <div className="sm:border py-2 w-full px-2 flex__between sm:shadow-md">
                    <div className="">
                        {index > 1 && <button onClick={previousIndexClick} className='border border-[#0162E8] text-[#0162E8] px-6 text-sm ml-4 rounded-md transition-all hover:scale-95 hidden sm:block'>Return to Previous Location</button>}
                        {index > 1 && <button onClick={previousIndexClick} className='border border-[#0162E8] text-[#0162E8] px-4 py-1 text-sm ml- rounded-md transition-all hover:scale-95 sm:hidden'>Back</button>}
                    </div>
                    <button onClick={nextIndexClick} className="bg-[#186BAD] text-sm text-white px-4 py-1 rounded-md transition-all hover:scale-95 flex items-center gap-3">
                        <span>Next</span>
                        <svg width="8" height="12" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.90589 5.93771C8.10208 6.12524 8.2123 6.37955 8.2123 6.64471C8.2123 6.90988 8.10208 7.16418 7.90589 7.35171L1.98578 13.0087C1.88924 13.1042 1.77376 13.1804 1.64609 13.2328C1.51841 13.2852 1.38108 13.3128 1.24213 13.314C1.10317 13.3151 0.965369 13.2898 0.836757 13.2395C0.708145 13.1893 0.591299 13.115 0.493039 13.0211C0.39478 12.9272 0.317073 12.8156 0.264453 12.6927C0.211834 12.5698 0.185355 12.4381 0.186563 12.3053C0.18777 12.1725 0.21664 12.0413 0.271486 11.9193C0.326333 11.7973 0.406058 11.687 0.506011 11.5947L5.68624 6.64471L0.506011 1.69471C0.31538 1.50611 0.209898 1.25351 0.212282 0.99131C0.214667 0.729113 0.324727 0.478301 0.518759 0.292893C0.71279 0.107485 0.975269 0.00231622 1.24966 3.78026e-05C1.52405 -0.00224062 1.7884 0.0985537 1.98578 0.280712L7.90589 5.93771Z" fill="white"/>
                        </svg>

                    </button>

                </div>
            </div>


            
            
        </section>
    )
}

export default Login
