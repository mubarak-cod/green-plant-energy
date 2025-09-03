import React from 'react'
import Navbar from '../components/Nav';
import Image from 'next/image';
const page = () => {
    return (
        <div>
            <Navbar />
            <div className=''>

                <h1>
                    Who We Are
                </h1>
            </div>

            <div>
                <h1>Green Plant Energy Limited is a dynamic global energy company with businesses and operations across the entire spectrum of the energy value chain.</h1>
            </div>

            <div>
                <p>Our mandate is to create an energy business that is:</p>

                <h1>Resilient</h1>
                <img
                    src=""
                    alt={item.title}
                    width={500}
                    height={500}
                    className="rounded-2xl"
                />

                <p>
                    We are focused on energy transition while ensuring domestic energy security.
                </p>
            </div>

            <div>
                <div>
                    <h3>Our Vision</h3>
                    <img
                        src=""
                        alt={item.title}
                        width={500}
                        height={500}
                        className="rounded-2xl"
                    />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt illum impedit.</p>
                    </div>
                </div>
                <div>
                    <h3>Our Vision</h3>
                    <img
                        src=""
                        alt={item.title}
                        width={500}
                        height={500}
                        className="rounded-2xl"
                    />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt illum impedit.</p>
                    </div>
                </div>
                <div>
                    <h3>Our Vision</h3>
                    <img
                        src=""
                        alt={item.title}
                        width={500}
                        height={500}
                        className="rounded-2xl"
                    />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt illum impedit.</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt illum impedit.</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt illum impedit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;