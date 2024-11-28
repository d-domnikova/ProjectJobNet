import HeartOutline from "../icons/HeartOutline";
import Comments from "../icons/Comments";
import Edit from "../icons/Edit";
import ReportForm from "./modals/ReportForm";
import DeleteModal from "./modals/DeleteModal";

import { useLocation, useParams } from "react-router-dom";

export default function BlogPost(props){

    const { id } = useParams();
    const location = useLocation();

    return(
        <div className="w-full max-w-[20em] px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 hover:border-gray-300">
            <div className="relative flex justify-between">
            <a href={"/user/"+ props.userId} className="flex items-center space-x-3 inline-block w-fit ">
                <div className="mt-2 w-8 h-8 bg-gray-300 rounded-full hover:ring"></div>
                <div className="font-medium text-gray-500 pt-2 hover:underline">Name Surname</div>
            </a>
                {location.pathname == "/company/my-blog" || location.pathname == "/user/my-blog" ? <DeleteModal/> : <ReportForm />}
                <a href={"/post/edit/" + props.id} className={location.pathname == "/company/my-blog" || location.pathname == "/user/my-blog" ? "hover:bg-sky-200 rounded-full p-2 inline absolute -top-2 right-6" : "hidden"}>
                <Edit /></a>
                </div>
                <a href={"/blog/"+ props.id}>
                    <img className="block py-2 mx-auto rounded-t-lg max-h-[16em]" src="https://placehold.co/500x600" alt="BlogPost image" />
                    <p className="pt-3 tracking-tight text-center text-gray-500 text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula.</p>
                </a>
                    <div className="flex items-center space-x-6 mt-6 mb-2">
                    <div className="space-x-1 flex">
                        <HeartOutline color="#b2b2b2" />
                        <span classNameName="text-gray-500">123</span>
                    </div>
                    <div className="space-x-1 flex">
                        <Comments color="#b2b2b2" />
                    <span classNameName="text-gray-500">123</span>
                    </div>
            </div>
        </div>
    )
}