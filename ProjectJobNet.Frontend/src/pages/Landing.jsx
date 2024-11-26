import BlogPost from "/src/components/BlogPost";
import SearchBar from "/src/components/pageComponents/SearchBar";
import ServiceLanding from "/src/components/ServiceLanding";
import VacancyLanding from "/src/components/VacancyLanding";

export default function Landing() {
    return (
      <>
        <SearchBar />
        <div className="flex justify-between">
          <Heading text="Вакансії" />
          <ShowAllButton url="/vacancies" />
        </div>
        <div className="flex justify-center px-[5em] pb-12 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <VacancyLanding />
          <VacancyLanding />
          <VacancyLanding />
        </div>
        <div className="flex justify-between">
          <Heading text="Одноразові послуги" />
          <ShowAllButton url="/services" />
        </div>
        <div className="flex justify-center px-[5em] pb-12 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <ServiceLanding />
          <ServiceLanding />
          <ServiceLanding />
        </div>
        <Heading text="Про нас" />
        <p className="px-[6em] pb-12 text-center">
          {" "}
          JobNet - це студентський проєкт. <br />
          Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
          Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: 
          On refusa continuar payar custosi traductores.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, 
          litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica.
        </p>
        <div className="flex justify-between">
          <Heading text="Блог" />
          <ShowAllButton url="/blog" />
        </div>
        <div className="flex justify-center px-[5em] grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </>
    );
}


function ShowAllButton(props){
  return(
    <a href={props.url} className="sm:text-lg font-semibold text-gray-500 hover:underline pr-[7em] pt-10">Переглянути більше
      <div className="inline px-2">
          <svg className="w-3 h-3 rtl:rotate-180 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
      </div>
    </a>
  )
}

function Heading(props){
  return(
    <p className="max-w-2xl lg:text-2xl text-xl px-[5em] py-8 font-semibold">{props.text}</p>
  )
}