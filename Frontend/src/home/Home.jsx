import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'
// import { FaYoutube, FaMagic, FaDatabase } from 'react-icons/fa';
import { FaFileAlt, FaRobot, FaClipboardList, FaClock, FaBolt, FaBullseye, FaArrowRight, FaYoutube, FaMagic, FaDatabase } from 'react-icons/fa';
function Home() {
    // Placeholder for the resume preview image (remains the same, just defined within this file)
    const ResumePreviewPlaceholder = () => (
        <div className="relative w-full max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-400 text-xs">Resume Preview</span>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
            </div>
            <div className="p-4 text-gray-300 text-sm">
                <p className="font-bold text-lg mb-2">John Doe</p>
                <p>Software Engineer | AI/ML Enthusiast</p>
                <p className="mt-4 font-bold text-base text-start">Summary</p>
                <p className="text-xs leading-relaxed mt-1 text-start">Highly skilled Software Engineer with 5+ years of experience in developing scalable web applications and AI-powered solutions. Proficient in React, Node.js, Python, and cloud platforms (AWS, Azure). Seeking to leverage expertise in a challenging role to drive innovation.</p>
                <hr />
                <p className="mt-4 font-bold text-base text-start">Experience</p>
                <p className="mt-2 text-xs font-bold text-start">Senior Software Engineer</p>
                <p className="text-xs text-start">Tech Solutions Inc. | Jan 2022 - Present</p>
                <ul className="list-disc text-start list-inside text-xs leading-relaxed mt-1">
                    <li>Developed and maintained core features for enterprise SaaS platform, leading to 20% increase in user engagement.</li>
                    <li>Implemented AI-driven recommendation engine using Python and TensorFlow, boosting conversion rates by 15%.</li>
                </ul>
                <hr />
                <p className="mt-4 font-bold text-base text-start">Education</p>
                <p className="mt-2 text-xs font-bold text-start">M.Sc. Computer Science</p>
                <p className="text-xs text-start">University of Technology | 2020</p>
                <hr />
                <p className="mt-4 font-bold text-start text-base">Skills</p>
                <p className="mt-2 text-xs text-start">React, Node.js, Python, AWS, SQL, Machine Learning, Data Analysis, Git</p>
            </div>
        </div>
    );
    return (
        <div>
            <Header />
            <div>
                {/* <Header/> */}
                <section className=" z-50">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <a href="https://rishirajsingh0068.netlify.app/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">Know</span> <span className="text-sm font-medium">Website Owner</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Build Your Resume <span className='text-primary'>With AI</span> </h1>

                        <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            <p className="text-lg sm:text-xl md:text-2xl  max-w-3xl mt-4">
                                10x your chances of landing your dream company interview with our ATS resume hack
                            </p>
                            <p className="text-base sm:text-lg mt-8">
                                Over <span className="text-[#535bf2] font-bold">1,000,000</span> resumes generated
                            </p>
                        </div>

                        <div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                START FOR FREE
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=y3R9e2L8I9E" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Watch video
                            </a>
                        </div>
                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>

                            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                    <svg className="h-8" viewBox="0 0 132 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z" fill="currentColor" />
                                        <path d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z" fill="white" />
                                        <path d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z" fill="currentColor" />
                                        <path d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z" fill="currentColor" />
                                        <path d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z" fill="currentColor" />
                                        <path d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z" fill="currentColor" />
                                        <path d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z" fill="currentColor" />
                                        <path d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z" fill="currentColor" />
                                        <path d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                    {/* Gemini AI */}
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-[#535bf2] p-2 rounded-full flex items-center justify-center text-white">
                                            <FaMagic className="w-6 h-6" /> {/* Using FaMagic icon for Gemini AI (representing intelligence/creation) */}
                                        </span>
                                        <span className="text-[#535bf2] text-3xl font-semibold ">Gemini AI</span>
                                    </div>
                                </a>
                                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                    {/* Strapi */}
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-[#535bf2] p-2 rounded-full flex items-center justify-center text-white">
                                            <FaDatabase className="w-6 h-6" /> {/* Using FaDatabase icon for Strapi (representing content/data management) */}
                                        </span>
                                        <span className="text-[#535bf2] text-3xl font-semibold">Strapi</span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="py-8 z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h2 className="font-bold text-3xl">How it Works?</h2>
                    <h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <AtomIcon className='h-8 w-8' />

                            <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Our AI-powered assistant will guide you, section by section, to create a resume that gets noticed by recruiters.


                            </p>
                        </a>

                        <a
                            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <Edit className='h-8 w-8' />

                            <h2 className="mt-4 text-xl font-bold text-black">Edit Your form </h2>

                            <p className="mt-1 text-sm text-center text-gray-600">
                                Review and enhance your resume sections. Leverage AI insights to tailor your experience and skills, ensuring your application always stands out.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <Share2 className='h-8 w-8' />

                            <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Share your AI-optimized resume digitally with a unique link. Track views and engagement to see how your profile performs with potential employers.
                            </p>
                        </a>
                    </div>
                    {/* Section 3: Why Our AI Resume Builder? */}
                    <section className="py-20 px-4">
                        <div className="container mx-auto max-w-4xl ">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#535bf2] mb-8">
                                Why Our AI Resume Builder?
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed text-start">
                                At the heart of our system lies a cutting-edge AI that analyzes thousands of top-performing resumes
                                across diverse industries. From finance and tech to creative and academic fields, our AI Resume
                                Builder instantly identifies the optimal layout and content strategy to help you stand out. No more
                                fumbling with confusing templates or scouring the web for best practices.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-start">
                                We use advanced ATS (Applicant Tracking System) scanning algorithms to ensure your resume
                                includes the right keywords, action verbs, and formatting elements. Our AI doesn't just check spelling
                                and grammar—it actively tailors your resume to increase your chances of passing recruiters'
                                automated filtering systems.
                            </p>
                        </div>
                    </section>
                    {/* Section 4: Professional Resume Features */}
                    <section className="py-20 px-4 ">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#535bf2] mb-8">
                                Professional Resume
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-12 items-start text-start">
                                <div className="lg:w-1/2 ">
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        A well-structured resume can make all the difference, especially when it comes
                                        to matching the keywords hiring managers look for. Our AI Resume Builder
                                        simplifies this process by instantly embedding the right terms, making sure
                                        you're always ahead of automated filters and compelling applicants.
                                    </p>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        Even if you're new to job hunting or transitioning careers, we guide you through
                                        best practices like bullet-point organization, measurable achievements, and
                                        strategic section ordering. Our mission is to cut down on the guesswork and let
                                        you apply confidently, knowing your resume meets the gold standard.
                                    </p>

                                    {/* Feature List */}
                                    <ul className="space-y-6">
                                        <li className="flex items-start">
                                            <div className="text-[#535bf2]  text-2xl mr-4 mt-1"><FaClock /></div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-600">One-Click Revisions</h3>
                                                <p className="text-gray-600 text-base">
                                                    Instantly optimize your resume based on any job description
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="text-[#535bf2]  text-2xl mr-4 mt-1"><FaBolt /></div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-600">AI-Generated Samples</h3>
                                                <p className="text-gray-600 text-base">
                                                    Get a fully tailored resume in seconds, ready to land interviews
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="text-[#535bf2] text-2xl mr-4 mt-1"><FaBullseye /></div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-600">ATS Optimized</h3>
                                                <p className="text-gray-600 text-base">
                                                    ATS Keywords embedding to ensure your resume passes the first round
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Resume Preview/Image */}
                                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                    <ResumePreviewPlaceholder />
                                </div>
                            </div>

                            {/* Industry-Specific Resume Hacks */}
                            <div className="mt-20">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    Industry-Specific Resume Hacks
                                </h3>
                                <p className="text-gray-600 text-lg  text-start leading-relaxed">
                                    <span className="text-[#535bf2]   font-bold">Tech Roles:</span> Whether you're a front-end developer or a cloud architect, showcase measurable
                                    achievements like reduced load times, optimized codebases, or successful project launches.
                                    Highlight technical proficiencies (e.g., React, Node.js, AWS) in a dedicated skills section to help ATS
                                    scan and categorize your expertise quickly.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="mt-12 text-center mb-20">
                        <a
                            href="/dashboard"
                        >
                            <button> Try it now</button>
                        </a>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Home;

