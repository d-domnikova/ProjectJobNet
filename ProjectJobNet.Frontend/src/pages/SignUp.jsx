import FormField from "../components/pageComponents/FormField";

export default function SignUp(){
    return(
        <>
            <a href="#" className="absolute top-24 right-0 font-bold text-gray-500 hover:underline pt-4 pr-[4em] md:pr-[5em]">Зареєструватися як роботодавець/шукач роботи</a>
            <form className="md:mx-[5em] mx-[4em] mt-8">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <FormField name="Ім'я" id="first_name" type="text" />
                    <FormField name="Прізвище" id="last_name" type="text"/>
                    <FormField name="Назва компанії" id="company_name" type="text" />
                    <FormField name="Реєстраційний номер" id="numbet" type="text"/>
                </div>
                <FormField name="По-батькові" id="middle_name" type="text" className="mb-6"/>
                <FormField name="Власник" id="owner" type="text" className="mb-6"/>
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
        </>
    )
}