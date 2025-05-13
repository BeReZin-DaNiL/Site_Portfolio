import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Логотип и название */}
        <div className="flex items-center gap-3 font-bold text-xl">
          <Image src="/icons/Logo.svg" alt="Logo" width={32} height={32} />
          <span className="tracking-widest text-white text-lg sm:text-xl">PORTFOLIO.</span>
        </div>
        {/* Меню */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li className="relative group">
              <button className="flex items-center gap-1 hover:underline">Works <span className="ml-1">▼</span></button>
            </li>
            <li>
              <Link href="#" className="hover:underline">About Us</Link>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1  hover:underline">Resources <span className="ml-1">▼</span></button>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1  hover:underline">Pricing <span className="ml-1">▼</span></button>
            </li>
          </ul>
        </nav>
        {/* Кнопки справа */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black rounded px-5 py-1.5 font-medium shadow-sm transition hover:bg-gray-200 cursor-pointer">Sign in</button>
          <button className="text-white rounded-full px-5 py-1.5 font-medium flex items-center gap-2 shadow-sm transition cursor-pointer">
            Create your portfolio.
            <span className="ml-1 text-xl">→</span>
          </button>
        </div>
      </div>
    </header>
  )
} 