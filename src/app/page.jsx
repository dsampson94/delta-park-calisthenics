'use client';

import { Container } from '@/components/Container';
import Image from 'next/image';

export default function Home() {
    return (
        <Container className="text-black -mt-12">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Delta Park Calisthenics Gym Project</h1>
                <p className="mt-4 text-lg">Adding an exciting community space to our beloved park</p>
            </header>

            <section className="flex justify-center">
                <Image src="/cali.png" alt="gym" width="500" height="500" />
            </section>

            <section className="my-12 text-center">
                <h2 className="text-3xl font-semibold">Project Documents</h2>
                <div className="mt-4 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-2 sm:gap-4">
                    <a href="/inst-specs.pdf" target="_blank"
                       className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200 mb-2 sm:mb-0 sm:mx-2">Installation Details</a>
                    <a href="/qoute.pdf" target="_blank"
                       className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200 mb-2 sm:mb-0 sm:mx-2">Supplier Quote</a>
                    <a href="/contact.jpg" target="_blank" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200 sm:mx-2">Supplier
                        Contact</a>
                </div>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Project Overview</h2>
                <p className="mt-4">
                    The Delta Park Calisthenics Gym Project aims to achieve the installation of
                    the modest outdoor gym pictured above in Delta Park preferably somewhere between Wendy Avenue and the Braamfontein Spruit.
                    This initiative seeks to promote community
                    engagement, wellness, and health through the installation of the equipment above.
                    With partners <a href="https://www.xperien.co.za/" target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'underline' } }>Xperien</a>, <a
                    href="https://www.jozitrails.co.za/" target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'underline' } }>JoziTrails</a>, and <a
                    href="https://gog.co.za/" target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'underline' } }>Green Outdoor Gyms</a>, the project can
                    be a great success for the community!
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Installation Location</h2>
                <div className="flex flex-col md:flex-row justify-center my-4 items-center md:items-start gap-4">
                    <div className="w-full md:w-auto">
                        <Image
                            src="/location.png"
                            alt="Installation Location Map"
                            width={ 336 }
                            height={ 360 }
                            layout="responsive"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-auto rounded-lg shadow-lg overflow-hidden">
                        <video
                            src="/Parkvid.mp4"
                            playsInline
                            className="w-full rounded-lg"
                            controls
                        />
                    </div>
                </div>
                <p className="text-center mt-4">
                    The proposed installation site for the Delta Park Calisthenics Gym is located between Wendy Avenue and the Braamfontein Spruit, as indicated on the
                    map above. This is just a proposed location and the necessary authorities should be consulted to find the perfect location.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Funding</h2>
                <p className="mt-4">
                    The funding for the Delta Park Calisthenics Gym Project is currently being reviewed. <a href="https://www.xperien.co.za/" target="_blank"
                                                                                                            rel="noopener noreferrer"
                                                                                                            style={ { textDecoration: 'underline' } }>Xperien</a> has
                    expressed interest in supporting the project. Further
                    details will be provided as they become available and as potential partnerships and marketing material regulations are established are formalized.
                    Please see the attached qoute above from partner <a
                    href="https://gog.co.za/" target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'underline' } }>Green Outdoor Gyms</a>.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Timeline</h2>
                <p className="mt-4">
                    The project is set to commence as soon as possible, with exact details to be decided upon successful sign off by the necessary authorities.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Stakeholder Assessment</h2>
                <p className="mt-4">
                    Still to be completed.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Marketing Material Assessment</h2>
                <p className="mt-4">
                    Still to be completed.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Community Engagement Review</h2>
                <p className="mt-4">
                    Still to be completed.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Health & Safety Assessment</h2>
                <p className="mt-4">
                    Still to be completed.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl text-center font-semibold">Environmental Impact Assessment</h2>
                <p className="mt-4">
                    Still to be completed.
                </p>
            </section>

            <footer className="text-center mt-12">
                <p className="text-md">
                    For more information or to give feedback, please contact David at
                    <a href="mailto:davesampson15@gmail.com" className="text-blue-600 hover:text-blue-800"> davesampson15@gmail.com</a>.
                </p>
            </footer>
        </Container>
    );
}
