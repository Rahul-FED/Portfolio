import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-400 to-black text-white  '>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl  font-bold inline border-b-4 border-gray-300'>About</p>
            </div>
            <p className=' text-xl mt-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus vero iusto non, officia pariatur consequatur itaque incidunt corporis quaerat quam dicta deleniti eaque optio hic consectetur beatae asperiores, dolore minima omnis maxime nostrum amet? Maiores necessitatibus doloremque illum libero. A dolore cupiditate velit quam iure deleniti vitae at quibusdam!</p>
            <br />
            <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est minima delectus accusamus blanditiis, non deleniti ipsa laboriosam deserunt assumenda aut iure id molestiae at nihil asperiores ab iusto nesciunt quo ratione. Itaque necessitatibus asperiores quis ipsum nemo debitis fuga doloremque enim eaque, placeat veniam voluptatibus sed non tenetur eos!</p>
        </div>
    </div>
  )
}

export default About