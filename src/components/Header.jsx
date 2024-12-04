// components/Header.jsx
import logoUnifor from '../assets/logo-unifor.jpg'; // Importando a logo da Unifor
import logo2 from '../assets/logo2.jpg'; // Importando a segunda logo

export default function Header() {
  return (
    <header className="bg-azul-unifor p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Logo da Unifor */}
        <img src={logoUnifor} alt="Unifor" className="h-12" /> {/* Aumentando a altura da logo da Unifor */}
      </div>

      {/* Logo 2 Centralizada */}
      <div className="flex-1 flex justify-center mr-16">
        <img src={logo2} alt="Logo 2" className="h-12" /> {/* Aumentando a altura da logo 2 */}
      </div>

      <button className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
}
