import React from 'react'

const Preferences = () => {
    return (
        <div className="sm:border sm:shadow-md pt-2 md:pt-4 pb-10 px-3 sm:px-5 w-full flex__column mb-12 ">
            <p className="text-sm text-center mb-6 xl:w-[70%]">Choose whether you prefer online or in-person tutoring and specify your availability for sessions. You can also mention any additional preferences or requirements you have for the tutoring sessions.</p>

            <div className="flex flex-col items-star md:justify-start md:w-[70%] gap-10 mb-">
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Availability: <span className="text-red-600">*</span></label>
                    {/* <input type="text" placeholder='Enter your grade' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' /> */}
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm sm:w-[16rem] w-full'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Additional Preferences/Requirements:</label>
                    <input type="text" placeholder='Specify any additional preferences or requirements' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm sm:w-[16rem] w-full text-sm' />
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Communication Language:</label>
                    {/* <input type="text" placeholder='First Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm sm:w-[16rem] w-full' /> */}
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm sm:w-[16rem] w-full'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default Preferences
