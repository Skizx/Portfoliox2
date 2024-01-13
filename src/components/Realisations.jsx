/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import HomeCard from './HomeCard'

function Realisations({ realisations }) {


    return (
        <>
        <div className="wrapper xl:flex flex-row flex-wrap text-[#230B00]">
            <div className='mt-3 flex flex-col gap-20 xl:flex-row flex-wrap justify-center'>
                {realisations.map((item, id) => (
                    <div className='flex flex-row flex-wrap xl:basis-[45%]' key={id}>
                        <Link to={item.site} target='_blank'>
                            <HomeCard background = {item.background} cover={item.cover} title={item.title} type={item.type} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Realisations