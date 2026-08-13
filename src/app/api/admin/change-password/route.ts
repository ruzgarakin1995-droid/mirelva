import { NextResponse } from 'next/server';
import { getAdminCredentials, setAdminCredentials } from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const { currentPassword, newPassword } = await request.json();
    const creds = getAdminCredentials();
    
    // Auth check
    const authCookie = request.headers.get('cookie');
    if (!authCookie || !authCookie.includes('emtech_admin_auth=true')) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    if (currentPassword !== creds.password) {
      return NextResponse.json({ error: 'Mevcut şifre hatalı' }, { status: 400 });
    }
    
    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'Yeni şifre en az 6 karakter olmalıdır' }, { status: 400 });
    }
    
    setAdminCredentials(creds.username, newPassword);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
