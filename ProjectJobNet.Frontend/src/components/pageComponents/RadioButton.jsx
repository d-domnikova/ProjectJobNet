export default function RadioButton(props){
    return(
        <div className="flex items-center gap-x-2">
              <input id={props.id} name={props.name} onClick={props.func} type="radio" className="size-4 border-gray-300 text-sky-400 focus:ring-sky-400" />
              <label htmlFor={props.id} className="block text-sm font-semibold text-gray-900">{props.text}</label>
        </div>
    )
}