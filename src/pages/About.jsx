import MainTitle from "../components/MainTitle";
import Navbar from "../components/Navbar";
import ProfilCard from "../components/ProfilCard";
import SkillVignet from "../components/SkillVignet";
import Footer from "../components/Footer";

function About() {

    return (
        <>
        <header className="fixed w-full px-6 z-50">
        <Navbar />
        </header>
        <main>
        <MainTitle  title= "I'm Kévin" secondTitle="And more."/>
        <div className=" md:flex md:items-start xl:mb-10 wrapper">
            <ProfilCard />
            <div className="my-10">
                <h2 className="agbalumo text-4xl md:mb-10 md:text-5xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                    <p className="mt-4 text-lg text-[#E6B82A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse doloremque id minima quidem excepturi atque nisi suscipit ipsam rem quisquam modi itaque ea provident vero totam, dolor molestias commodi!</p>
                    <p className="mt-4 text-lg text-[#E6B82A]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis cum dolore sequi in laboriosam ducimus molestiae voluptatem nostrum ad tempore veniam, quaerat maxime facere fugit id assumenda placeat soluta!</p>
            </div>
        </div>
        <SkillVignet />
        <div className="wrapper my-10 text-[#E6B82A]">
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur blanditiis tempore fugiat quos vitae laboriosam minima doloremque consequuntur ratione delectus dolores labore nostrum inventore, itaque hic minus molestiae explicabo?</p>
            <p className="mt-4 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eius incidunt omnis voluptatum atque adipisci necessitatibus, non voluptatem molestias harum placeat ducimus suscipit, pariatur amet dignissimos. Nostrum omnis ipsam architecto.</p>
        </div>
        <img className=" object-cover h-[550px] w-full" src="/image/skizxbooki.netlify.app_.png" alt="Obiwan & Lou" />
        </main>
        <Footer />
        </>
    )
}

export default About