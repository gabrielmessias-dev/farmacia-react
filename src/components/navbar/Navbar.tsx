import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
        bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Farmácia do BAHEA
          </Link>

          <div className="flex gap-4">
            <Link to="/categorias" className="hover:underline">
              Listar Categorias
            </Link>
            <Link to="/cadastrarcategorias" className="hover:underline">
              Cadastrar categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
