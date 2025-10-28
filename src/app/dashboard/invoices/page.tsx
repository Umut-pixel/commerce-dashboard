import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  IconDownload,
  IconSearch,
  IconFileInvoice,
  IconCheck,
  IconX,
  IconClock,
  IconPrinter,
} from "@tabler/icons-react"

const invoices = [
  {
    id: "INV-2024-001",
    customer: "Ahmet Yılmaz",
    amount: "₺2,850.00",
    date: "15 Ocak 2024",
    status: "Paid",
    dueDate: "20 Ocak 2024"
  },
  {
    id: "INV-2024-002",
    customer: "Ayşe Demir",
    amount: "₺1,450.00",
    date: "14 Ocak 2024",
    status: "Pending",
    dueDate: "19 Ocak 2024"
  },
  {
    id: "INV-2024-003",
    customer: "Mehmet Kaya",
    amount: "₺3,200.00",
    date: "13 Ocak 2024",
    status: "Paid",
    dueDate: "18 Ocak 2024"
  },
  {
    id: "INV-2024-004",
    customer: "Fatma Şahin",
    amount: "₺850.00",
    date: "12 Ocak 2024",
    status: "Overdue",
    dueDate: "17 Ocak 2024"
  },
  {
    id: "INV-2024-005",
    customer: "Ali Veli",
    amount: "₺5,100.00",
    date: "11 Ocak 2024",
    status: "Paid",
    dueDate: "16 Ocak 2024"
  },
]

const stats = [
  { label: "Toplam Fatura", value: "₺13,450.00", change: "+12.5%" },
  { label: "Ödenen", value: "₺11,150.00", change: "+8.2%" },
  { label: "Bekleyen", value: "₺1,450.00", change: "-3.1%" },
  { label: "Geciken", value: "₺850.00", change: "+5.7%" },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return <Badge className="bg-green-500/10 text-green-500 border-green-500/20"><IconCheck className="w-3 h-3 mr-1" />Ödendi</Badge>
    case "Pending":
      return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"><IconClock className="w-3 h-3 mr-1" />Bekliyor</Badge>
    case "Overdue":
      return <Badge className="bg-red-500/10 text-red-500 border-red-500/20"><IconX className="w-3 h-3 mr-1" />Geciken</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

export default function InvoicesPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-2">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              {/* Header */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Faturalar</h1>
                    <p className="text-muted-foreground">Fatura oluşturma ve yönetimi</p>
                  </div>
                  <Button>
                    <IconFileInvoice className="w-4 h-4 mr-2" />
                    Yeni Fatura
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {stats.map((stat) => (
                    <Card key={stat.label}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.change} önceki döneme göre</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Fatura ara..." className="pl-9" />
                      </div>
                      <Button variant="outline" size="sm">Filtrele</Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Invoice List */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fatura Listesi</CardTitle>
                    <CardDescription>Son 30 günün faturaları</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Fatura No</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Müşteri</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Tutar</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Tarih</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Vade</th>
                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Durum</th>
                            <th className="text-right p-4 text-sm font-medium text-muted-foreground">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices.map((invoice) => (
                            <tr key={invoice.id} className="border-b hover:bg-accent/50 transition-colors">
                              <td className="p-4">
                                <div className="font-medium">{invoice.id}</div>
                              </td>
                              <td className="p-4">
                                <div className="font-medium">{invoice.customer}</div>
                              </td>
                              <td className="p-4">
                                <div className="font-semibold">{invoice.amount}</div>
                              </td>
                              <td className="p-4 text-sm text-muted-foreground">{invoice.date}</td>
                              <td className="p-4 text-sm text-muted-foreground">{invoice.dueDate}</td>
                              <td className="p-4">
                                {getStatusBadge(invoice.status)}
                              </td>
                              <td className="p-4">
                                <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm">
                                    <IconPrinter className="w-4 h-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <IconDownload className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
