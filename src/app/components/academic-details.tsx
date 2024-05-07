import React from 'react'

const AcademicDetails = () => {
    return (
        <div className="sm:border sm:shadow-md pt-2 md:pt-4 pb-10 px-3 sm:px-5 w-full flex__column mb-12">
            <p className="text-sm text-center mb-10 xl:w-[70%]">Please enter the name of your school, college, or university, along with your grade or year of study. Select the subjects you need tutoring for and share your current GPA or grades.</p>

            <div className="fle items-cente justify-cente gap-10 mb-10 grid md:grid-cols-2">
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Grade/Year:</label>
                    <input type="text" placeholder='Enter your grade' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem] text-sm' />
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Location:</label>
                    <input type="text" placeholder='Enter your current location' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem] text-sm' />
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Subjects Needing Tutoring:</label>
                    {/* <input type="text" placeholder='First Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' /> */}
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[16rem]'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Attendance Type:</label>
                    {/* <input type="text" placeholder='First Name' className='border-gray-500 rounded-sm border py-1 px-2 placeholder:text-sm w-[16rem]' /> */}
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[16rem]'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>
            </div>

            {/* <div className="flex items-center justify-center gap-20 ">
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Subjects Needing Tutoring:</label>
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[16rem]'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="" className='text-sm font-bold'>Attendance Type:</label>
                    <select name="" id="" className='border-gray-500 rounded-sm border py-1 px-2 text-sm w-[16rem]'>
                        <option value="">select option</option>
                        <option value="">option one</option>
                        <option value="">option one</option>
                    </select>
                </div>


            </div> */}

        </div>
    )
}

export default AcademicDetails
