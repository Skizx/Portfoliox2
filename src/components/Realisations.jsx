import homeRealisation from '../datas/homerealisation.json'
import { Link } from 'react-router-dom'
import HomeCard from './HomeCard'

function Realisations() {


    return (
        <>
        <div className="wrapper">
            <div className=''>
                {homeRealisation.map((item, id) => (
                    <div className='h-96' key={id}>
                        <Link to={`//${item.id}`}>
                            <HomeCard background = {item.background} cover={item.cover} title={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Realisations