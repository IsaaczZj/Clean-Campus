import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoUnifor from '../assets/logo-unifor.jpg';
import logo2 from '../assets/logo2.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-azul-unifor p-4 flex items-center justify-between relative">
      <div className="flex items-center gap-4">
     
        <Link to="/usuario/home">
          <img src={logoUnifor} alt="Unifor" className="h-12" />
        </Link>
      </div>

      
      <div className="flex-1 flex justify-center mr-16">
        <img src={logo2} alt="Logo 2" className="h-12" />
      </div>

     
      <button onClick={toggleMenu} className="text-white z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-azul-unifor text-white transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          <Link to="/usuario/home" className="text-lg hover:underline">
            Home
          </Link>
          <Link to="/usuario/conta" className="text-lg hover:underline">
            Conta
          </Link>
          <Link to="/" className="text-lg hover:underline">
            Logout
          </Link>
        </div>
      </div>     
    </header>
  );
}
