import MainLinkButton from "/src/components/pageComponents/MainLinkButton";

export default function NoPage() {
    return (
      <>
        <main className="grid min-h-full place-items-center mx-[4em] -mt-20 pt-24 md:pt-32">
          <div className="text-center">
            <p className="text-2xl font-semibold text-sky-400">404</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
              Сторінка не знайдена
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 md:text-xl/8">
              Схоже, що потрібної вам сторінки не існує або вона була видалена.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <MainLinkButton url="/" text="На головну"/>
            </div>
          </div>
        </main>
      </>
    )
  }
  