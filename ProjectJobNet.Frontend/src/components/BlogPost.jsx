import HeartOutline from "../icons/HeartOutline";
import Comments from "../icons/Comments";

export default function BlogPost(props){
    return(
        <div className="w-full max-w-[20em] bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-200 hover:border-gray-300">
            <a href={"/blog/"+ props.id}>
            <div className="flex items-center space-x-3">
                <div className="mt-4 ml-5 w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="font-medium text-gray-500 pt-4">Name Surname</div>
            </div>
                <img className="px-5 py-2 mx-auto rounded-t-lg max-h-[16em]" src="https://placehold.co/500x600" alt="BlogPost image" />
                <div className="p-5"> 
                    <p className="tracking-tight text-center text-gray-500 text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula.</p>
                    <div className="flex items-center space-x-6 mt-6">
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
            </a>
        </div>
    )
}