// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(/* request: NextRequest */) {
  // Lấy danh sách người dùng từ database
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]

  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate body
    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    // Thêm người dùng vào database (mô phỏng)
    const newUser = { id: Date.now(), ...body }

    return NextResponse.json(newUser, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
