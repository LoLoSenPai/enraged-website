import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative" style={{ backgroundImage: 'url(/images/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="relative text-center text-white">
        <Image src="/images/ENRAGED_1.png" alt="Game Logo" layout="responsive" width={1500} height={800} objectFit="cover" />
        <div className="absolute md:space-x-20 transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">
          <a href="https://discord.gg/dewJBrpAgH" target='blank' className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Join Discord</a>
          <a href="https://twitter.com/game_enraged" target='blank' className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Join Twitter</a>
        </div>
      </div>

      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap items-center justify-around p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="w-full p-4 bg-red-600 border border-gray-100 rounded-md md:w-1/2 lg:px-12 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
            <p>Voici du texte à propos du jeu. Expliquez ce qui rend votre jeu unique et pourquoi les gens devraient s'y intéresser.</p>
          </div>
          <div className="w-1/3 p-4 md:w-[30%]">
            <Image src="/images/preview-1.png" alt="Game Image" width={829} height={1451} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="order-2 w-full p-4 md:w-1/2 md:order-1">
            <Image src="/images/banner.jpg" alt="Another Game Image" width={500} height={300} className='rounded-lg' />
          </div>
          <div className="order-1 w-full p-4 bg-red-600 border border-gray-100 rounded-md md:w-1/2 lg:px-12 md:order-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
            <p>Plus d'informations sur le jeu, peut-être sur le gameplay ou les caractéristiques spéciales.</p>
          </div>
        </div>

        <div className="p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="mb-4 text-2xl text-center">Roadmap</h2>
          <ul className="p-2 list-disc list-inside bg-red-600 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
            <li>Étape 1: Développement du jeu</li>
            <li>Étape 2: Beta Test</li>
            <li>Étape 3: Lancement officiel</li>
          </ul>
        </div>

        <div className="p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="mb-4 text-2xl text-center">Crédits</h2>
          <p className="p-2 text-center bg-red-600 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">Une liste de tous ceux qui ont contribué au jeu.</p>
        </div>
      </div>
    </div>
  );
}
