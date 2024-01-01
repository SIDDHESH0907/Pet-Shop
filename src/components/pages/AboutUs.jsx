import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
    <div className="about-main">
        <div className="about-title">Our Features</div>
        <div className="about-card-1">
            <div className="about-card-1-left">
                <div className="card-1-heading">Hello!</div>
                <hr className='about-card-hr'/>
                <div className="card-1-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum maiores voluptatibus, repellat aliquid minus esse odit, voluptate aperiam ipsam eum dolorem recusandae nulla. Facilis, quia sapiente! Beatae nostrum ipsa placeat sit? Possimus quia hic ducimus nostrum blanditiis perferendis tempore consequatur fugiat deserunt perspiciatis ex vel architecto quam iure eaque nulla debitis, earum sapiente animi, numquam voluptatem eligendi! Quasi, a!</div>
            </div>
            <div className="about-card-1-right">
                <img className='about-card-image' src="https://dummyimage.com/600x400.png/5fa2dd/ffffff" alt="" />
            </div>
        </div>
        <div className="about-card-2"></div>
        <div className="about-card-3"></div>
    </div>
    </>
  )
}

export default AboutUs