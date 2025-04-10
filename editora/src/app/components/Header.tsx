import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Compselects Logo" 
              width={180}
              height={180}
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/sobre-nos">Sobre Nós</NavLink>
            <NavLink href="/publicacoes">Publicações</NavLink>
            <NavLink href="/autores">Autores</NavLink>
            <NavLink href="/submissoes">Submissões</NavLink>
            <NavLink href="/eventos">Eventos</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
      {children}
    </Link>
  );
}