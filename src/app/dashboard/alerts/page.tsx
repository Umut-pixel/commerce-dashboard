import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  IconAlertTriangle,
  IconAlertCircle,
  IconInfoCircle,
  IconPackage,
  IconPlus,
  IconCheck,
  IconTrendingDown,
} from "@tabler/icons-react"

const alerts = [
  {
    id: 1,
    product: "Samsung Galaxy S24 Ultra",
    sku: "SAM-S24U-256-BLK",
    currentStock: 2,
    minStock: 10,
    status: "critical",
    lastSold: "2 saat önce",
    monthlySales: 45
  },
  {
    id: 2,
    product: "Apple AirPods Pro (2. Nesil)",
    sku: "AIR-PRO2-GEN2",
    currentStock: 5,
    minStock: 15,
    status: "critical",
    lastSold: "5 saat önce",
    monthlySales: 28
  },
  {
    id: 3,
    product: "MacBook Pro 16\" M3 Pro",
    sku: "MBP-16-M3P-1TB",
    currentStock: 8,
    minStock: 12,
    status: "warning",
    lastSold: "1 gün önce",
    monthlySales: 12
  },
  {
    id: 4,
    product: "Sony WH-1000XM5",
    sku: "SONY-WH-1000XM5",
    currentStock: 12,
    minStock: 15,
    status: "warning",
    lastSold: "3 saat önce",
    monthlySales: 32
  },
  {
    id: 5,
    product: "Apple Watch Series 9",
    sku: "AW-S9-45-GPS",
    currentStock: 15,
    minStock: 20,
    status: "warning",
    lastSold: "6 saat önce",
    monthlySales: 24
  },
  {
    id: 6,
    product: "iPad Pro 12.9\" M2",
    sku: "IPAD-PRO-12.9-256",
    currentStock: 18,
    minStock: 20,
    status: "warning",
    lastSold: "2 saat önce",
    monthlySales: 18
  },
]

const stats = [
  { label: "Kritik Stok", value: "2", color: "text-red-500", icon: IconAlertTriangle },
  { label: "Düşük Stok", value: "4", color: "text-yellow-500", icon: IconAlertCircle },
  { label: "Normal Stok", value: "1,248", color: "text-green-500", icon: IconCheck },
  { label: "Toplam Değer", value: "₺2.4M", color: "text-primary", icon: IconPackage },
]

const getStatusBadge = (status: string) => {
  if (status === "critical") {
    return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Kritik</Badge>
  }
  return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Düşük</Badge>
}

const getStatusColor = (status: string) => {
  if (status === "critical") {
    return "text-red-500"
  }
  return "text-yellow-500"
}

export default function AlertsPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Stok Uyarıları</h1>
                    <p className="text-muted-foreground">Düşük stok seviyesine sahip ürünleri yönetin</p>
                  </div>
                  <Button>
                    <IconPlus className="w-4 h-4 mr-2" />
                    Stok Ekle
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {stats.map((stat) => (
                    <Card key={stat.label}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                      </CardHeader>
                      <CardContent>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Alerts List */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Düşük Stok Uyarıları</CardTitle>
                    <CardDescription>Minimum stok seviyesinin altında olan ürünler</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alerts.map((alert) => (
                        <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${alert.status === 'critical' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                              {alert.status === 'critical' ? <IconAlertTriangle /> : <IconAlertCircle />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="font-medium">{alert.product}</div>
                                {getStatusBadge(alert.status)}
                              </div>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                                <span>SKU: {alert.sku}</span>
                                <span>•</span>
                                <span>Son satış: {alert.lastSold}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <IconTrendingDown className="w-3 h-3" />
                                  {alert.monthlySales}/ay
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${getStatusColor(alert.status)}`}>
                                {alert.currentStock}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Min: {alert.minStock}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <IconPlus className="w-4 h-4 mr-2" />
                              Stok Ekle
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Info Card */}
              <div className="px-4 lg:px-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <IconInfoCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">Stok Yönetimi İpuçları</div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Kritik stok seviyesine yaklaşan ürünler için otomatik sipariş oluşturulabilir</p>
                          <p>• Minimum stok seviyelerini ürün özelliklerinden düzenleyebilirsiniz</p>
                          <p>• E-posta bildirimleri için ayarlar bölümünden yapılandırma yapabilirsiniz</p>
                        </div>
                      </div>
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
