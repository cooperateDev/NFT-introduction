interface SummaryItem {
  // id: number
  // label: string
  // value: string
  estimatedValue: string
  totalValue: string
}

interface ItemProps {
  // priceData: {
  //   label: string
  //   value: string
  // }
  label: string
  value: string
  isLoading: boolean
}

export type { SummaryItem, ItemProps }
