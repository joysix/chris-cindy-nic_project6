import React from 'react';
import './../partials/_landing.scss';
import { Link } from 'react-router-dom';


const Landing = () => {
  return(
    <section className="landing">
      <h1 className="h1">Moon Shadow Cocktails</h1>

      <p className="textblock">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nihil ipsam eligendi, laboriosam, quae autem earum modi blanditiis sit ullam recusandae perspiciatis sint eum soluta odit? Minus reiciendis illo reprehenderit?</p>
      <Link to="/Form">
        <button className="btn">Inspire Me</button>
      </Link>
    </section>
  )
}

export default Landing;