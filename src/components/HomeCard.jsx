function HomeCard({title, cover, background}) {


    return (
        <>
        <div className="border-transparent rounded-[30px] overflow-hidden h-full" style={{ backgroundColor : background}}>
            <p>{title}</p>
            <img className="h-full object-cover" src={cover} alt={title} />
        </div>
        </>
    )
}

export default HomeCard