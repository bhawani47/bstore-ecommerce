import { useTheme } from "../../app/context/ThemeContext"

const Navbar = () => {

    const {toggleTheme} = useTheme()
  return (
    <nav className="w-full flex justify-between items-center px-10 h-14 bg-surface">
        <div>Logo</div>
        <div>Menu</div>
        <div>
            <button
            onClick={toggleTheme}
            >
                
            </button>
        </div>
    </nav>
  )
}
export default Navbar