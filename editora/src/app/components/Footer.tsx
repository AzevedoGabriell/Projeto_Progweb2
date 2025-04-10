import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/logo.png" 
              alt="Compselects Logo" 
              width={180}
              height={180}
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
              <p>Campina Grande, PB</p>
              <p className="mt-2">contato@compselects.com.br</p>
              <p>(83) 99999-9999</p>
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
              <div className="flex flex-row items-center gap-8 pt-12">
                <a href="https://facebook.com/seulink" aria-label="Facebook">
                  <Facebook size={24} className="text-gray-300 hover:text-blue-500" />
                </a>
                <a href="https://twitter.com/seulink" aria-label="Twitter">
                  <Twitter size={24} className="text-gray-300 hover:text-blue-400" />
                </a>
                <a href="https://linkedin.com/in/seulink" aria-label="LinkedIn">
                  <Linkedin size={24} className="text-gray-300 hover:text-blue-600" />
                </a>
                <a href="https://instagram.com/seulink" aria-label="Instagram">
                  <Instagram size={24} className="text-gray-300 hover:text-pink-500" />
                </a>
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