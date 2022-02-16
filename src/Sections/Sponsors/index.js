import React from 'react'
import Devfolio from '../../assets/partners/devfolio.png'
import Polygon from '../../assets/partners/polygon.png'
import Tezos from '../../assets/partners/tezos.png'
import Celo from '../../assets/partners/celo.png'
import Filecoin from '../../assets/partners/filecoin.png'

const Sponsors = () => {
  return (
    <div>
      <div className='md:px-8 my-16 sm:my-24 lg:my-32'>
        <h4 className='text-center tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 leading-normal font-montserrat'>
          DDD'22
        </h4>
        <h2 className='text-center text-5xl text-white font-bold mb-12'>
          Sponsors
        </h2>
        <div className='sm:px-4 lg:px-8 '>
          <a href='https://devfolio.co' target="_blank" rel="noopener noreferrer">
            <img className='w-64 my-14 mx-auto width-1/2' src={Devfolio} alt='Devfolio'/>
          </a>

          <a href="https://polygon.technology" target="_blank" rel="noopener noreferrer">
            <img className='w-64 my-10 mx-auto width-1/2' src={Polygon} alt='Polygon'/>
          </a>
          <a href="https://tezos.com" target="_blank" rel="noopener noreferrer">
            <img className='w-64 my-10 mx-auto width-1/2' src={Tezos} alt='Tezos'/>
          </a>
          <a href="https://celo.org" target="_blank" rel="noopener noreferrer">
            <img className='w-64 my-10 mx-auto width-1/2' src={Celo} alt='Celo' />
          </a>
          <a href="https://filecoin.io" target="_blank" rel="noopener noreferrer">
            <img className='w-64 my-10 mx-auto width-1/2' src={Filecoin} alt='Filecoin'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
