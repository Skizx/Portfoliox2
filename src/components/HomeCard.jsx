/* eslint-disable react/prop-types */
function HomeCard({title, cover, background, type}) {


    return (
        <>
        <figure className="border-transparent rounded-[30px] overflow-hidden h-full flex flex-col" style={{ backgroundColor : background}}>
            <div className="flex items-end flex-col pr-5 pt-5">
                <h2 className="tracking-wider">{title}</h2>
                <p className="agbalumo text-[22px]">{type}</p>
            </div>
            <img className="h-full object-fill rounded-tl-3xl transition ease-in-out delay-400 ml-5 mt-10 hover:scale-110 hover:duration-400" src={cover} alt={title} />
        </figure>
        </>
    )
}

export default HomeCard