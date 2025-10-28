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
  IconDownload,
  IconFileSpreadsheet,
  IconChartLine,
  IconTrendingUp,
  IconUsers,
  IconShoppingCart,
  IconPackage,
  IconCurrency,
} from "@tabler/icons-react"

const reports = [
  {
    id: 1,
    title: "Satış Raporu - Ocak 2024",
    type: "Satış",
    date: "15 Ocak 2024",
    status: "Hazırlandı",
    size: "2.4 MB"
  },
  {
    id: 2,
    title: "Ürün Performans Analizi",
    type: "Ürün",
    date: "12 Ocak 2024",
    status: "Hazırlandı",
    size: "1.8 MB"
  },
  {
    id: 3,
    title: "Müşteri Davranış Raporu",
    type: "Müşteri",
    date: "10 Ocak 2024",
    status: "İşleniyor",
    size: "-"
  },
  {
    id: 4,
    title: "Envanter Durum Raporu",
    type: "Envanter",
    date: "8 Ocak 2024",
    status: "Hazırlandı",
    size: "892 KB"
  },
  {
    id: 5,
    title: "Finansal Özet - Q4 2023",
    type: "Finans",
    date: "1 Ocak 2024",
    status: "Hazırlandı",
    size: "3.1 MB"
  },
]

const stats = [
  { label: "Toplam Rapor", value: "124", icon: IconFileSpreadsheet, change: "+8" },
  { label: "Bu Ay Satış", value: "₺245K", icon: IconChartLine, change: "+12.5%", positive: true },
  { label: "Ortalama Sipariş", value: "₺892", icon: IconShoppingCart, change: "+5.2%", positive: true },
  { label: "Aktif Müşteriler", value: "1,842", icon: IconUsers, change: "+8.3%", positive: true },
]

const getStatusBadge = (status: string) => {
  if (status === "Hazırlandı") {
    return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Hazır</Badge>
  }
  return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">İşleniyor</Badge>
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Satış":
      return <IconTrendingUp className="w-4 h-4" />
    case "Ürün":
      return <IconPackage className="w-4 h-4" />
    case "Müşteri":
      return <IconUsers className="w-4 h-4" />
    case "Finans":
      return <IconCurrency className="w-4 h-4" />
    default:
      return <IconFileSpreadsheet className="w-4 h-4" />
  }
}

export default function ReportsPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Raporlar</h1>
                    <p className="text-muted-foreground">İşletme raporlarını görüntüleyin ve indirin</p>
                  </div>
                  <Button>
                    <IconFileSpreadsheet className="w-4 h-4 mr-2" />
                    Yeni Rapor Oluştur
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
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className={`text-xs mt-1 flex items-center gap-1 ${stat.positive ? 'text-green-500' : 'text-muted-foreground'}`}>
                          {stat.positive && <IconTrendingUp className="w-3 h-3" />}
                          {stat.change} geçen döneme göre
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Report List */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Son Raporlar</CardTitle>
                    <CardDescription>Oluşturulmuş raporları görüntüleyin ve indirin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reports.map((report) => (
                        <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              {getTypeIcon(report.type)}
                            </div>
                            <div>
                              <div className="font-medium">{report.title}</div>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span>{report.type} Raporu</span>
                                <span>•</span>
                                <span>{report.date}</span>
                                {report.size !== "-" && (
                                  <>
                                    <span>•</span>
                                    <span>{report.size}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(report.status)}
                            {report.status === "Hazırlandı" && (
                              <Button variant="outline" size="sm">
                                <IconDownload className="w-4 h-4 mr-2" />
                                İndir
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hızlı Raporlar</CardTitle>
                    <CardDescription>Yaygın rapor şablonlarını kullanın</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-3">
                      <Button variant="outline" className="h-auto p-4 justify-start">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2 font-medium">
                            <IconChartLine className="w-4 h-4" />
                            Satış Raporu
                          </div>
                          <span className="text-xs text-muted-foreground text-left">Günlük, haftalık, aylık satış verileri</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 justify-start">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2 font-medium">
                            <IconPackage className="w-4 h-4" />
                            Ürün Raporu
                          </div>
                          <span className="text-xs text-muted-foreground text-left">Stok durumu ve ürün performansı</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 justify-start">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2 font-medium">
                            <IconUsers className="w-4 h-4" />
                            Müşteri Raporu
                          </div>
                          <span className="text-xs text-muted-foreground text-left">Müşteri analizi ve segmentasyon</span>
                        </div>
                      </Button>
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
