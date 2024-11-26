import Verified from "../icons/Verified";
import Tag from "./Tag";

export default function VacancyLanding(props){
  return(
    <a href={"/vacancies/"+ props.id} className="block max-w-md px-12 py-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100">
      <div className="flex justify-between">
        <div>
          <h5 className="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900">Назва вакансії</h5>
          <p className="font-semibold text-gray-900 py-1">12 000 - 13 000</p>
          <div className="flex space-x-2">
            <p className="font-semibold text-gray-900 py-1 pb-4">Назва компанії</p>
            <div className="pt-1.5">
              <Verified color="#38bdf8"/>
            </div>
        </div>
      </div>
      <img className="p-5 rounded-t-lg max-h-[20em]" src="https://placehold.co/80x100" alt="Vacancy image" />
      </div>
      <p className="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
      <div className="grid gap-2 grid-cols-4 py-6">
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
      </div>
    </a>
  )
}