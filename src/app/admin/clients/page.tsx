import { getCustomers } from '../actions/customers'
import { Plus, User, Mail, Phone, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

export default async function CustomersPage() {
  const clientId = "demo-client-id"; // Demo client ID for now
  const customers = await getCustomers(clientId)

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Müşteriler</h2>
          <p className="mt-1 text-sm text-white/40">İşletmenize kayıtlı olan tüm son kullanıcıları, hastaları veya konukları yönetin.</p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" />
          Yeni Müşteri Ekle
        </button>
      </div>
      
      <div className="bg-[#111111] rounded-2xl border border-white/5 overflow-hidden">
        {customers.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5">
              <User className="w-8 h-8 text-white/40" />
            </div>
            <p className="mb-2 text-white font-medium">Henüz kayıtlı bir müşteriniz yok.</p>
            <p className="text-sm text-white/40 max-w-sm">
              Müşterileriniz sisteminize kayıt oldukça veya siz manuel olarak ekledikçe burada listelenecektir.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar pb-2">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#151515] text-white/40 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium">Müşteri Adı</th>
                  <th className="px-6 py-4 font-medium">İletişim</th>
                  <th className="px-6 py-4 font-medium">Rol</th>
                  <th className="px-6 py-4 font-medium">Kayıt Tarihi</th>
                  <th className="px-6 py-4 font-medium text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {customers.map(customer => (
                  <tr key={customer.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white/60 font-bold">
                        {customer.name ? customer.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      {customer.name || 'İsimsiz Müşteri'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-2 text-white/80">
                          <Mail className="w-3.5 h-3.5 text-white/40" />
                          {customer.email || 'Email yok'}
                        </span>
                        {/* If phone exists in schema, we could display it here. Assuming we only have email for now. */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 capitalize">
                        Müşteri
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/40">
                      {customer.createdAt.toLocaleDateString('tr-TR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
