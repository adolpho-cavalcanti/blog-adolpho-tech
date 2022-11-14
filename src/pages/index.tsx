import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import iconCheck from '../assets/icon-check.svg';
import logo from '../assets/logo-adolpho.png';
import facebookIcon from '../assets/social-icons/facebook.svg';
import githubIcon from '../assets/social-icons/github.svg';
import linkedinIcon from '../assets/social-icons/linkedin.svg';
import mailIcon from '../assets/social-icons/mail.svg';
import youtubeIcon from '../assets/social-icons/youtube.svg';
import perfilAdolpho from '../assets/software-developer.jpg';

export default function Home() {

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/newsletter', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e: any) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mt-2 mx-auto flex max-md:flex-col items-center gap-28">

      <nav className="mb-4 max-md:mx-4 flex flex-col items-center">
        <header className="w-full flex py-6 gap-2 items-center justify-center">
          <a className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="#home">Home</a>
          <a className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="#news">Blog</a>
          <a className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="#contact">Contato</a>
          <a className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="#about">Projetos</a>
        </header>
        <Image src={perfilAdolpho} alt="Foto de Perfil do Adolpho Cavalcanti" className="shadow-2xl shadow-gray-600" />
      </nav>

      <main className="max-md:mx-4">
        <Image src={logo} alt="Logo do site Adolpho Cavalcanti" />
        
        <h1 className="mt-10 text-white text-2xl font-bold leading-tight">
          Engenheiro de Software (UTFPR). Apaixonado por programação!
        </h1>

        <p className="mt-5 text-white font-bold leading-tight">
          Node.js, React.js, Next.js, Nest.js, React Native, Docker, CI/CD, RabbitMQ, Mysql, Mongo...
        </p>

        <div className="mt-6 flex items-center gap-2 bg-blue-300 py-3 px-3 justify-around rounded">
          <div className='flex items-center gap-2'>
            <Image src={facebookIcon} alt="imagem com link para minha conta do Facebook" />
            <Image src={githubIcon} alt="imagem com link para minha conta do Github" />
            <Image src={mailIcon} alt="imagem com link para minha conta do E-mail" />
            <Image src={youtubeIcon} alt="imagem com link para minha conta do Youtube" />
            <Image src={linkedinIcon} alt="imagem com link para minha conta do Linkedin" />
          </div>
          <span className="text-xl text-gray-900 font-bold">
            Redes Sociais
          </span>
        </div>

        <form onSubmit={subscribe} className="mt-6 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-white"
            type="email" 
            required 
            placeholder="Informe o seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="bg-blue-300 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-blue-400"
            type="submit"
          >
            Assinar
          </button>
        </form>

        {state === 'Error' && (
          <div className="mt-4 pt-2 pb-2 flex items-center justify-center">
            <span className="text-red-500 mt-4">{errorMsg}</span>
          </div>
        )}
        {state === 'Success' && (
          <div className="mt-4 pt-2 pb-2 flex items-center justify-center">
            <span className="text-green-500 mt-4">Maravilha, você foi inscrito!</span>
          </div>
        )}

        <div className="mt-6 mb-16 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span><strong className="text-xl">+5 </strong> Posts no Blog, já parou pra pensar que o que você procura pode está aqui!</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export const getServerSideProps = async () => {

  

  return {
    props: {
      
    }
  }
}