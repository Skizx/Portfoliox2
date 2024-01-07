/* eslint-disable react/no-unescaped-entities */
import MainTitle from "../components/MainTitle"
import Navbar from "../components/Navbar"
import Realisations from "../components/Realisations"
import SecondTitle from "../components/SecondTitle"
import homeRealisation from '../datas/homerealisation.json';
import inProgressRealisation from '../datas/inprogressrealisation.json';

function Home() {

    return (
        <>
        <header className="fixed w-full px-6 z-50">
        <Navbar />
        </header>
        <main>
        <MainTitle />
        <div className="wrapper pb-8 xl:text-lg xl:pb-12 xl:mt-12">
            <p className="text-center">Je suis un développeur passionée par la création de site dynamique, moderne, accéssible basé sur l'éxpérience de l'utilisateur.</p>
        </div>
        <Realisations realisations={homeRealisation} />
        <SecondTitle />
        <div className="wrapper pb-8 xl:text-lg xl:pb-12 xl:mt-12">
            <p className="text-center">Je travail sur le developpement de divers projets, sites web, applications et l'apprentissage de nouveauté.</p>
        </div>
        <Realisations realisations={inProgressRealisation} />
        </main>
        </>
    )
}

export default Home