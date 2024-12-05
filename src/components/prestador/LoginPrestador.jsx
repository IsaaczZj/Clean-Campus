import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imagem from "../../assets/Clean Campus (3) 1.jpg";

export const LoginPrestador = () => {
    const [ra, setRa] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data: { acessToken } } = await axios.post("http://localhost:3000/clientes/login", {
                ra,
                senha,
              });    
            localStorage.setItem("token", acessToken);
            navigate("/usuario/home");
        } catch (error) {
            console.error("Erro ao fazer login:", error.response?.data?.message || error.message);
            alert("Erro ao fazer login. Verifique suas credenciais.");
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-azul-unifor">
            <div className="flex flex-col items-center justify-center gap-5 p-8">
                <h1 className="text-white font-medium text-2xl">
                    Bem vindo ao Clean Campus
                </h1>
                <div>
                    <img className="h-60 rounded-2xl" src={imagem} alt="" />
                </div>
                <div className="bg-white px-4 py-2 gap-6 rounded-xl mt-10 flex flex-col items-center justify-center w-full">
                    <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="registro">
                                Registro Acadêmico
                            </label>
                            <input
                                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                                type="text" 
                                id="registro"
                                value={ra}
                                onChange={(e) => setRa(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="password">
                                Senha
                            </label>
                            <input
                                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                                type="password"
                                id="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-sky-800"
                        >
                            Entrar
                        </button>
                    </form>
                    <p>
                        Ainda não tem uma conta?{" "}
                        <a className="text-azul-unifor" href="/prestador/cadastro">
                            Solicite a sua conta
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
