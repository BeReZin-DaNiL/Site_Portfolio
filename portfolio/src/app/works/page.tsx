import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

// Temporary mock data for works
const works = [
  {
    id: 1,
    title: 'Веб-приложение',
    description: 'Современное веб-приложение на React',
    image: '/img/Web_app.png',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Мобильное приложение',
    description: 'iOS приложение для управления задачами',
    image: '/img/Mobile_app.png',
    category: 'Mobile Development',
  },
  // Add more works as needed
]

export default function Works() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Работы</h1>
          <Link
            href="/upload"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
          >
            <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
            Загрузить работу
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500">
                  {work.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {work.title}
                </h3>
                <p className="mt-2 text-gray-500">{work.description}</p>
                <div className="mt-4">
                  <Link
                    href={`/works/${work.id}`}
                    className="text-sm font-medium text-black hover:text-gray-800"
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 