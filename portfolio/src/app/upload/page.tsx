'use client'

import { useState } from 'react'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function Upload() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      // Redirect to works page on success
      router.push('/works')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Загрузить работу</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Название проекта
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Введите название вашего проекта"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Категория
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              >
                <option value="">Выберите категорию</option>
                <option value="web">Веб-разработка</option>
                <option value="mobile">Мобильная разработка</option>
                <option value="design">Дизайн</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Описание
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Опишите ваш проект"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Изображения проекта
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-800 focus-within:outline-none"
                    >
                      <span>Загрузить файл</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">или перетащите</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF до 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                Ссылка на проект
              </label>
              <input
                type="url"
                name="link"
                id="link"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="https://"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Загрузка...' : 'Опубликовать'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 