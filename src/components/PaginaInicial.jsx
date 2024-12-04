import {Link} from 'react-router-dom';
import imagem from '../assets/Clean Campus (3) 1.jpg'


const PaginaInicial = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-azul-unifor">
        <div className="flex flex-col items-center justify-center gap-5 p-8">
            <h1 className='text-white font-medium text-2xl'>Bem vindo ao Clean Campus</h1>
            <div>
                <img className='h-72 rounded-2xl' src={imagem} alt="" />
            </div>
            <div className='bg-white p-6 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center h-auto'>
                <h3 className='font-medium text-lg text-azul-unifor'>Que tipo de usuario voce é?</h3>
                <Link to={"/prestador/login"} className='w-full'>
                <button className='p-3 w-full bg-azul-unifor rounded-xl text-white hover:bg-blue-900'>Sou prestador</button>
                </Link>
                <Link to={"/usuario/login"} className='w-full'>
                <button className='p-3 w-full bg-azul-unifor rounded-xl text-white hover:bg-blue-900'>Sou professor/aluno</button>
                </Link>
              
                

            </div>
        </div>
    </div>
  )
}

export default PaginaInicial

