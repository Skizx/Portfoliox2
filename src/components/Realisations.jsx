import homeRealisation from '../datas/homerealisation.json'
import { Link } from 'react-router-dom'
import HomeCard from './HomeCard'

function Realisations() {


    return (
        <>
        <div className="wrapper">
            <div className='mt-3 flex flex-col gap-20'>
                {homeRealisation.map((item, id) => (
                    <div className='h-80' key={id}>
                        <Link to={`//${item.id}`}>
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