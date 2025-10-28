import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  IconUsers,
  IconSearch,
  IconMail,
  IconPhone,
  IconShoppingCart
} from "@tabler/icons-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock customers data
const customers = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@email.com",
    phone: "+90 555 123 4567",
    totalOrders: 12,
    totalSpent: 458000,
    lastOrder: "2024-06-30",
    status: "active"
  },
  {
    id: 2,
    name: "Ayşe Demir",
    email: "ayse.demir@email.com",
    phone: "+90 555 234 5678",
    totalOrders: 8,
    totalSpent: 234000,
    lastOrder: "2024-06-30",
    status: "active"
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    email: "mehmet.kaya@email.com",
    phone: "+90 555 345 6789",
    totalOrders: 15,
    totalSpent: 678000,
    lastOrder: "2024-06-29",
    status: "active"
  },
  {
    id: 4,
    name: "Zeynep Öztürk",
    email: "zeynep.ozturk@email.com",
    phone: "+90 555 456 7890",
    totalOrders: 5,
    totalSpent: 89000,
    lastOrder: "2024-06-29",
    status: "active"
  },
]

export default function CustomersPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Header */}
              <div className="px-4 lg:px-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Müşteriler</h1>
                  <p className="text-muted-foreground">
                    Müşteri bilgilerini görüntüleyin ve yönetin
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="px-4 lg:px-6">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Müşteri ara..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Customers Table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Müşteri</TableHead>
                          <TableHead>İletişim</TableHead>
                          <TableHead>Siparişler</TableHead>
                          <TableHead>Toplam Harcama</TableHead>
                          <TableHead>Son Sipariş</TableHead>
                          <TableHead>Durum</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers.map((customer) => (
                          <TableRow key={customer.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                  <IconUsers className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="font-medium">{customer.name}</div>
                                  <div className="text-sm text-muted-foreground">{customer.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <IconMail className="h-3 w-3 text-muted-foreground" />
                                  {customer.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <IconPhone className="h-3 w-3 text-muted-foreground" />
                                  {customer.phone}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <IconShoppingCart className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{customer.totalOrders}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="font-semibold">₺{customer.totalSpent.toLocaleString()}</div>
                            </TableCell>
                            <TableCell>{customer.lastOrder}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {customer.status === "active" && "Aktif"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
