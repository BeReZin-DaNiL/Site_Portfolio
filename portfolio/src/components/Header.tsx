"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-black text-white py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Логотип и название */}
        <div className="flex items-center gap-3 font-bold text-xl">
          <Image src="/icons/Logo.svg" alt="Logo" width={32} height={32} />
          <Link href="/" className="tracking-widest text-white text-lg sm:text-xl">PORTFOLIO.</Link>
        </div>

        {/* Бургер-меню для мобильных устройств */}
        <button 
          className="lg:hidden p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Меню */}
        <nav className={`lg:flex-1 lg:flex lg:justify-center transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'fixed inset-0 bg-black/95 z-40 flex items-center justify-center' 
            : 'hidden lg:block'
        }`}>
          <ul className={`flex flex-col lg:flex-row items-center gap-8 text-sm font-medium ${
            isMobileMenuOpen ? 'w-full px-6' : ''
          }`}>
            <li className="relative group w-full lg:w-auto text-center">
              <Link 
                href="/works" 
                className="flex items-center justify-center lg:justify-start gap-1 hover:underline text-lg lg:text-sm py-4 lg:py-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Works <span className="ml-1">▼</span>
              </Link>
            </li>
            <li className="w-full lg:w-auto text-center">
              <Link 
                href="#" 
                className="hover:underline text-lg lg:text-sm py-4 lg:py-0 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="relative group w-full lg:w-auto text-center">
              <button className="flex items-center justify-center lg:justify-start gap-1 hover:underline text-lg lg:text-sm py-4 lg:py-0 w-full">
                Resources <span className="ml-1">▼</span>
              </button>
            </li>
            <li className="relative group w-full lg:w-auto text-center">
              <button className="flex items-center justify-center lg:justify-start gap-1 hover:underline text-lg lg:text-sm py-4 lg:py-0 w-full">
                Pricing <span className="ml-1">▼</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Кнопки справа */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-white text-black rounded px-5 py-1.5 font-medium shadow-sm transition hover:bg-gray-200 cursor-pointer">Sign in</button>
          <button className="text-white rounded-full px-5 py-1.5 font-medium flex items-center gap-2 shadow-sm transition cursor-pointer">
            Create your portfolio.
            <span className="ml-1 text-xl">→</span>
          </button>
        </div>

        {/* Мобильные кнопки */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'fixed bottom-8 left-0 right-0 z-40 flex flex-col gap-4 px-6' 
            : 'hidden'
        }`}>
          <button className="bg-white text-black rounded px-5 py-3 font-medium shadow-sm transition hover:bg-gray-200 cursor-pointer w-full text-lg">
            Sign in
          </button>
          <button className="text-white rounded-full px-5 py-3 font-medium flex items-center justify-center gap-2 shadow-sm transition cursor-pointer w-full text-lg border border-white/20 hover:bg-white/10">
            Create your portfolio.
            <span className="ml-1 text-xl">→</span>
          </button>
        </div>
      </div>
    </header>
  )
} 