/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle"
import Navbar from "../components/Navbar"
import Realisations from "../components/Realisations"
import SecondTitle from "../components/SecondTitle"
import homeRealisation from '../datas/homerealisation.json';
import inProgressRealisation from '../datas/inprogressrealisation.json';

function Play() {

    return (
        <>
        <header className="fixed w-full px-6 z-50">
        <Navbar />
        </header>
        <main>
        <MainTitle title="All my" secondTitle="Work." />
        <div className="wrapper text-[#230B00] pb-8 xl:text-lg xl:pb-12 xl:mt-12">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quibusdam necessitatibus esse sequi culpa dicta laudantium explicabo animi enim fuga commodi incidunt consectetur natus, temporibus itaque nam unde. Quo, unde.</p>
        </div>
        <Realisations realisations={homeRealisation} />
        <SecondTitle />
        <div className="wrapper text-[#230B00] pb-8 xl:text-lg xl:pb-12 xl:mt-12">
            <p className="text-center">Je travail sur le developpement de divers projets, sites web, applications et l'apprentissage de nouveauté.</p>
        </div>
        <Realisations realisations={inProgressRealisation} />
        </main>
        <Footer />
        </>
    )
}

export default Play