import Verified from "../icons/Verified";
import HeartOutline from "../icons/HeartOutline";
import Report from "../icons/Report";
import Tag from "/src/components/Tag";

export default function VacancyPage(props){
    return(
       <div className="mx-[5em] md:mx-[7em] max-w-4xl">
       <a href="#" className="flex mx-4 font-semibold text-lg text-gray-500 hover:underline">Всі вакансії</a>
       <div className="block px-12 py-6 bg-white border border-gray-200 rounded-3xl shadow mt-6 mb-10">
       <div className="flex justify-between">
          <div className="space-y-1.5">
            <h5 className="mb-2 text-3xl md:text-2xl pt-4 font-bold tracking-tight text-gray-900">Назва вакансії</h5>
            <p className="font-semibold md:text-xl text-lg text-gray-900 py-1">12 000 - 13 000 грн</p>
            <div className="flex space-x-2.5">
              <p className="font-semibold md:text-xl text-lg text-gray-900 py-1 pb-4">Назва компанії</p>
              <div className="pt-2 md:pt-2.5">
              <Verified color="#38bdf8" width="20" height="20"/>
              </div>
          </div>
        </div>
        <div className="relative">
          <img className="p-5 rounded-t-lg max-h-[24em]" src="https://placehold.co/100x125" alt="Vacancy image" />
          <button className="inline absolute top-0 -right-4 opacity-50 hover:bg-red-200">
            <Report />
          </button>
        </div>
      </div>
      <div className="max-w-xl grid gap-1 grid-cols-2 md:grid-cols-4">
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
      </div>
      <h5 className="mb-2 text-2xl pt-8 font-bold tracking-tight text-gray-900">Опис вакансії</h5>
      <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
      <div className="flex space-x-6 py-6">
      <button className="text-white text-lg bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-xl px-5 text-center">Відгукнутися</button>
      <button className="flex font-semibold md:text-lg rounded-xl px-3 py-2.5 hover:bg-gray-200"><span className="hidden md:flex">Зберігти</span> 
          <div className="md:pl-3 md:pt-1">
            <HeartOutline />
          </div>
        </button>
      </div>
    </div>

    <div className="relative block px-12 py-6 bg-white border border-gray-200 rounded-3xl shadow">
        <div className="flex space-x-3"> 
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Назва компанії</h5>
            <div className="pt-2">
                <Verified color="#38bdf8" width="20" height="20"/>
          </div>
        </div>
        <a href="#" className="font-semibold hidden md:flex md:absolute md:right-20 md:top-7 md:text-lg rounded-xl md:-mt-3 px-6 py-1.5 border-2 border-sky-400 hover:bg-sky-200">Детальніше</a>
        <p className="text-base/2 text-gray-600 mt-4 mb-10 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. </p>
        <a href="#" className="font-semibold absolute right-8 bottom-4 md:hidden rounded-xl px-6 py-1.5 border-2 border-sky-400 hover:bg-sky-200">Детальніше</a>
    </div>
    </div>
  )
}