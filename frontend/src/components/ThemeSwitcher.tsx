import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
        const [theme, setTheme] = useState("light");

        useEffect(()=>{
            const savedTheme = localStorage.getItem('theme') || theme;
            setTheme(savedTheme);
        },[])

  return (
    <div>ThemeSwitcher</div>
  )
}
export default ThemeSwitcher