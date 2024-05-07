import React from 'react'


const LearningGoals = () => {
    return (
        <div className="sm:border sm:shadow-md pt-2 md:pt-4 pb-10 px-3 sm:px-5 w-full flex__column mb-12 ">
            <p className="text-sm text-center mb-10 xl:w-[60%]">Describe any challenges and short-term goals you want to achieve. Outline your long-term goals. This information will help us tailor the tutoring experience to meet your needs.</p>

            <div className="flex flex-col items-star md:justify-start md:w-[70%] gap-10 mb-">
                <div className="flex flex-col items-start gap-2 lg:w-[30rem] w-full">
                    <label htmlFor="" className='text-sm font-bold'>Short-term Goals:</label>
                    {/* <input type="text" placeholder='Enter your grade' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' /> */}
                    <textarea 
                        name=""
                        id="" 
                        cols={50} 
                        rows={5}
                        placeholder='Enter your short term goal'
                        className='border-gray-500 rounded-sm border placeholder:text-sm resize-none py-1 px-2 w-full'
                    >
                    </textarea>
                </div>

                <div className="flex flex-col items-start gap-2 lg:w-[30rem] w-full">
                    <label htmlFor="" className='text-sm font-bold'>Long-term Goals:</label>
                    <textarea 
                        name=""
                        id="" 
                        cols={50} 
                        rows={5}
                        placeholder='Enter your long term goal'
                        className='border-gray-500 rounded-sm border placeholder:text-sm resize-none py-1 px-2 w-full'
                    >
                    </textarea>
                </div>


            </div>
        </div>
    )
}

export default LearningGoals
