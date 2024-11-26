export default function SearchBar(){
    return(      
        <form className="max-w-3xl md:mx-auto mx-8 mb-8">
            <div className="flex">
                <select id="type" className="flex-shrink-0 z-10 inline-flex items-center p-3 font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-2xl hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                <option value="Vacancies" selected>Вакансії</option>
                <option value="Services">Послуги</option>
                <option value="CVs">Резюме</option>
                </select>
                <div className="relative w-full">
                  <div className="md:grid md:grid-cols-2">
                    <input type="search" id="search-dropdown" className="block py-3 w-full text-gray-900 bg-gray-0 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-sky-500 focus:border-sky-400 focus:z-20 rounded-e-2xl md:rounded-none" placeholder="  Введіть пошуковий запит..." required />
                    <input type="search" id="search-dropdown" className="hidden md:block py-3 w-full text-gray-900 bg-gray-0 rounded-e-2xl border-s-gray-50 border-s-2 border border-gray-300 focus:sky-blue-500 focus:border-sky-400 focus:z-20" placeholder="  Ваше місто"/>
                    </div>
                    <button type="submit" className="absolute top-0 md:-end-8 -end-2 z-20 p-3 md:px-6 font-medium h-full text-white bg-sky-400 rounded-2xl border border-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
}