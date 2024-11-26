export default function Pagination(){
    return(
        <nav className="isolate flex justify-between space-x-2 rounded-full shadow-sm mx-auto mt-12" aria-label="Pagination">
        <a href="#" className="bg-white flex items-center rounded-full px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" aria-current="page" className="z-10 flex items-center rounded-full bg-sky-400 px-4 py-2 font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">1</a>
        <a href="#" className="bg-white flex items-center rounded-full px-4 py-2 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">2</a>      
        <a href="#" className="bg-white hidden items-center rounded-full px-4 py-2 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0 md:flex">3</a>
        <span className="bg-white flex items-center rounded-full px-4 py-2 font-semibold text-gray-700 ring-1 ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" className="bg-white flex items-center rounded-full px-4 py-2 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" className="bg-white flex items-center rounded-full px-4 py-2 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" className="bg-white flex items-center rounded-full px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    )
}