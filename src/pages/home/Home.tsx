import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias"

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className='container grid grid-cols-2 text-red-600'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Farmácia do BAHEA
            </h2>
            <p className='text-xl text-indigo-900'>
              Adquira com antecedência seu kit anti-stress e muito mais para poder assistir o jogo da seleção baiana!
            </p>
  
          </div>
  
          <div className="flex justify-center ">
            <img 
              src="https://i.imgur.com/9VROVi9.png" 
              alt="Imagem Página Home" 
              className='w-2/3' 
            />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  )
}

export default Home