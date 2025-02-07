import React from 'react'

const profile = () => {
  return (
    <div className='dark:bg-slate-800 bg-slate-200'>
        <div className="container mx-auto p-5 dark:bg-slate-800">
        <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">

                <div className="bg-white dark:bg-slate-700 rounded-md p-3 border-t-4 border-blue-700">
                    <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto border-blue-700 border-solid border-spacing-11 border-4 rounded-xl shadow-md"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="" />
                    </div>
                    <h1 className="text-gray-900 dark:text-white font-bold text-xl leading-8 my-1">Primce Singh</h1>
                    <h3 className="text-gray-600 dark:text-gray-400 font-lg text-semibold leading-6">Does something</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-100  leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        className="dark:bg-slate-800  dark:text-white hover:dark:text-gray-300 text-gray-500 hover:cursor-pointer hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-blue-700 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto">Dec 12, 2021</span>
                        </li>
                    </ul>
                </div>

                <div className="my-4"></div>

                <div className="bg-white dark:bg-slate-700 p-3 rounded-md hover:shadow">
                    <div className="flex items-center space-x-3 font-semibold text-gray-900 dark:text-white text-xl leading-8">
                        <span className="text-blue-700">
                            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Similar Profiles</span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" />
                            <a href="#" className="text-main-color dark:text-white">Kojstantin</a>
                        </div>
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                alt="" />
                            <a href="#" className="text-main-color dark:text-white">James</a>
                        </div>
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt="" />
                            <a href="#" className="text-main-color dark:text-white">Natie</a>
                        </div>
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                alt="" />
                            <a href="#" className="text-main-color dark:text-white">Casey</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">


                <div className="bg-white dark:text-white dark:bg-slate-700 p-3 shadow-sm rounded-md">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-blue-700">
                            <svg className="h-5 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide dark:text-white">About</span>
                    </div>
                    <div className="text-gray-700 dark:text-white">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">Primce</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">Singh</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">Male</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">+11 998001001</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Branch</div>
                                <div className="px-4 py-2">Information Technology</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Room Number</div>
                                <div className="px-4 py-2">510</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className=" underline hover:text-gray-200" href="mailto:lit2021024@iiitl.ac.in">lit2021024@iiitl.ac.in</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="block w-1/4 mx-auto dark:text-white dark:bg-blue-700 transition-all dark:hover:text-blue-700 text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Contact</button>
                </div>


                <div className="my-4"></div>


                <div className="bg-white dark:bg-slate-700 p-3 shadow-sm rounded-md">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Experience</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Owner at Her Company Inc.</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Owner at Her Company Inc.</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Owner at Her Company Inc.</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Owner at Her Company Inc.</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="dark:text-cyan-500 text-blue-700">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span className="tracking-wide dark:text-white">Education</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Masters Degree in Oxford</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="dark:text-cyan-500 text-blue-700">Bachelors Degreen in LPU</div>
                                    <div className="dark:text-gray-300 text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default profile