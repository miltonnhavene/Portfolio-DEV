import React from 'react'

const About = () => {
  return (
    <div id='about' className="mt-20 0 px-6 max-w-6xl mx-auto flex gap-12">
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-25 '>
        <div className='w-1/2 p-2'>
          <h2 className="text-4xl text-center font-semibold text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam in repellat quidem ab! Rem voluptatum accusamus obcaecati, 
            velit neque nihil veritatis ab voluptas tempora magni quae placeat dolore nesciunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas numquam quis assumenda consectetur reprehenderit? Ab voluptas nulla architecto numquam cumque, 
            officiis error eaque perspiciatis nisi suscipit. Dolorem, aliquam debitis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident repellendus eius porro voluptatum sequi nostrum impedit, minus nemo, 
            assumenda dolores odio maiores numquam eligendi, commodi unde itaque similique quisquam?
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap max-w-2xl'>
            <li>
              
            </li>
          </ul>
        </div>
        
        <div className='w-64 sm:w-100 rounded-3xl max-w-none'>
          <img
            src="/images/Eu.JPG"
            alt="Foto"
            className="rounded-full object-cover"
            style={{ width: '421px', height: '538px' }}
          />
        </div>
      </div>
    </div>

  )
}
export default About
