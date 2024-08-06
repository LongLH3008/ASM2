import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col'>
      <div className='w-full bg-[#053D29] grid grid-cols-4 *:m-8 px-12'>
        <div className='flex flex-col'>
          <p className='text-[#F9F3EE] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua</p>
          <ul className='*:text-[#F9F3EE] flex flex-wrap gap-6'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>

        <div className='flex flex-col *:text-[#F9F3EE]'>
          <p className='text-lg font-semibold'>Um</p>
          <ul className='*:my-3'>
            <li>Kontaktiere uns</li>
            <li>Über uns</li>
            <li>Karriere</li>
            <li>Unternehmensinformationen </li>
          </ul>
        </div>

        <div className='flex flex-col *:text-[#F9F3EE]'>
          <p className='text-lg font-semibold'>Um</p>
          <ul className='*:my-3'>
            <li>Kontaktiere uns</li>
            <li>Über uns</li>
            <li>Karriere</li>
            <li>Unternehmensinformationen </li>
          </ul>
        </div>

        <div className='flex flex-col *:text-[#F9F3EE]'>
          <p className='text-lg font-semibold'>Um</p>
          <ul className='*:my-3'>
            <li>Kontaktiere uns</li>
            <li>Über uns</li>
            <li>Karriere</li>
            <li>Unternehmensinformationen </li>
          </ul>
        </div>

 
      </div>
      <div className='w-full bg-[#062F21]  '>
        <ul className='flex justify-between *:text-white *:my-3 *:mx-20'>
          <li>2023 hood.de , Inc.</li>
          <li>
            <img src="" alt="" srcSet="1x" />
          </li>
          <li>
          Scroll to top
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer