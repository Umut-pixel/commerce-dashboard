import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  IconTrendingUp,
  IconTrendingDown,
  IconShoppingCart,
  IconPackage,
  IconCurrencyDollar,
  IconBox,
  IconShoppingBag,
  IconInfoCircle
} from "@tabler/icons-react"

const quickStats = [
  {
    title: "Toplam Satış",
    value: "₺124.5K",
    change: "-94.75%",
    trend: "down",
    icon: IconCurrencyDollar,
    color: "text-green-500",
  },
  {
    title: "Net Satışlar",
    value: "₺120.8K",
    change: "-94.75%",
    trend: "down",
    icon: IconShoppingCart,
    color: "text-blue-500",
  },
  {
    title: "Sipariş Sayısı",
    value: "48",
    change: "-44.44%",
    trend: "down",
    icon: IconShoppingBag,
    color: "text-purple-500",
  },
  {
    title: "İadeler",
    value: "₺3.7K",
    change: "+0%",
    trend: "neutral",
    icon: IconBox,
    color: "text-orange-500",
  }
]

const bestSellingProducts = [
  {
    name: "Samsung Galaxy S24 Ultra",
    image: "/placeholder-product.jpg",
    variant: "256GB, Siyah",
    sales: "₺156,000",
    quantity: 12,
    change: "-30.75%"
  },
  {
    name: "Apple iPhone 15 Pro Max",
    image: "/placeholder-product.jpg",
    variant: "512GB, Doğal Titanyum",
    sales: "₺139,998",
    quantity: 8,
    change: "-15.20%"
  },
  {
    name: "MacBook Pro 16″ M3 Pro",
    image: "/placeholder-product.jpg",
    variant: "M3 Pro, 36GB, 1TB SSD",
    sales: "₺359,960",
    quantity: 4,
    change: "+12.45%"
  }
]

const conversionFunnel = [
  { label: "Toplam Ziyaretçi", value: 1842, percentage: "100%", change: "-72.50%", trend: "down" },
  { label: "Oluşturulan Sepet", value: 456, percentage: "24.77%", change: "-57.14%", trend: "down" },
  { label: "Ödemeye Ulaşanlar", value: 342, percentage: "18.57%", change: "-50.00%", trend: "down" },
  { label: "Alışverişi Tamamlayanlar", value: 248, percentage: "13.46%", change: "-44.44%", trend: "down" },
]

export default function Page() {
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
              
              {/* Date Filter Header */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline">Hepsi</Badge>
                  <Badge variant="outline">TRY</Badge>
                  <Button variant="ghost" size="sm">Bugün</Button>
                  <Button variant="ghost" size="sm">Dün</Button>
                  <Button variant="default" size="sm">Bu Hafta</Button>
                  <Button variant="ghost" size="sm">Bu Ay</Button>
                  <Button variant="ghost" size="sm">Bu Yıl</Button>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Tarih Seç
                  </Button>
                </div>
              </div>

              {/* General Summary Section */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold">Genel Özet</h1>
                    <p className="text-sm text-muted-foreground">Geçen haftaya göre</p>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  {quickStats.map((stat) => (
                    <Card key={stat.title}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <IconInfoCircle className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">
                          {stat.trend === "down" ? (
                            <span className="flex items-center gap-1 text-red-500">
                              <IconTrendingDown className="h-3 w-3" />
                              {stat.change}
                            </span>
                          ) : stat.trend === "up" ? (
                            <span className="flex items-center gap-1 text-green-500">
                              <IconTrendingUp className="h-3 w-3" />
                              {stat.change}
                            </span>
                          ) : (
                            <span>{stat.change}</span>
                          )}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Main Grid - 2 Column Layout */}
                <div className="grid gap-4 md:grid-cols-3">
                  
                  {/* Left Column - Sales Chart (2/3 width) */}
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Satış Grafiği</CardTitle>
                        <CardDescription>Bu hafta vs Geçen hafta</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartAreaInteractive />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Column - Two Cards (1/3 width) */}
                  <div className="space-y-4">
                    {/* Live Visitors */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Anlık Ziyaretçi Sayısı</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="text-3xl font-bold">32</div>
                          <span className="text-sm text-muted-foreground">Canlı</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Conversion Funnel */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Dönüşüm Hunisi</CardTitle>
                        <CardDescription className="text-xs">Geçen haftaya göre</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {conversionFunnel.map((item, idx) => (
                            <div key={idx}>
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-muted-foreground">{item.label}</span>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">{item.value.toLocaleString()}</span>
                                  {item.percentage && (
                                    <span className="text-xs text-muted-foreground">({item.percentage})</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary" 
                                    style={{ width: item.percentage }}
                                  ></div>
                                </div>
                                {item.change && (
                                  <span className={item.trend === "down" ? "text-red-500" : "text-green-500"}>
                                    {item.change}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Bottom Row - Best Sellers */}
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>En Çok Satanlar</CardTitle>
                            <CardDescription>Geçen haftaya göre</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">Ürünler</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {bestSellingProducts.map((product, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                                <IconPackage className="h-8 w-8 text-muted-foreground" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-muted-foreground">{product.variant}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{product.sales}</div>
                                <div className="text-sm text-muted-foreground">{product.quantity} adet</div>
                              </div>
                              <div className="text-right">
                                <span className="text-sm text-red-500">{product.change}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Traffic Sources */}
                  <div className="md:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>Trafik Kaynakları</CardTitle>
                        <CardDescription>Geçen 7 gün</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold">Google</div>
                            <div className="text-2xl font-semibold text-primary mt-2">65%</div>
                            <div className="text-sm text-muted-foreground mt-4">
                              <div>Direct: 20%</div>
                              <div>Social: 10%</div>
                              <div>Other: 5%</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
