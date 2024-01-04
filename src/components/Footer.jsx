import { useState } from "react";
import { ThemeContext, themes } from "../context/theme-context";
import { GiHeraldicSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";

function Footer() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
        <footer className=" pt-10">
            <div className="flex wrapper justify-around pb-20">
                <div className="flex flex-col gap-3">
                    <h4 className="agbalumo">Autres</h4>
                    <ul className="flex flex-col gap-3">
                        <li>Github</li>
                        <li>Linkedin</li>
                        <li>CV</li>
                        <li>Email</li>
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
        </footer>
        </>
    )
}

export default Footer