import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
