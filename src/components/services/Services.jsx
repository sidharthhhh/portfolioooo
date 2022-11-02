import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
       <div className="service__head">
        <h3>UI/UX design</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        </ul>
      </article>

      {/* -----end UI/UX------ */}

      <article className='service'>
       <div className="service__head">
        <h3>Web Development</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        </ul>
      </article>

      {/* ------web dev---- */}

      <article className='service'>
       <div className="service__head">
        <h3>Content Creation</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        </ul>
      </article>

      {/* ----end content--- */}
      </div>
    </section>
  )
}

export default Services