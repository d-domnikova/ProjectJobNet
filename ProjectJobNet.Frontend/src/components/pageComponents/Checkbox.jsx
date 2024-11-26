export default function Checkbox(props){
    return(
        <div class="flex items-center mb-3">
            <input id={props.id} type="checkbox" value="" class="w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"/>
            <label for={props.id} class="ms-2 text-sm font-medium text-gray-900">{props.name}</label>
        </div>
    )
}