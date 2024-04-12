import Image from 'next/image';

export default function Home() {
  return (
    <div className='pb-6 bg-red-900/10'>

      <div className="relative text-center text-white">
        <Image src="/images/ENRAGED_HOME.png" alt="Game Logo" layout="responsive" width={1500} height={800} objectFit="cover" />
        <div className="absolute md:space-x-40 transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">
          <a href="https://discord.gg/dewJBrpAgH" target='blank' className="px-4 py-2 font-bold text-white rounded-md bg-red-600/80 hover:bg-red-700">Join Discord</a>
          <a href="https://twitter.com/game_enraged" target='blank' className="px-4 py-2 font-bold text-white rounded-md bg-red-600/80 hover:bg-red-700">Join Twitter</a>
        </div>
      </div>

      <div className="max-w-4xl px-4 mx-auto md:max-w-[1200px] sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-center justify-around p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="order-2 w-full p-4 md:w-1/2 md:order-1">
            <Image src="/images/banner.jpg" alt="Another Game Image" width={500} height={300} className='rounded-lg' />
          </div>
          <div className="order-1 w-full p-4 border border-gray-100 rounded-md bg:-red-600 md:w-1/2 lg:px-12 md:order-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
            <h2 className='pb-4 text-2xl md:pb-8'>Repoussez les limites</h2>
            <p>Plongez au cœur de l'action avec ENRAGED, le dernier cri en matière de FPS. Préparez-vous à une expérience palpitante où chaque décision peut faire la différence entre la victoire et la défaite.</p>
            <button className="px-4 py-2 mt-12 font-bold text-white rounded bg-red-600/80 hover:bg-red-700">Commencer à jouer</button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">

          <div className="w-full p-4 bg-red-600 border border-gray-100 rounded-md md:w-1/2 lg:px-12 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
            <h2 className='pb-4 text-2xl md:pb-8'>Vos agents</h2>
            <p>Outre vos armes, le choix d'un agent est crucial, car leurs compétences polyvalentes et dangereuses vous accompagnent dans toutes les situations. Chaque agent possède son propre ensemble de compétences, ce qui garantit que chacun de vos moments forts sera unique et mémorable.</p>
          </div>
          <div className="w-1/3 p-4 md:w-[30%]">
            <Image src="/images/preview-1.png" alt="Game Image" width={829} height={1451} />
          </div>
        </div>

        <div className="p-4 my-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="mb-8 text-2xl text-center">Roadmap</h2>
          <ul className="p-2 list-disc list-inside bg-red-600 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
            <li>Étape 1: Développement du jeu</li>
            <li>Étape 2: Beta Test</li>
            <li>Étape 3: Lancement officiel</li>
          </ul>
        </div>

        <div className="p-4 mt-8 bg-red-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="mb-8 text-2xl text-center">Crédits</h2>
          <p className="p-2 text-center bg-red-600 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">Une liste de tous ceux qui ont contribué au jeu.</p>
        </div>
      </div>
    </div>
  );
}
