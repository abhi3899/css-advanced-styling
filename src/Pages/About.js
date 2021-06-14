import React from 'react'
import '../styles/about.scss'
import nat from '../images/nat-1-large.jpg';
import natsecond from '../images/nat-2-large.jpg'
import natthird from '../images/nat-3-large.jpg'

function About() {
    return (
        <div className="about">
            <div className="about-subheading">
            <h2 className="heading-secondary">
                Exciting Tours For Adventerous People
            </h2>
            </div>
           <div className="main-column">
               <div className="main-column-left">
               <h3 class="heading-tertiary ">You're going to fall in love with nature</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 class="heading-tertiary ">Live adventures like you never have before</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos magnameligendi sit odit ullam iusto architecto, veniam sapiente reprehenderit
                        </p>
                        <button className="btn-green">Learn More &rarr;</button>
               </div>
               <div className="main-column-right">
                    <div className="composition">
                        <img src={nat} alt="image1" className="composition-img composition-img-p1"/>
                        <img src={natsecond} alt="image2" className="composition-img composition-img-p2"/>
                        <img src={natthird} alt="image3" className="composition-img composition-img-p3"/>
                    </div>
               </div>
           </div>
            
        </div>
    )
}

export default About
