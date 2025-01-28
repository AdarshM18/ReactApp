import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Piece</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIONm9nfkKFGqQxociuHO6kFgh3j721-ETeg&s" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="data:image/jpeg;base64,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" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">King Of Hell</h1>
        </div>
    );
}
