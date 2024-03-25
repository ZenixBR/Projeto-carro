import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'

export default function App() {
  return (
    <main className='min-h-svh bg-offwihtebg py-20 px-6 antialiased lg:flex justify-center items-center'>
      <section className='lg:flex'>


        <div className='bg-orange p-12 rounded-t-lg  lg:'>
          <img src={iconSedans} alt="ícone dos carros sedans" className='mb-7' />
          <h2 className='font-shoulders font-bold uppercase text-4xl text-offwhitebg mb-7'>Sedans</h2>
          <p className='font-lexend text-offwhite mb-7'>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
          <a className='font-lexend text-orange bg-offwhitebg block px-10 py-3 w-fit rounded-3xl' href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>


        <div className='bg-green p-12'>
          <img src={iconSuvs} alt="ícone dos carros suvs" className='mb-7'/>
          <h2 className='font-shoulders font-bold uppercase text-4xl text-offwhitebg mb-7'>SUVs</h2>
          <p className='font-lexend text-offwhite mb-7'>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className='font-lexend text-green bg-offwhitebg block px-10 py-3 w-fit rounded-3xl' href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>


        <div className='bg-dark-green p-12 rounded-b-lg'>
          <img src={iconLuxury} alt="ícone dos carros luxury " className='mb-7'/>
          <h2 className='font-shoulders font-bold uppercase text-4xl text-offwhitebg mb-7'>Luxuosos</h2>
          <p className='font-lexend text-offwhite mb-7'>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className='font-lexend text-dark-green bg-offwhitebg block px-10 py-3 w-fit rounded-3xl' href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>


      </section>
    </main>
  )
}