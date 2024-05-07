import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="sm:border sm:shadow-md pt-2 md:pt-4 pb-10 px-3 sm:px-5 w-full flex__column mb-12">
        <p className="text-sm text-center mb-6 md:mb-10 xl:w-[40%]">Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.</p>

        <div className="fle items-cente justify-cente gap-10 mb-10 grid lg:grid-cols-2 xl:grid-cols-3 w-ful">
            <div className="flex flex-col items-start gap-2 w-full">
                <label htmlFor="" className='text-sm font-bold'>First Name: <span className="text-red-600">*</span></label>
                <input type="text" placeholder='First Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-full' />
            </div>

            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Last Name: <span className="text-red-600">*</span></label>
                <input type="text" placeholder='Last Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm ' />
            </div>


            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Email Address: <span className="text-red-600">*</span></label>
                <input type="text" placeholder='Enter your email address' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm ' />
            </div>

            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Contact Number: <span className="text-red-600">*</span></label>
                <input type="text" placeholder='Enter your contact number' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm ' />
            </div>

            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Gender:</label>
                {/* <input type="text" placeholder='First Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm ' /> */}
                <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[14.5rem]'>
                    <option value="">select option</option>
                    <option value="">option one</option>
                    <option value="">option one</option>
                </select>
            </div>


            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Age:</label>
                <input type="text" placeholder='Enter your age' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm ' />
            </div>


        </div>

        {/* <div className="flex items-center justify-center gap-20 ">
            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Contact Number: <span className="text-red-600">*</span></label>
                <input type="text" placeholder='Enter your contact number' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' />
            </div>

            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Gender:</label>
                <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[16rem]'>
                    <option value="">select option</option>
                    <option value="">option one</option>
                    <option value="">option one</option>
                </select>
            </div>


            <div className="flex flex-col items-start gap-2">
                <label htmlFor="" className='text-sm font-bold'>Age:</label>
                <input type="text" placeholder='Enter your age' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' />
            </div>


        </div> */}

    </div>
  )
}

export default PersonalInfo
