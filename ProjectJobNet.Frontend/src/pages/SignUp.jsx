import { useParams } from "react-router-dom";
import FormField from "../components/pageComponents/FormField";

export default function SignUp(){

    const { role } = useParams();

    return(
        <>
            <a href={role == "user" ? "/signup/company" : "/signup/user"} className="absolute top-24 right-0 font-bold text-gray-500 hover:underline pt-4 pr-[4em] md:pr-[5em]">Зареєструватися як {role == "user" ? "роботодавець >" : "шукач роботи >"}</a>
            <div className="bg-white mx-auto mt-4 py-4 w-9/12 md:w-8/12 border rounded-3xl shadow">
            <form className="md:mx-[3em] mx-[2em] mt-8 space-y-4">
            <h1 className="font-medium text-xl pb-2">Реєстрація</h1>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {role == "user" 
                    ? <FormField name="Ім'я" id="first_name" type="text" />
                    : <FormField name="Назва компанії" id="company_name" type="text" />}
                    {role == "user" 
                    ? <FormField name="Прізвище" id="last_name" type="text"/>
                    : <FormField name="Реєстраційний номер" id="number" type="text"/>}
                </div>
                {role == "user" 
                    ? <FormField name="По-батькові" id="middle_name" type="text" className="mb-6"/>
                    : <FormField name="Власник" id="owner" type="text" className="mb-6"/>}

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <FormField name="Місто" id="city" type="text"/>
                    <FormField name="Область" id="region" type="text"/>
                    <FormField name="Електронна пошта" id="email" type="email"/>
                    <FormField name="Номер телефону" id="phone" type="tel"/>
                </div>
                <FormField name="Логін" id="login" type="text" className="mb-6"/>
                <FormField name="Пароль" id="password" type="password" placeholder="•••••••••" className="mb-6"/>
                <FormField name="Підтвердіть пароль" id="confirm_password" placeholder="•••••••••" type="password" className="mb-6"/>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300" required />
                    </div>
                    <label for="remember" className="ms-2 font-medium text-gray-900">Я погоджуюсь з <a href="#" className="text-sky-500 hover:underline">умовами використання</a>.</label>
                </div>
                <button type="submit" className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Зареєструватися</button>
            
            </form>
        </div>
        </>
    )
}