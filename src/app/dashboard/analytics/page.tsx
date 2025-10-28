"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  IconTrendingUp,
  IconChartBar
} from "@tabler/icons-react"

export default function AnalyticsPage() {
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
                  <h1 className="text-3xl font-bold tracking-tight">Raporlar ve Analitik</h1>
                  <p className="text-muted-foreground">
                    Satış performansı ve iş analitiği
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Satış</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₺2,845,000</div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <IconTrendingUp className="h-3 w-3 text-green-500" />
                        +18.2% geçen aydan
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Sipariş</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,248</div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <IconTrendingUp className="h-3 w-3 text-green-500" />
                        +12.5% geçen aydan
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Müşteri</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3,456</div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <IconTrendingUp className="h-3 w-3 text-green-500" />
                        +5.3% geçen aydan
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Sepet Ortalaması</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₺2,280</div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <IconTrendingUp className="h-3 w-3 text-green-500" />
                        +8.7% geçen aydan
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Charts Placeholder */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Satış Trendi</CardTitle>
                      <CardDescription>Son 6 ayın satış performansı</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                        <div className="text-center">
                          <IconChartBar className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Grafik burada gösterilecek</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ürün Kategori Dağılımı</CardTitle>
                      <CardDescription>Kategori bazında satış payı</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                        <div className="text-center">
                          <IconChartBar className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Grafik burada gösterilecek</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
