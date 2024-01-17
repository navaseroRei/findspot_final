import { useState } from 'react'
import { ic_left, ic_profile, ic_right } from '../assets/export'
import { sampleData } from '../assets/sampleData'

const LandingPage = () => {
  const backgroundImages = [
    '/src/assets/something4.svg',
    '/src/assets/something2.svg',
    '/src/assets/something5.svg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextBackgroundImage = () => {
    const nextIndex = (currentIndex + 1) % backgroundImages.length
    setCurrentIndex(nextIndex)
  }

  const prevBackgroundImage = () => {
    const prevIndex =
      (currentIndex - 1 + backgroundImages.length) % backgroundImages.length
    setCurrentIndex(prevIndex)
  }

  return (
    <div
      className={` transition-all duration-500 linear no-scrollbar h-screen overflow-hidden w-full bg-cover`}
      style={{ backgroundImage: `url('${backgroundImages[currentIndex]}')` }}
    >
      <div className=' bg-slate-800/30 backdrop-blur-sm w-full h-screen'>
        {/* Navigation Bar */}
        <nav className='w-full h-[8%] backdrop-blur-sm bg-slate-500/10  font-lexend '>
          <div className='flex h-full justify-between items-center mx-10 lg:mx-20'>
            <div className='hover:animate-pulse cursor-pointer p-6 text-2xl font-black bg-gradient-to-r  from-zinc-200 to-zinc-300 bg-clip-text text-transparent'>
              FINDSPOT
            </div>
            <img
              className='p-6 transform cursor-pointer transition-all hover:scale-125 '
              src={ic_profile}
            />
          </div>
        </nav>

        {/* Hero Section */}

        <div className='flex justify-center items-center h-[70%]'>
          {/* space */}
          <div className='w-full h-[90%] mx-4 grid grid-cols-5 gap-2'>
            <div className='col-span-1] rounded-lg '>
              <div className='grid grid-cols-4  h-full '>
                <div className='col-end-5 flex  justify-center items-center col-span-1 hover:border rounded-xl border-dotted'>
                  <div className='shrink-0  '>
                    <button
                      onClick={prevBackgroundImage}
                      className=' p-4 cursor-pointer transition transform hover:-translate-x-3'
                    >
                      <img
                        src={ic_left}
                        className=' sm:w-6  '
                        alt='arrow leftt'
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 lg:items-center flex flex-col  h-full  rounded-lg  text-white'>
              <div className='  h-[50%] flex items-center'>
                <h1 className=' hover:animate-pulse font-lexend text-center font-bold lg:text-8xl text-6xl'>
                  {sampleData.h1}
                </h1>
              </div>
              {/* space */}
              <div className='   h-[50%] flex items-center '>
                <p className='text-center hover:animate-pulse lg:text-4xl text-2xl font-lexend font-bold'>
                  {sampleData.p}
                </p>
              </div>
            </div>
            <div className='col-span-1  rounded-lg'>
              <div className='grid grid-cols-4  h-full'>
                <div className=' flex justify-center hover:border border-dotted rounded-xl items-center col-span-1 0'>
                  <div className='shrink-0 '>
                    <button
                      onClick={nextBackgroundImage}
                      className='  p-4 cursor-pointer transition transform hover:translate-x-3'
                    >
                      <img
                        src={ic_right}
                        className=' sm:w-6 fill-white'
                        alt='arrow right'
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* space */}
        </div>
        {/* FILTERS */}
        <div className='w-full flex justify-center'>
          {/* space */}
          <div className='backdrop-blur-sm sm:w-[600px] md:w-[1100px] bg-blend-color-burn bg-gray-400/30 self-center text-3xl p-8  mt-4 rounded-xl'>
            <div className='flex space-x-2 bg-gray '>
              <div className=' border-r pl-2 pt-2 '>
                <h2>Location</h2>
                <div className='mt-4 text-lg'>
                  <input
                    className=' w-[80%] bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                    type='text'
                    placeholder='add destination'
                  />
                </div>
              </div>
              <div className='border-r pl-2 pt-2 '>
                <h2>Check in</h2>
                <div className='mt-4 text-lg'>
                  <input
                    className='  w-[80%] bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                    type='text'
                    placeholder='add date'
                  />
                </div>
              </div>
              <div className=' border-r  pl-2 pt-2'>
                <h2>Check out</h2>
                <div className='mt-4 text-lg'>
                  <input
                    className=' w-[80%] bg-transparent  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                    type='text'
                    placeholder='add date'
                  />
                </div>
              </div>
              <div className=' pl-2 w-[18%]  pt-2'>
                <h2>People</h2>
                <div className='mt-4 text-lg'>
                  <input
                    className=' w-[80%] bg-transparent  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                    type='text'
                    placeholder='add people'
                  />
                </div>
              </div>
              <div className='self-center '>
                <img
                  src={ic_profile}
                  alt='searchbtn'
                  className='hover:scale-125 transition duration-500 cursor-pointer object-contain h-30 w-30 self-center '
                />
              </div>
            </div>
          </div>
          {/* space */}
        </div>

        {/* comeone */}
      </div>
    </div>
  )
}

export default LandingPage
