import iconSuvs from '../assets/icon-suvs.svg'
export default function Suvs() {
    return (
        <div className='bg-green p-12'>
          <img src={iconSuvs} alt="ícone dos carros suvs" className='mb-7'/>
          <h2 className='font-shoulders font-bold uppercase text-4xl text-offwhitebg mb-7'>SUVs</h2>
          <p className='font-lexend text-offwhite mb-7 lg:mb-20'>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className='font-lexend text-green bg-offwhitebg block px-10 py-3 w-fit rounded-3xl border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg' href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>
    );
}