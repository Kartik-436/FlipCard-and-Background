/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import gsap from 'gsap';

const RedCard = (props) => {
    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            duration: 2,
            rotateY: 360,
            ease: "elastic.out(1,0.5)"
        });
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            delay: 0.7,
            duration: 2,
            rotateY: 0,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            delay: 0.7,
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
    };

    return (
        <div className='parent'>
            {/* Card */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[27vh] sm:h-[40vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] redcard rounded-2xl p-[5%] flex flex-col gap-[8%]" >
                        <div className='flex flex-col gap-[5%] h-[35%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='h-[65%]'>
                            <img src={props.ImgLink} alt="" className='border-black border-[0.3px] md:border-[1.6px] z-50 w-[99.5%] h-[100%] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[27vh] sm:h-[32vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] bg-[#333] rounded-2xl p-[5%] text-[#e7e7e7] flex flex-col md:gap-[6%]" >
                        <div className='flex flex-col gap-[5%] h-[30%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[2%] items-center justify-between h-[70%]'>
                            <p className='text-pretty text-[1.7vw] md:text-[1.1vw] text-left'>{props.Para}</p>

                            <a href={props.link} className='w-full h-[25%]'>
                                <button className='w-full h-[100%] bg-[#e7e7e7] text-[#111] text-[2.2vw] font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const BlueCard = (props) => {

    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            duration: 2,
            rotateY: 360,
            ease: "elastic.out(1,0.5)"
        });
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            delay: 0.7,
            duration: 2,
            rotateY: 0,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            delay: 0.7,
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
    };

    return (
        <div className='parent'>
            {/* Card */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[27vh] sm:h-[40vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] bluecard rounded-2xl p-[5%] flex flex-col gap-[8%]" >
                        <div className='flex flex-col gap-[5%] h-[35%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='h-[65%]'>
                            <img src={props.ImgLink} alt="" className='border-black border-[0.3px] md:border-[1.6px] z-50 w-[99.5%] h-[100%] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[27vh] sm:h-[32vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] bg-[#333] rounded-2xl p-[5%] text-[#e7e7e7] flex flex-col md:gap-[6%]" >
                        <div className='flex flex-col gap-[5%] h-[30%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[2%] items-center justify-between h-[70%]'>
                            <p className='text-pretty text-[1.7vw] md:text-[1.1vw] text-left'>{props.Para}</p>

                            <a href={props.link} className='w-full h-[25%]'>
                                <button className='w-full h-[100%] bg-[#e7e7e7] text-[#111] text-[2.2vw] font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const GreenCard = (props) => {

    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            duration: 2,
            rotateY: 360,
            ease: "elastic.out(1,0.5)"
        });
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            delay: 0.7,
            duration: 2,
            rotateY: 0,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            delay: 0.7,
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
    };

    return (
        <div className='parent'>
            {/* Card */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[27vh] sm:h-[40vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] greencard rounded-2xl p-[5%] flex flex-col gap-[8%]" >
                        <div className='flex flex-col gap-[5%] h-[35%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='h-[65%]'>
                            <img src={props.ImgLink} alt="" className='border-black border-[0.3px] md:border-[1.6px] z-50 w-[99.5%] h-[100%] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[27vh] sm:h-[32vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] bg-[#333] rounded-2xl p-[5%] text-[#e7e7e7] flex flex-col md:gap-[6%]" >
                        <div className='flex flex-col gap-[5%] h-[30%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[2%] items-center justify-between h-[70%]'>
                            <p className='text-pretty text-[1.7vw] md:text-[1.1vw] text-left'>{props.Para}</p>

                            <a href={props.link} className='w-full h-[25%]'>
                                <button className='w-full h-[100%] bg-[#e7e7e7] text-[#111] text-[2.2vw] font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const YellowCard = (props) => {

    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            duration: 2,
            rotateY: 360,
            ease: "elastic.out(1,0.5)"
        });
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        gsap.to(card.querySelector('.front'), {
            delay: 0.7,
            duration: 2,
            rotateY: 0,
            ease: "elastic.out(1,0.5)"
        });
        gsap.to(card.querySelector('.back'), {
            delay: 0.7,
            duration: 2,
            rotateY: 180,
            ease: "elastic.out(1,0.5)"
        });
    };

    return (
        <div className='parent'>
            {/* Card */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[27vh] sm:h-[40vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] yellowcard rounded-2xl p-[5%] flex flex-col gap-[8%]" >
                        <div className='flex flex-col gap-[5%] h-[35%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-black border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='h-[65%]'>
                            <img src={props.ImgLink} alt="" className='border-black border-[0.3px] md:border-[1.6px] z-50 w-[99.5%] h-[100%] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[27vh] sm:h-[32vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[37vw] md:w-[30vw] bg-[#333] rounded-2xl p-[5%] text-[#e7e7e7] flex flex-col md:gap-[6%]" >
                        <div className='flex flex-col gap-[5%] h-[30%]'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[1.15vw] uppercase'>{props.Box1}</span>
                                <span className='px-[1.5vw] md:py-[0.1vw] py-[0.4vw] border-white border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[1.15vw] uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[2%] items-center justify-between h-[70%]'>
                            <p className='text-pretty text-[1.7vw] md:text-[1.1vw] text-left'>{props.Para}</p>

                            <a href={props.link} className='w-full h-[25%]'>
                                <button className='w-full h-[100%] bg-[#e7e7e7] text-[#111] text-[2.2vw] font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export { RedCard, BlueCard, GreenCard, YellowCard }
