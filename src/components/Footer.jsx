import { useState } from "react";
import { ThemeContext, themes } from "../context/theme-context";
import { GiHeraldicSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import CV from '../assets/Kévin_Civiletti_CV.pdf';

function Footer() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
        <footer className="relative mt-32">
            <div className="flex wrapper justify-around pb-20">
                <div className="flex flex-col gap-3">
                    <h4 className="agbalumo">Autres</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="https://github.com/Skizx" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/kciviletti/" target="_blank" rel="noreferrer">Linkedin</a></li>
                        <li><a href={CV} download='Civiletti Kévin CV' target="_blank" rel="noreferrer">CV</a></li>
                        <li><a href="mailto:k.civiletti.gj@gmail.com">Email</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="agbalumo">Contact</h4>
                    <ul className="flex flex-col gap-3">
                        <li>Message</li>
                    </ul>
                </div>
            </div>
        <ThemeContext.Consumer>
        {({ changeTheme }) => (
    <div className="flex wrapper w-full justify-between pb-[140px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <button
          key={`sun-${index}`}
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(themes.light);
          }}
        >
          <GiHeraldicSun className="text-xl" />
        </button>
      ))}

      {Array.from({ length: 3 }).map((_, index) => (
        <button
          key={`moon-${index}`}
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(themes.dark);
          }}
        >
          <FaMoon className=" text-4xl" />
        </button>
      ))}

      {Array.from({ length: 3 }).map((_, index) => (
        <button
          key={`sun-${index}`}
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(themes.light);
          }}
        >
          <GiHeraldicSun className="text-xl" />
        </button>
      ))}
    </div>
  )}
        </ThemeContext.Consumer>
        <p className="text-center">© 2024 Kévin Civiletti</p>
        </footer>
        </>
    )
}

export default Footer