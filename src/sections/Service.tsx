"use client";

import React from "react";
import {motion, useInView, useAnimation} from 'framer-motion'


const Service = () => {

    const ref = React.useRef();
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    React.useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
            slideControls.start('visible');
        }
    },[isInView])
  return (
    <section ref={ref} id="service" className="service bg-white py-12 scroll-smooth">
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        <h1 className="text-center text-heading-color font-semibold text-3xl mb-10">
          What we provide?
        </h1>
        <p className="text-center text-lg mb-12">
          At CG Advantage, we excel in connecting businesses with top tech talent globally. Our
          streamlined processes ensure that you get the right talent quickly and efficiently.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
             <div
            //  variants={{
            //     hidden: {opacity: 0, x:0},
            //     visible: {opacity:1, x:75}
            //  }}
            // initial='hidden'
            // animate={mainControls}
            // transition={{duration: 1, delay:0.50}}
             key={index}
             className="bg-light-color p-8 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:bg-opacity-100 hover:text-white transform hover:scale-105"
           >
             <div className="flex justify-center mb-6">
               <img src={service.icon} alt={service.title} className="w-8 h-auto" />
             </div>
             <h4 className="text-center text-xl font-semibold mb-4">{service.title}</h4>
             <p className="text-center">{service.description}</p>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

const services = [
  {
    title: "Top Talent",
    description:
      "Access the top 3% of software developers and tech professionals ensuring you only work with the best in the industry.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "Instant Fulfillment",
    description:
      "Experience a robust hiring process that offers quick access to the right talent ensuring you find the right talent at the right time.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_2.png",
  },
  {
    title: "Deep Expertise",
    description:
      "Leverage the deep expertise of our professionals who possess specialized knowledge across hundreds of technologies.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "Seamless Onboarding",
    description:
      "Our professionals seamlessly integrate into your project – fostering collaboration and maximizing productivity.",
    icon: "	https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_4.png",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize your unique needs and deliver personalized staffing solutions to fulfill your project goals.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "Flexible Engagements",
    description:
      "Adapt to changing needs with ease. Conveniently scale up or down based on your project needs.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_6.png",
  },
];
