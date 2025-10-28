import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  IconMapPin
} from "@tabler/icons-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock shipping data
const shipments = [
  {
    id: "#SHIP-001",
    orderId: "#ORD-3421",
    carrier: "Yurtiçi Kargo",
    trackingNumber: "YT123456789",
    destination: "İstanbul, Kadıköy",
    status: "In Transit",
    estimatedDelivery: "2024-07-02",
    shippedDate: "2024-06-30"
  },
  {
    id: "#SHIP-002",
    orderId: "#ORD-3418",
    carrier: "MNG Kargo",
    trackingNumber: "MNG987654321",
    destination: "Ankara, Çankaya",
    status: "Out for Delivery",
    estimatedDelivery: "2024-07-01",
    shippedDate: "2024-06-29"
  },
  {
    id: "#SHIP-003",
    orderId: "#ORD-3415",
    carrier: "Aras Kargo",
    trackingNumber: "ARS555555555",
    destination: "İzmir, Konak",
    status: "Delivered",
    estimatedDelivery: "2024-06-30",
    shippedDate: "2024-06-27"
  },
]

export default function LogisticsPage() {
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
                  <h1 className="text-3xl font-bold tracking-tight">Lojistik</h1>
                  <p className="text-muted-foreground">
                    Kargo ve teslimat yönetimi
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Toplam Gönderi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{shipments.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Yolda</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {shipments.filter(s => s.status === "In Transit").length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Teslim Edildi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {shipments.filter(s => s.status === "Delivered").length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Dağıtımda</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {shipments.filter(s => s.status === "Out for Delivery").length}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Shipments Table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Kargo No</TableHead>
                          <TableHead>Sipariş</TableHead>
                          <TableHead>Kargo Şirketi</TableHead>
                          <TableHead>Takip No</TableHead>
                          <TableHead>Teslimat Adresi</TableHead>
                          <TableHead>Durum</TableHead>
                          <TableHead>Tahmini Teslimat</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {shipments.map((shipment) => (
                          <TableRow key={shipment.id}>
                            <TableCell className="font-medium">{shipment.id}</TableCell>
                            <TableCell>{shipment.orderId}</TableCell>
                            <TableCell>{shipment.carrier}</TableCell>
                            <TableCell>{shipment.trackingNumber}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <IconMapPin className="h-4 w-4 text-muted-foreground" />
                                {shipment.destination}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {shipment.status === "Delivered" && "Teslim Edildi"}
                                {shipment.status === "In Transit" && "Yolda"}
                                {shipment.status === "Out for Delivery" && "Dağıtımda"}
                              </Badge>
                            </TableCell>
                            <TableCell>{shipment.estimatedDelivery}</TableCell>
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
