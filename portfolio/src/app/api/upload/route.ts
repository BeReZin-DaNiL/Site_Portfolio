import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title')
    const category = formData.get('category')
    const description = formData.get('description')
    const link = formData.get('link')
    const files = formData.getAll('file-upload')

    // TODO: Add file upload logic here
    // For now, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Work uploaded successfully',
      data: {
        title,
        category,
        description,
        link,
        files: files.map((file: any) => file.name),
      },
    })
  } catch (error) {
    console.error('Error uploading work:', error)
    return NextResponse.json(
      { success: false, message: 'Error uploading work' },
      { status: 500 }
    )
  }
} 