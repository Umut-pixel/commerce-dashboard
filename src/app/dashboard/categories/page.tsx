import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  IconPlus,
  IconEdit,
  IconTrash
} from "@tabler/icons-react"

// Mock categories data
const categories = [
  {
    id: 1,
    name: "Telefon",
    slug: "telefon",
    productCount: 45,
    totalSales: 1250000,
    icon: "📱"
  },
  {
    id: 2,
    name: "Bilgisayar",
    slug: "bilgisayar",
    productCount: 32,
    totalSales: 890000,
    icon: "💻"
  },
  {
    id: 3,
    name: "Aksesuar",
    slug: "aksesuar",
    productCount: 78,
    totalSales: 456000,
    icon: "🎧"
  },
  {
    id: 4,
    name: "Tablet",
    slug: "tablet",
    productCount: 18,
    totalSales: 678000,
    icon: "📱"
  },
  {
    id: 5,
    name: "Saat",
    slug: "saat",
    productCount: 24,
    totalSales: 234000,
    icon: "⌚"
  },
]

export default function CategoriesPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Kategoriler</h1>
                    <p className="text-muted-foreground">
                      Ürün kategorilerini yönetin
                    </p>
                  </div>
                  <Button>
                    <IconPlus className="h-4 w-4 mr-2" />
                    Yeni Kategori
                  </Button>
                </div>
              </div>

              {/* Categories Grid */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category) => (
                    <Card key={category.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{category.icon}</div>
                            <div>
                              <CardTitle className="text-lg">{category.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">/{category.slug}</p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <IconEdit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <IconTrash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Ürün Sayısı:</span>
                            <span className="font-semibold">{category.productCount}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Toplam Satış:</span>
                            <span className="font-semibold">₺{(category.totalSales / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
