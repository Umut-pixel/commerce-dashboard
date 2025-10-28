"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"

interface TrafficChartProps {
  data: Array<{
    date: string
    visitors: number
    pageviews: number
    sessions: number
  }>
}

export function TrafficChart({ data }: TrafficChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="pageviews" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function TrafficAreaChart({ data }: TrafficChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="visitors" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        <Area type="monotone" dataKey="pageviews" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

interface SourcesChartProps {
  data: Array<{
    source: string
    users: number
    sessions: number
  }>
}

export function SourcesChart({ data }: SourcesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sessions" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

