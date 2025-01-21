/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const RedCard = (props) => {
    return (
        <div className='parent'>
            {/* Card */}
            <div className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[76vh] w-[30vw] redcard rounded-2xl p-5 flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-black border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-black border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div>
                            <img src={props.ImgLink} alt="" className='border-black border-[1.6px] z-50 w-[99.5%] h-[43.3vh] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[76vh] w-[30vw] bg-[#333] rounded-2xl p-5 text-[#e7e7e7] flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-white border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-white border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 items-center justify-between h-full'>
                            <div className='flex items-start justify-start w-full'>
                                <p className='text-pretty text-lg'>{props.Para}</p>
                            </div>

                            <a href={props.link} className='w-full'>
                                <button className='w-full h-20 bg-[#e7e7e7] text-[#111] text-4xl font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const BlueCard = (props) => {
    return (
        <div className='parent'>
            {/* Card */}
            <div className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[76vh] w-[30vw] bluecard rounded-2xl p-5 flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-black border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-black border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div>
                            <img src={props.ImgLink} alt="" className='border-black border-[1.6px] z-50 w-[99.5%] h-[43.3vh] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[76vh] w-[30vw] bg-[#333] rounded-2xl p-5 text-[#e7e7e7] flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-white border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-white border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 items-center justify-between h-full'>
                            <div className='flex items-start justify-start w-full'>
                                <p className='text-pretty text-lg'>{props.Para}</p>
                            </div>

                            <a href={props.link} className='w-full'>
                                <button className='w-full h-20 bg-[#e7e7e7] text-[#111] text-4xl font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const GreenCard = (props) => {
    return (
        <div className='parent'>
            {/* Card */}
            <div className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[76vh] w-[30vw] greencard rounded-2xl p-5 flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-black border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-black border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div>
                            <img src={props.ImgLink} alt="" className='border-black border-[1.6px] z-50 w-[99.5%] h-[43.3vh] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[76vh] w-[30vw] bg-[#333] rounded-2xl p-5 text-[#e7e7e7] flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-white border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-white border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 items-center justify-between h-full'>
                            <div className='flex items-start justify-start w-full'>
                                <p className='text-pretty text-lg'>{props.Para}</p>
                            </div>

                            <a href={props.link} className='w-full'>
                                <button className='w-full h-20 bg-[#e7e7e7] text-[#111] text-4xl font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

const YellowCard = (props) => {
    return (
        <div className='parent'>
            {/* Card */}
            <div className='card relative inline-block w-fit'>

                {/* Front Card */}
                <div className='front'>
                    <div className="h-[76vh] w-[30vw] yellowcard rounded-2xl p-5 flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-black border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-black border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div>
                            <img src={props.ImgLink} alt="" className='border-black border-[1.6px] z-50 w-[99.5%] h-[43.3vh] rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div className='back absolute top-0'>
                    <div className="h-[76vh] w-[30vw] bg-[#333] rounded-2xl p-5 text-[#e7e7e7] flex flex-col gap-10" >
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headUp}</h1>
                                <h1 className="text-nowrap text-[2.6vw] font-bold">{props.headDown}</h1>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='px-6 py-[1px] border-white border-[1.6px] scale-y-105 rounded-full text-xl uppercase'>{props.Box1}</span>
                                <span className='px-6 py-[1px] border-white border-[1.6px] rounded-full scale-y-105 text-xl uppercase'>{props.Box2}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 items-center justify-between h-full'>
                            <div className='flex items-start justify-start w-full'>
                                <p className='text-pretty text-lg'>{props.Para}</p>
                            </div>

                            <a href={props.link} className='w-full'>
                                <button className='w-full h-20 bg-[#e7e7e7] text-[#111] text-4xl font-bold rounded-2xl'>LEARN MORE</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export { RedCard, BlueCard, GreenCard, YellowCard }
