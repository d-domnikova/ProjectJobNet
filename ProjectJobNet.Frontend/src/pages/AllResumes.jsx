import Resume from '../components/Resume';
import Pagination from '../components/pageComponents/Pagination';
import SearchBar from "/src/components/pageComponents/SearchBar";
import SortBar from "/src/components/pageComponents/SortBar";
import FormField from "/src/components/pageComponents/FormField";
import Checkbox from '../components/pageComponents/Checkbox';
import MobileSort from "../components/modals/MobileSort";
import MobileFilter from '../components/modals/MobileFilter';

export default function AllVacancies(){
    return (
        <>
            <SearchBar />
            <div className="mx-[5em] flex justify-between mb-3">
                <p className="max-w-2xl lg:text-2xl text-xl md:ml-[12em] xl:ml-[20em] py-3 md:py-6 font-semibold">Перегляд резюме</p>
                <div className="flex md:hidden space-x-1">
                    <MobileSort />
                    <MobileFilter />
                </div>
                <div className="hidden md:flex py-6 xl:pr-16">
                    <SortBar />
                </div>
            </div>
            <div className="mx-[5em] flex justify-between">
            <div className="hidden md:flex lg:pl-[2em] xl:pl-[8em] overflow-y-auto">
                <form>
                <p className="max-w-2xl text-lg py-4 font-semibold">Категорія</p>
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <p className="max-w-2xl text-lg py-4 font-semibold">Місто</p>
                    <Checkbox id="dnipro" name="Дніпро"/>
                    <Checkbox id="kyiv" name="Київ"/>
                    <Checkbox id="lviv" name="Львів"/>
                    <Checkbox id="poltava" name="Полтава"/>
                    <Checkbox id="chernivtsi" name="Чернівці"/>
                    <Checkbox id="kharkiv" name="Харків"/>
                <button type="submit" className="mt-6 text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Застосувати фільтри</button>
                </form>
            </div>  
            <div className="grid grid-cols-1 gap-6 justify-right md:basis-2/3">
                <Resume />
                <Resume />
                <Resume />
                <Resume />
            </div>  
            </div>
            <div className="m-auto flex justify-between">
            <Pagination />
            </div>
        </>
    )
}