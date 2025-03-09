import '../index.css'
import { Settings,Bell,Menu } from 'lucide-react';
import logo from "../assets/logo.png"
import profile from "../assets/profilePic.png"
import '../styles/styles.css'
const Header = () => {
  return (
    <>
    <header className="flex items-center justify-around p-4 bg-white shadow-sm">  
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 w-10" />
      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="/">
            <Bell color="#38b6ff" size={28} />
        </a>
        <a href="/about" className="text-sm font-medium hover:text-primary">
            <Settings color="#38b6ff" size={28}/>
        </a>
        <img src={profile} alt="Logo" className="h-6 w-6 rounded-4xl" />
        <a href="/services" className="font-medium text-[#38b6ff] roboto-300 ">
          Naofel K.
        </a>
        <Menu color="black" size={28} />
      </nav>
    </header>
    </>
  )
}

export default Header
