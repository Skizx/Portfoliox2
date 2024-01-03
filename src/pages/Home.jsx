/* eslint-disable react/no-unescaped-entities */
import MainTitle from "../components/MainTitle"
import Navbar from "../components/Navbar"
import Realisations from "../components/Realisations"
import SecondTitle from "../components/SecondTitle"

function Home() {

    return (
        <>
        <header className="fixed w-full pl-4 pr-4 z-50">
        <Navbar />
        </header>
        <main>
        <MainTitle />
        <div className="wrapper pb-8">
            <p className="text-center">Je suis un développeur passionée par la création de site dynamique, moderne, accéssible basé sur l'éxpérience de l'utilisateur.</p>
        </div>
        <Realisations />
        <SecondTitle />
        </main>
        </>
    )
}

export default Home