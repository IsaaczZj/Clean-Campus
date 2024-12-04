import imagem from "../../assets/Clean Campus (3) 1.jpg";

export const FormPrestador = () => {
  return (
    <div className="w-screen min-h-screen overflow-auto bg-azul-unifor">
      <div className="flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-white font-medium text-2xl text-center md:text-3xl">
          Bem-vindo ao Clean Campus
        </h1>
        <div>
          <img className="h-60 rounded-2xl w-full object-cover" src={imagem} alt="Imagem de boas-vindas" />
        </div>
        <div className="bg-white px-4 py-6 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center w-full max-w-lg">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                R.A
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Senha
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="tipo-servico">
                Tipo de Serviço
              </label>
              <select
                id="tipo-servico"
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
              >
                <option value="limpeza">Limpeza</option>
                <option value="manutencao_equipamentos">Manutenção de Equipamentos</option>
                <option value="problemas_eletricos">Problemas Elétricos</option>
                <option value="climatizacao">Climatização</option>
              </select>
            </div>
            <button className="p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-sky-800">
              Cadastrar
            </button>
          </form>
          <p className="text-center">
            Já tem uma conta? <a className="text-azul-unifor" href="">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
