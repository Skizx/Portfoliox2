function ProfilCard() {

    return (
        <>
        <div className="wrapper h-96 xl:flex flex-col">
            <div className="h-full">
                <figure className="h-[385px]">
                    <img className="h-full w-full rounded-tl-[5rem] rounded-tr-[5rem] border-transparent xl:w-[384px] xl:rounded-tr-[12rem] xl:rounded-tl-[12rem]" src="/image/stephstylecoiffure.fr.png" alt="" />
                </figure>
            </div>
            <div className=" bg-[#E6B82A] xl:w-[384px]">
                <p className="text-center py-5 px-6">Kévin Civiletti</p>
            </div>
        </div>
        </>
    )
}

export default ProfilCard