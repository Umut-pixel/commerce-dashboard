"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  IconSearch,
  IconFilter,
  IconEye,
  IconTruck,
  IconCheck,
  IconClock,
  IconX,
  IconHome,
  IconBuildingStore,
  IconPhone,
  IconPackage,
} from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock orders data
const orders = [
  {
    id: "#ORD-3421",
    customer: "Ahmet Yılmaz",
    product: "Samsung Galaxy S24 Ultra",
    amount: 49999,
    status: "Kargoda",
    date: "2024-06-30",
    quantity: 1,
    trackingNumber: "6275 4002 7616 82",
    carrier: "aygitJET"
  },
  {
    id: "#ORD-3420",
    customer: "Ayşe Demir",
    product: "Apple AirPods Pro",
    amount: 11499,
    status: "Hazırlanıyor",
    date: "2024-06-30",
    quantity: 2
  },
  {
    id: "#ORD-3419",
    customer: "Mehmet Kaya",
    product: "Sony WH-1000XM5",
    amount: 15499,
    status: "Tamamlandı",
    date: "2024-06-29",
    quantity: 1
  },
  {
    id: "#ORD-3418",
    customer: "Zeynep Öztürk",
    product: "MacBook Pro 16″ M3 Pro",
    amount: 89999,
    status: "Kargoda",
    date: "2024-06-29",
    quantity: 1,
    trackingNumber: "8255 3001 7498 91",
    carrier: "Yurtiçi Kargo"
  },
  {
    id: "#ORD-3417",
    customer: "Fatma Şahin",
    product: "iPad Pro 12.9″ M2",
    amount: 36999,
    status: "Beklemede",
    date: "2024-06-28",
    quantity: 1
  },
  {
    id: "#ORD-3416",
    customer: "Ali Çelik",
    product: "iPhone 15 Pro Max",
    amount: 69999,
    status: "Tamamlandı",
    date: "2024-06-28",
    quantity: 1
  },
]

const trackingSteps = [
  { status: "Kargoya Verildi", completed: true, icon: IconCheck },
  { status: "Transfer sürecinde", completed: true, icon: IconCheck },
  { status: "Teslimat Şubesinde", completed: true, icon: IconCheck },
  { status: "Kurye Dağıtımda", completed: true, icon: IconTruck, current: true },
  { status: "Tamamlandı", completed: false, icon: IconClock },
]

const deliveryAddress = {
  title: "Evim",
  address: "ADATEPE MAHALLESİ 3432 SOKAK NO1 DAİRE 1",
  district: " BUCA / İzmir",
  recipient: "Ahmet YILMAZ - 905*******36"
}

