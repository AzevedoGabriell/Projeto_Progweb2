import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/assets/images/logo-compselects-white.png" 
              alt="Compselects Logo" 
              width={180}
              height={60}
            />
            <p className="mt-4 text-gray-400">
              30 anos publicando excelência em computação
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre-nos" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/publicacoes" className="text-gray-400 hover:text-white">Publicações</Link></li>
              <li><Link href="/autores" className="text-gray-400 hover:text-white">Autores</Link></li>
              <li><Link href="/submissoes" className="text-gray-400 hover:text-white">Submissões</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic text-gray-400">
              <p>Rua da Computação, 123</p>
              <p>São Paulo, SP</p>
              <p className="mt-2">contato@compselects.com.br</p>
              <p>(11) 1234-5678</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Receba nossas novidades por email</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg"
              >
                Assinar
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <SocialIcon platform="facebook" />
              <SocialIcon platform="twitter" />
              <SocialIcon platform="linkedin" />
              <SocialIcon platform="instagram" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Compselects Editora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  return (
    <a href="#" className="text-gray-400 hover:text-white">
      <span className="sr-only">{platform}</span>
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Ícone da rede social */}
      </svg>
    </a>
  );
}