import React from 'react'
import { arrow } from '../assets/icons'
import { Link } from 'react-router-dom'

  const Infobox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>{btnText}
        <img src={arrow} alt="icon"  className='w-4 h-4 object-contain'/>
        </Link>
    </div>
  )

const renderContent = {
    1:(<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 mx-5 text-white'>Hi, I am <span className='font-semibold'>Pranav Kumar</span> <br /> I am softwere Engineer from India</h1>),
    2:(<h1><Infobox text={"Here i like to learn programming languages due to this is had completed multiple landuages"} btnText={"Know More"} /></h1>),
    3:(<h1><Infobox text={"For More Information you can contect me"} link={"/contect"} btnText={"contect me"}/> </h1>),
    4:(<h1><Infobox text={"I like to make Degin as well as Development here you can see my work"} btnText={"Know More"}/></h1>),
}
console.log("this is working "+renderContent)

function HomeInfo({currentState}) {
  return renderContent[currentState] || null;
}

export default HomeInfo