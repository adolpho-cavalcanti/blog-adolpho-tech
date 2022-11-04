// interface HomeProps {
//   count: number;
// }
import Image from 'next/image';
import AppPreview from '../assets/app-nlw-copa-preview.png';
import logo from '../assets/logo.svg';
import usersAvatarExample from '../assets/users-avatar-example.png';
import iconCheck from '../assets/icon-check.svg';

export default function Home() {

  return (
    <div className="max-w-[1124px] h-screen mt-2 mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logo} alt="NLW Copa" />
        
        <h1 className="mt-10 text-white text-4xl font-bold leading-tight">
          Crie seu próprio bolão da Copa e compartilhe entre amigos!
        </h1>

        <div className="mt-6 flex items-center gap-2">
          <Image src={usersAvatarExample} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-green-500">+12.532</span> pessoas estão usando
          </strong>
        </div>

        <form className="mt-6 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text" 
            required 
            placeholder="Qual o nome do seu bolão" 
          />
          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar as pessoas.</p>

        <div className="mt-6 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.300</span>
              <span>Bolões criados</span>
            </div>
          </div>
          
          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.300</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>
      <Image src={AppPreview} alt="Dois celulares exibindo uma prévia do app NLW Copa" />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count');
//   const data = await response.json();
//   console.log(data, 'data');

//   return {
//     props: {
//       count: data.countPools,
//     }
//   }
// }