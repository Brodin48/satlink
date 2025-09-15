import dynamic from 'next/dynamic'

// Dynamically import the client component with no SSR to prevent hydration issues
const WhatsAppWidgetClient = dynamic(() => import('./WhatsAppWidgetClient'), {
  ssr: false,
  loading: () => null
})

export default function WhatsAppWidget() {
  return <WhatsAppWidgetClient />
}
