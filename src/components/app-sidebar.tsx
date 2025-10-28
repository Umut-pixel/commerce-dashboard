"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSettings,
  IconPackage,
  IconShoppingCart,
  IconUsers,
  IconTruck,
  IconTags,
  IconBox,
  IconReceipt,
  IconCreditCard,
  IconDiscount,
  IconPlug,
  IconShield,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Umut Erol",
    email: "umut@aygitteknoloji.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Gösterge Paneli",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Ürünler",
      url: "/dashboard/products",
      icon: IconPackage,
    },
    {
      title: "Siparişler",
      url: "/dashboard/orders",
      icon: IconShoppingCart,
    },
    {
      title: "Müşteriler",
      url: "/dashboard/customers",
      icon: IconUsers,
    },
    {
      title: "Kategoriler",
      url: "/dashboard/categories",
      icon: IconTags,
    },
    {
      title: "Stok Yönetimi",
      url: "/dashboard/inventory",
      icon: IconBox,
    },
  ],
  navClouds: [
    {
      title: "Ürün Yönetimi",
      icon: IconPackage,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Tüm Ürünler",
          url: "/dashboard/products",
        },
        {
          title: "Ürün Ekle",
          url: "/dashboard/products/add",
        },
        {
          title: "Toplu Yükleme",
          url: "/dashboard/products/bulk",
        },
        {
          title: "Varyasyon Yönetimi",
          url: "/dashboard/products/variations",
        },
        {
          title: "Kategori & Marka",
          url: "/dashboard/categories",
        },
        {
          title: "SEO Ayarları",
          url: "/dashboard/products/seo",
        },
        {
          title: "Stok Takibi",
          url: "/dashboard/inventory",
        },
      ],
    },
    {
      title: "Sipariş İşlemleri",
      icon: IconShoppingCart,
      url: "#",
      items: [
        {
          title: "Tüm Siparişler",
          url: "/dashboard/orders",
        },
        {
          title: "Bekleyen Siparişler",
          url: "/dashboard/orders/pending",
        },
        {
          title: "Kargo Hazırlama",
          url: "/dashboard/orders/preparing",
        },
        {
          title: "İade & Değişim",
          url: "/dashboard/orders/returns",
        },
        {
          title: "Faturalar",
          url: "/dashboard/orders/invoices",
        },
        {
          title: "Kargo Takip",
          url: "/dashboard/logistics",
        },
      ],
    },
    {
      title: "Ödeme & Finans",
      icon: IconCreditCard,
      url: "#",
      items: [
        {
          title: "Ödeme Yöntemleri",
          url: "/dashboard/payments/methods",
        },
        {
          title: "PayTR Entegrasyonu",
          url: "/dashboard/payments/paytr",
        },
        {
          title: "Fatura Şablonları",
          url: "/dashboard/payments/invoices",
        },
        {
          title: "Vergi Ayarları",
          url: "/dashboard/payments/taxes",
        },
      ],
    },
    {
      title: "Kargo & Lojistik",
      icon: IconTruck,
      url: "#",
      items: [
        {
          title: "Kargo Firmaları",
          url: "/dashboard/logistics/carriers",
        },
        {
          title: "Teslimat Kuralları",
          url: "/dashboard/logistics/delivery",
        },
        {
          title: "İade Politikası",
          url: "/dashboard/logistics/returns",
        },
        {
          title: "Kargo Entegrasyonları",
          url: "/dashboard/logistics/integrations",
        },
      ],
    },
    {
      title: "Pazarlama",
      icon: IconDiscount,
      url: "#",
      items: [
        {
          title: "Kupon Yönetimi",
          url: "/dashboard/marketing/coupons",
        },
        {
          title: "Kampanyalar",
          url: "/dashboard/marketing/campaigns",
        },
        {
          title: "Banner Yönetimi",
          url: "/dashboard/marketing/banners",
        },
        {
          title: "SEO Ayarları",
          url: "/dashboard/marketing/seo",
        },
        {
          title: "E-posta Gönderimi",
          url: "/dashboard/marketing/email",
        },
      ],
    },
    {
      title: "Raporlar & Analiz",
      icon: IconChartBar,
      url: "#",
      items: [
        {
          title: "Satış Raporları",
          url: "/dashboard/analytics/sales",
        },
        {
          title: "Ürün Performansı",
          url: "/dashboard/analytics/products",
        },
        {
          title: "Müşteri Analizi",
          url: "/dashboard/analytics/customers",
        },
        {
          title: "Trafik Raporları",
          url: "/dashboard/analytics/traffic",
        },
        {
          title: "Excel/CSV Dışa Aktarma",
          url: "/dashboard/analytics/export",
        },
      ],
    },
    {
      title: "Mağaza Ayarları",
      icon: IconSettings,
      url: "#",
      items: [
        {
          title: "Genel Ayarlar",
          url: "/dashboard/settings/general",
        },
        {
          title: "Tema & Görünüm",
          url: "/dashboard/settings/theme",
        },
        {
          title: "Alan Adı & SSL",
          url: "/dashboard/settings/domain",
        },
        {
          title: "Dil & Ülke",
          url: "/dashboard/settings/language",
        },
        {
          title: "Bildirim Şablonları",
          url: "/dashboard/settings/notifications",
        },
      ],
    },
    {
      title: "Entegrasyonlar",
      icon: IconPlug,
      url: "#",
      items: [
        {
          title: "Trendyol Entegrasyonu",
          url: "/dashboard/integrations/trendyol",
        },
        {
          title: "Hepsiburada Entegrasyonu",
          url: "/dashboard/integrations/hepsiburada",
        },
        {
          title: "Muhasebe Entegrasyonu",
          url: "/dashboard/integrations/accounting",
        },
        {
          title: "API Yönetimi",
          url: "/dashboard/integrations/api",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Ayarlar",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    {
      title: "Güvenlik",
      url: "/dashboard/security",
      icon: IconShield,
    },
    {
      title: "Yardım & Destek",
      url: "/dashboard/help",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Faturalar",
      url: "/dashboard/invoices",
      icon: IconReceipt,
    },
    {
      name: "Raporlar",
      url: "/dashboard/reports",
      icon: IconReport,
    },
    {
      name: "Stok Uyarıları",
      url: "/dashboard/alerts",
      icon: IconBox,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Aygıt Panel</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
