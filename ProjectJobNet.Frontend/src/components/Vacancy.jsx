import Verified from "../icons/Verified";
import HeartOutline from "../icons/HeartOutline";
import Tag from "./Tag";
import Edit from "../icons/Edit";
import ReportForm from "./modals/ReportForm";
import DeleteModal from "./modals/DeleteModal";

import { useLocation, useParams } from "react-router-dom";

export default function Vacancy(props){

  const { id } = useParams();
  const location = useLocation();

    return(
        <div className="block max-w-4xl px-10 py-4 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100">
        <div className="relative flex justify-between">
          <a href={"/vacancies/"+ props.id} className="block">
            <h5 className="mb-2 text-xl sm:text-2xl pt-4 font-bold tracking-tight text-gray-900 hover:underline">{props.title}</h5>
            <p className="font-semibold sm:text-lg text-gray-900 py-1">{props.salary}</p>
            <p className="font-semibold sm:text-lg text-gray-900 py-1">{props.location}</p>
            <div className="flex space-x-2">
              <p className="font-semibold sm:text-lg  text-gray-900 py-1 pb-4">{props.userFirstName + props.userLastName}</p>
              <div className="pt-2 sm:pt-2.5">
              <Verified color="#38bdf8"/>
              </div>
          </div>
        </a>
          <img className="p-5 rounded-t-lg max-h-[20em]" src="https://placehold.co/80x100" alt="Vacancy image" />
          {location.pathname == "/company/my-vacancies" ? <DeleteModal/> : <ReportForm />}
          <a href={"/vacancy/edit/" + props.id} className={location.pathname == "/company/my-vacancies" ? "hover:bg-sky-200 rounded-full p-2 inline absolute -top-2 right-8" : "hidden"}>
          <Edit /></a>
      </div>
      <p className="text-base/2 text-gray-600">{props.description}</p>
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
    </div>
  )
}