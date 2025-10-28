import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  IconBuildingStore,
  IconEdit,
  IconPhoto,
  IconMail,
  IconPhone,
  IconWorld,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMapPin,
  IconBuilding,
  IconUser,
  IconSettings,
  IconCheck,
} from "@tabler/icons-react"

const storeInfo = {
  name: "TechStore İstanbul",
  description: "Türkiye'nin lider teknoloji ürünleri satış mağazası. Apple, Samsung ve daha fazlası için güvenilir adresiniz.",
  logo: "/placeholder-logo.png",
  email: "info@techstore.com",
  phone: "+90 212 123 45 67",
  website: "www.techstore.com",
  address: "İstiklal Caddesi No:123, Beyoğlu, İstanbul",
  taxOffice: "Beyoğlu Vergi Dairesi",
  taxNumber: "1234567890",
  membershipNumber: "MIZ123456",
  socialMedia: {
    facebook: "techstore",
    instagram: "@techstore",
    twitter: "@techstore"
  },
  openingHours: {
    weekdays: "09:00 - 19:00",
    saturday: "10:00 - 18:00",
    sunday: "Kapalı"
  }
}

const stats = [
  { label: "Toplam Sipariş", value: "1,234", trend: "+12%" },
  { label: "Toplam Gelir", value: "₺2.4M", trend: "+18%" },
  { label: "Aktif Ürün", value: "456", trend: "+8%" },
  { label: "Müşteri Sayısı", value: "8,942", trend: "+15%" },
]

export default function StorePage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Mağazam</h1>
                    <p className="text-muted-foreground">Mağaza bilgilerinizi düzenleyin ve yönetin</p>
                  </div>
                  <Button>
                    <IconEdit className="w-4 h-4 mr-2" />
                    Düzenle
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
                        <p className="text-xs text-green-500 mt-1">{stat.trend}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Main Info */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {/* Left Column - Store Profile */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Store Info Card */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconBuildingStore className="w-5 h-5" />
                            <CardTitle>Mağaza Bilgileri</CardTitle>
                          </div>
                          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                            <IconCheck className="w-3 h-3 mr-1" />
                            Aktif
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Logo Upload */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10 border-2 border-dashed border-primary/50">
                            <IconPhoto className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium mb-1">{storeInfo.name}</div>
                            <Button variant="outline" size="sm">
                              Logo Değiştir
                            </Button>
                          </div>
                        </div>

                        {/* Store Details */}
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Mağaza Adı</label>
                            <Input value={storeInfo.name} />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Açıklama</label>
                            <Textarea value={storeInfo.description} rows={3} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconMail className="w-5 h-5" />
                          İletişim Bilgileri
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <IconMail className="w-4 h-4 text-muted-foreground" />
                          <span>{storeInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <IconPhone className="w-4 h-4 text-muted-foreground" />
                          <span>{storeInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <IconWorld className="w-4 h-4 text-muted-foreground" />
                          <span>{storeInfo.website}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <IconMapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{storeInfo.address}</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Business Info */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconBuilding className="w-5 h-5" />
                          Ticari Bilgiler
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Vergi Dairesi</span>
                          <span className="text-sm font-medium">{storeInfo.taxOffice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Vergi Numarası</span>
                          <span className="text-sm font-medium">{storeInfo.taxNumber}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Üyelik Numarası</span>
                          <span className="text-sm font-medium">{storeInfo.membershipNumber}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Column - Social & Settings */}
                  <div className="space-y-4">
                    {/* Social Media */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconBrandFacebook className="w-5 h-5" />
                          Sosyal Medya
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <IconBrandFacebook className="w-4 h-4" />
                          <span>facebook.com/{storeInfo.socialMedia.facebook}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <IconBrandInstagram className="w-4 h-4" />
                          <span>{storeInfo.socialMedia.instagram}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <IconBrandTwitter className="w-4 h-4" />
                          <span>{storeInfo.socialMedia.twitter}</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Opening Hours */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconSettings className="w-5 h-5" />
                          Çalışma Saatleri
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Pazartesi - Cuma</span>
                          <span className="font-medium">{storeInfo.openingHours.weekdays}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Cumartesi</span>
                          <span className="font-medium">{storeInfo.openingHours.saturday}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Pazar</span>
                          <span className="font-medium">{storeInfo.openingHours.sunday}</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Hızlı İşlemler</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <IconSettings className="w-4 h-4 mr-2" />
                          Mağaza Ayarları
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <IconUser className="w-4 h-4 mr-2" />
                          Takım Üyeleri
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <IconEdit className="w-4 h-4 mr-2" />
                          Şablonları Düzenle
                        </Button>
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
