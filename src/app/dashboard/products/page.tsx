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
  IconPlus,
  IconPackage,
  IconSearch,
  IconEdit,
  IconTrash,
  IconTrendingUp
} from "@tabler/icons-react"
import { Input } from "@/components/ui/input"

// Mock product data
const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    sku: "SAMS24U512",
    category: "Telefon",
    price: 49999,
    stock: 23,
    status: "active",
    sales: 156,
    image: "/placeholder-product.jpg"
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max",
    sku: "IP15PM256",
    category: "Telefon",
    price: 69999,
    stock: 15,
    status: "active",
    sales: 189,
    image: "/placeholder-product.jpg"
  },
  {
    id: 3,
    name: "MacBook Pro 16″ M3 Pro",
    sku: "MBP16M3",
    category: "Bilgisayar",
    price: 89999,
    stock: 8,
    status: "active",
    sales: 42,
    image: "/placeholder-product.jpg"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    sku: "SONY1000XM5",
    category: "Aksesuar",
    price: 15499,
    stock: 3,
    status: "low-stock",
    sales: 234,
    image: "/placeholder-product.jpg"
  },
  {
    id: 5,
    name: "Apple AirPods Pro",
    sku: "AIRPODSPRO",
    category: "Aksesuar",
    price: 11499,
    stock: 0,
    status: "out-of-stock",
    sales: 312,
    image: "/placeholder-product.jpg"
  },
]

export default function ProductsPage() {
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
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Ürünler</h1>
                    <p className="text-muted-foreground">
                      Ürünlerinizi yönetin ve stok durumunu takip edin
                    </p>
                  </div>
                  <Button>
                    <IconPlus className="h-4 w-4 mr-2" />
                    Yeni Ürün Ekle
                  </Button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-4 lg:px-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Ürün ara..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Kategori</Button>
                  <Button variant="outline">Durum</Button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                              <IconPackage className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{product.name}</CardTitle>
                              <CardDescription>{product.sku}</CardDescription>
                            </div>
                          </div>
                          <Badge
                            variant={
                              product.status === "active"
                                ? "default"
                                : product.status === "low-stock"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {product.status === "active" && "Aktif"}
                            {product.status === "low-stock" && "Düşük Stok"}
                            {product.status === "out-of-stock" && "Tükendi"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Kategori:</span>
                            <span className="font-medium">{product.category}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Fiyat:</span>
                            <span className="font-semibold">₺{product.price.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Stok:</span>
                            <span className={`font-medium ${product.stock === 0 ? 'text-red-500' : product.stock < 5 ? 'text-orange-500' : 'text-green-500'}`}>
                              {product.stock} adet
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Satış:</span>
                            <div className="flex items-center gap-1 text-green-600">
                              <IconTrendingUp className="h-4 w-4" />
                              <span className="font-medium">{product.sales}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" className="flex-1" size="sm">
                              <IconEdit className="h-4 w-4 mr-2" />
                              Düzenle
                            </Button>
                            <Button variant="outline" size="sm">
                              <IconTrash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Toplam {products.length} ürün gösteriliyor
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Önceki
                    </Button>
                    <Button variant="outline" size="sm">
                      Sonraki
                    </Button>
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
