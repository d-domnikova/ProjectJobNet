import Verified from "../icons/Verified";
import HeartOutline from "../icons/HeartOutline";
import Report from "../icons/Report";
import Tag from "./Tag";

export default function Vacancy(props){
    return(
        <a href={"/vacancies/"+ props.id} className="block max-w-4xl px-10 py-4 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100">
        <div className="relative flex justify-between">
          <div>
            <h5 className="mb-2 text-xl sm:text-2xl pt-4 font-bold tracking-tight text-gray-900">Назва вакансії</h5>
            <p className="font-semibold sm:text-lg text-gray-900 py-1">12 000 - 13 000 грн</p>
            <div className="flex space-x-2">
              <p className="font-semibold sm:text-lg  text-gray-900 py-1 pb-4">Назва компанії</p>
              <div className="pt-2 sm:pt-2.5">
              <Verified color="#38bdf8"/>
              </div>
          </div>
        </div>
          <img className="p-5 rounded-t-lg max-h-[20em]" src="https://placehold.co/80x100" alt="Vacancy image" />
          <button className="inline absolute top-0 -right-4 opacity-50 hover:bg-red-200">
            <Report />
          </button>
      </div>
      <p className="text-base/2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
      <div className="relative flex justify-between py-6">
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
      </div>
      <button className="flex space-x-2 font-semibold md:text-lg absolute bottom-10 lg:bottom-6 right-0"><span className="hidden sm:flex">Зберігти</span> 
          <div className="pl-2 pt-1">
            <HeartOutline color="#b2b2b2"/>
          </div>
        </button>
      </div>

    </a>
  )
}