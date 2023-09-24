import React from 'react'
import './Style.css'

function About(props) {
    return (
        <div id='about' className=' main-box' style={props.colorMode}>
            <div className='container-fluid head-box' >
                <h1 className='text-center about-title'>{props.heading}</h1>
                <div className='row'>
                    <div className='col-md-4 about-img'>
                        <img src="about.jpg" />
                    </div>
                    <div className='col-md-8 p-5' >
                        <h2 className='mb-3'> Pranav Kumar</h2>
                        <p>A letter is a written message conveyed from one person
                            (or group of people) to another through a medium.[1] Somethin
                            epistolary means that it is a form of letter writing. The term usually
                            excludes written material intended to be read in its original form by 
                            large numbers of people, such as newspapers and placards, although even
                            these may include material in the form of an "open letter". The typical
                            form of
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About