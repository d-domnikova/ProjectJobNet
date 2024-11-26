import Tag from "./Tag";

export default function ServiceLanding(props){
    return(
        <a href={"/services/"+ props.id} className="block max-w-md px-12 py-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100">
          <div className="flex justify-between">
            <div>
                <h5 className="mb-2 text-2xl  pt-4  font-bold tracking-tight text-gray-900">Назва послуги</h5>
                <p className="font-semibold text-gray-900 py-1">120/год</p>
                <p className="font-semibold text-gray-900 py-1 ">Ім'я Призвище, Спеціалізація</p>
                <p className="font-semibold text-gray-900 py-1 pb-4">Місто, Область</p>
          </div>
          <img className="p-5 rounded-t-lg max-h-[20em]" src="https://placehold.co/80x100" alt="Vacancy image" />
        </div>
        <p className="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
        <div className="grid gap-2 sm:grid-cols-3 grid-cols-2 py-4">
          <Tag url="#" text="Назва тегу"/>
          <Tag url="#" text="Назва тегу"/>
          <Tag url="#" text="Назва тегу"/>
        </div>
      </a>
    )
}