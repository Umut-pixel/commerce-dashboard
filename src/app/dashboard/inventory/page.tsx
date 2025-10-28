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
  IconBox,
  IconPlus,
} from "@tabler/icons-react"

// Mock inventory data
const inventory = [
  {
    id: 1,
    product: "Apple AirPods Pro",
    sku: "AIRPODSPRO",
    stock: 0,
    minStock: 10,
    status: "critical",
    cost: 8500,
    reorderQuantity: 50
  },
  {
    id: 2,
    product: "Sony WH-1000XM5",
    sku: "SONY1000XM5",
    stock: 3,
    minStock: 10,
    status: "critical",
    cost: 12000,
    reorderQuantity: 30
  },
  {
    id: 3,
    product: "iPad Pro 12.9″ M2",
    sku: "IPADPRO129",
    stock: 8,
    minStock: 15,
    status: "warning",
    cost: 29000,
    reorderQuantity: 20
  },
  {
    id: 4,
    product: "Samsung Galaxy S21",
    sku: "SAMS21U256",
    stock: 5,
    minStock: 10,
    status: "warning",
    cost: 22000,
    reorderQuantity: 40
  },
  {
    id: 5,
    product: "MacBook Pro M3 Pro",
    sku: "MBP16M3",
    stock: 45,
    minStock: 20,
    status: "good",
    cost: 75000,
    reorderQuantity: 15
  },
]

export default function InventoryPage() {
  const criticalItems = inventory.filter(item => item.status === "critical")
  const warningItems = inventory.filter(item => item.status === "warning")
  const totalValue = inventory.reduce((sum, item) => sum + (item.stock * item.cost), 0)

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
                  <h1 className="text-3xl font-bold tracking-tight">Stok Yönetimi</h1>
                  <p className="text-muted-foreground">
                    Stok seviyelerini takip edin ve uyarıları yönetin
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Ürün</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{inventory.length}</div>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-red-700">Kritik Stok</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-600">{criticalItems.length}</div>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200 bg-orange-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-orange-700">Düşük Stok</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-600">{warningItems.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Değer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₺{(totalValue / 1000).toFixed(0)}K</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Inventory Table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Stok Durumu</CardTitle>
                    <CardDescription>Tüm ürünlerin stok seviyeleri</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inventory.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <IconBox className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{item.product}</div>
                              <div className="text-sm text-muted-foreground">{item.sku}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Mevcut Stok</div>
                              <div className={`text-2xl font-bold ${
                                item.status === "critical" ? "text-red-600" :
                                item.status === "warning" ? "text-orange-600" :
                                "text-green-600"
                              }`}>
                                {item.stock}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Min. Stok</div>
                              <div className="text-lg font-medium">{item.minStock}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Stok Değeri</div>
                              <div className="text-lg font-semibold">₺{(item.stock * item.cost).toLocaleString()}</div>
                            </div>
                            <Badge
                              variant={
                                item.status === "critical"
                                  ? "destructive"
                                  : item.status === "warning"
                                  ? "secondary"
                                  : "default"
                              }
                            >
                              {item.status === "critical" && "Kritik"}
                              {item.status === "warning" && "Düşük"}
                              {item.status === "good" && "İyi"}
                            </Badge>
                            {item.status !== "good" && (
                              <Button size="sm" variant="outline">
                                <IconPlus className="h-4 w-4 mr-2" />
                                Stok Ekle
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
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
