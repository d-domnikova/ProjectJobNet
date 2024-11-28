import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import SignIn from "../modals/SignIn";

export default function Header({isLoggedIn, userRole}){
    return(
        <>
        <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray-200 font-medium">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto md:max-lg:px-2 px-4 py-6">
                <div className="flex space-x-4">
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.svg" className="md:h-10 h-12" alt="JobNet Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap max-md:text-2xl xl:text-2xl hover:text-sky-600">JobNet</span>
            </a>
                </div>
                { isLoggedIn ? (
                        <div className="flex md:order-2">
                            <Popover className="relative">
                                <PopoverButton className="mt-2 mr-8 md:w-12 md:h-12 w-10 h-10 bg-gray-400 rounded-full hover:ring"></PopoverButton>
                                <PopoverPanel anchor="bottom" className="flex flex-col bg-white text-left p-3 rounded-lg border-b border-gray-200 font-medium shadow space-y-4 text-gray-900">
                                    <a href={userRole === "User" ? "/user" : "/company"} className="mt-8 pt-2 block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Мій профіль</a>
                                    <a href={userRole === "User" ? "/user/my-blog" : "/company/my-blog"} className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Мій блог</a>
                                    { userRole === "User" ? (
                                        <>
                                            <a href="/user/my-services" className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Мої послуги</a>
                                            <a href="/user/my-resumes" className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Мої резюме</a>
                                            <a href="/user/saved-vacancies" className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Збереженні вакансії</a>
                                            </>
                                    ) : (
                                        <>
                                            <a href="/company/my-vacancies" className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Мої вакансії</a>
                                            <a href="/company/saved-resumes" className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Збереженні резюме</a>
                                        </>
                                    )}
                                    <a href={userRole === "User" ? "/user/personal-info" : "/company/personal-info"} className="pb-2 block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 border-b border-gray-200">Налаштування</a>
                                    <a href="/" onClick={logout} className="block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Вийти</a>
                                </PopoverPanel>
                                </Popover>
                        </div>
                    ) : (
                        <div className="flex md:order-2 space-x-4 md:max-lg:space-x-3 rtl:space-x-reverse">
                            <a href="/signup/user" 
                                className="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none rounded-xl px-5 py-2.5 text-center hidden sm:inline">Реєстрація</a>
                            <SignIn />
                        </div>
                    )}
            
            <div className="items-center justify-between hidden md:flex md:order-1" id="navbar-sticky">
                <ul className="flex flex-col w-full lg:w-auto p-4 md:p-0 mt-4 border border-gray-100 rounded-lg space-x-7 xl:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  { isLoggedIn && userRole === "Company" ? (
                            <li className="text-center">
                                <HeaderButtons text="Розмістити вакансію" url="/vacancy/create"/>
                            </li>
                    ) : (
                        <>
                            <li className="md:max-lg:hidden text-center">
                                <HeaderButtons text="Розмістити резюме" url="/resume/create"/>
                            </li>
                            <li className="md:max-lg:hidden text-center">
                                <HeaderButtons text="Додати послугу" url="/service/create"/>
                            </li>
                            <li className='lg:hidden text-center'>
                            <Popover className="relative">
                                <PopoverButton> <HeaderButtons text="Розмістити >"/> </PopoverButton>
                                <PopoverPanel anchor="bottom" className="flex flex-col bg-white text-center p-3 rounded-lg border-b border-gray-200 font-medium shadow space-y-3">
                                    <a href="/resume/create" className="mt-8 py-2 block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 border-b border-gray-200">Розмістити резюме</a>
                                    <a href="/service/create" className="block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">Додати послугу</a>
                                </PopoverPanel>
                                </Popover>
                            </li>
                       </>
                    )}
                    <li className="text-center">
                        <HeaderButtons text="Всі вакансії" url="/vacancies"/>
                    </li>
                    <li className="text-center">
                        <HeaderButtons text="Всі послуги" url="/services"/>
                    </li>
                    <li className="text-center">
                        <HeaderButtons text="Блог" url="/blog"/>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="pt-36"></div>
        </>
    )
}

function HeaderButtons(props){
    return(
        <a href={props.url} className="inline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 text-medium">{props.text}</a>
    )
}

const logout= ()=>{
    localStorage.clear();
}