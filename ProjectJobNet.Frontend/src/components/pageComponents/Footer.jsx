export default function Footer(){
    return(
        <footer className="bg-white rounded-lg w-full mt-16">
        <div className="w-full mx-auto p-4 md:pb-8 pb-12">
            <div className="sm:flex sm:items-center sm:justify-between mx-4 my-6">
                <ul className="flex flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="/about" className="hover:underline me-4 md:me-6">Про нас</a>
                    </li>
                    <li>
                        <a href="/help" className="hover:underline me-4 md:me-6">Допомога</a>
                    </li>
                    <li>
                        <a href="/feedback" className="hover:underline me-4 md:me-6">Зворотній зв'язок</a>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="/terms-of-service" className="hover:underline me-4 md:me-6">Terms of Service</a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <hr className="my-4 mx-2 border-gray-400 sm:mx-autolg:my-8" />
            <span className="block text-gray-500 mx-4">© 2024 <a href="/" className="hover:underline">JobNet</a>. All Rights Reserved.</span>
        </div>
    </footer>
    )
}