const branchInfo = {
  carrier: "aygitJET",
  branch: "İzmir Dağıtım Merkezi",
  phone: "08505580333"
}

  const getStatusIcon = (status: string) => {
  switch (status) {
    case "Tamamlandı":
      return <IconCheck className="h-4 w-4" />
    case "Kargoda":
      return <IconTruck className="h-4 w-4" />
    case "Hazırlanıyor":
      return <IconClock className="h-4 w-4" />
    case "Beklemede":
      return <IconClock className="h-4 w-4" />
    default:
      return <IconClock className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Tamamlandı":
      return "bg-green-50 text-green-700 border-green-200"
    case "Kargoda":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "Hazırlanıyor":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "Beklemede":
      return "bg-gray-50 text-gray-700 border-gray-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

function TrackingModal({ order }: { order: typeof orders[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <IconEye className="h-4 w-4" />
      </Button>

      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Modal */}
          <div 
            className="relative z-50 w-full max-w-4xl bg-[#2a2a2a] rounded-lg shadow-xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <h2 className="text-2xl font-bold text-white">Kargo Takibi</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Tracking Number */}
              <div>
                <div className="mb-2 text-sm text-gray-400 uppercase">Kargo Takip Numarası</div>
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-600">
                  <div className="text-xl font-bold text-white tracking-wider">
                    {order.trackingNumber}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Left Side - Timeline */}
                <div>
                  <h3 className="mb-4 font-semibold text-white">Takip Durumu</h3>
                  <div className="relative space-y-4">
                    {trackingSteps.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                            step.completed 
                              ? step.current
                                ? "border-[#075985] bg-[#075985] text-white"
                                : "border-[#075985] bg-[#075985] text-white"
                              : "border-gray-600 text-gray-400"
                          }`}>
                            {step.completed && <step.icon className="h-4 w-4" />}
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div className={`h-8 w-0.5 ${
                              step.completed ? "bg-[#075985]" : "bg-gray-600"
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <div className={`font-medium ${
                            step.completed ? "text-white" : "text-gray-400"
                          }`}>
                            {step.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 text-sm text-[#075985] hover:text-[#0d7aa8]">
                    Kargo hareketlerini göster
                  </button>
                </div>

                {/* Right Side - Details */}
                <div className="space-y-4">
                  {/* Package */}
                  <div>
                    <div className="mb-2 text-sm font-medium text-white">Paketinizde</div>
                    <div className="flex items-center gap-3 border border-gray-600 rounded-lg p-3 bg-[#1a1a1a]">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-[#075985]/20 text-[#075985]">
                        <IconPackage className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{order.product}</div>
                        <div className="text-sm text-gray-400">1 ürün bulunmaktadır.</div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white uppercase">
                      <IconHome className="h-4 w-4" />
                      <span>Teslimat Adresi</span>
                    </div>
                    <div className="border border-gray-600 rounded-lg p-4 bg-[#1a1a1a]">
                      <div className="mb-1 font-medium text-white">{deliveryAddress.title}</div>
                      <div className="mb-1 text-sm text-gray-300">{deliveryAddress.address}</div>
                      <div className="mb-2 text-sm text-gray-400">{deliveryAddress.district}</div>
                      <div className="text-sm font-medium text-white">{deliveryAddress.recipient}</div>
                    </div>
                  </div>

                  {/* Branch Info */}
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white uppercase">
                      <IconBuildingStore className="h-4 w-4" />
                      <span>Varış Şubesi Bilgileri</span>
                    </div>
                    <div className="border border-gray-600 rounded-lg p-4 bg-[#1a1a1a]">
                      <div className="mb-1 font-medium text-white">{branchInfo.carrier}</div>
                      <div className="mb-2 text-sm text-gray-300">{branchInfo.branch}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <IconPhone className="h-3 w-3" />
                        <span>{branchInfo.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function FormatAmount({ amount }: { amount: number }) {
  return <>{amount.toLocaleString('tr-TR')}</>
}

export default function OrdersPage() {
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
                  <h1 className="text-3xl font-bold tracking-tight">Siparişler</h1>
                  <p className="text-muted-foreground">
                    Sipariş durumlarını takip edin ve yönetin
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Sipariş</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{orders.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Bekleyen Siparişler</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {orders.filter(o => o.status === "Beklemede").length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Kargoda</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {orders.filter(o => o.status === "Kargoda").length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Tamamlanan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {orders.filter(o => o.status === "Tamamlandı").length}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-4 lg:px-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Sipariş ara..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <IconFilter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                </div>
              </div>

              {/* Orders Table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Sipariş No</TableHead>
                          <TableHead>Müşteri</TableHead>
                          <TableHead>Ürün</TableHead>
                          <TableHead>Tutar</TableHead>
                          <TableHead>Durum</TableHead>
                          <TableHead>Tarih</TableHead>
                          <TableHead className="text-right">İşlemler</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell className="font-semibold">
                              ₺<FormatAmount amount={order.amount} />
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className={getStatusColor(order.status)}>
                                <span className="flex items-center gap-1">
                                  {getStatusIcon(order.status)}
                                  {order.status}
                                </span>
                              </Badge>
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell className="text-right">
                              {order.status === "Kargoda" ? (
                                <TrackingModal order={order} />
                              ) : (
                                <Button variant="ghost" size="sm">
                                  <IconEye className="h-4 w-4" />
                                </Button>
                              )}
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
