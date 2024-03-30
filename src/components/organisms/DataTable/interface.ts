/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ColumnDefination {
  label: string
  key: string
  customRow?: (row: any) => any
}

export interface DataTablePropType {
  tableHead?: any
  data: Array<any>
  ColumnDefinations: Array<ColumnDefination>
  uniqueField?: string
  height?: string
  width?: string
  hasSelect?: boolean
  selected?: string[]
  setSelected?: React.Dispatch<React.SetStateAction<string[]>>
}

export interface EnhancedTableToolbarProps {
  tableHead: any
}

export interface EnhancedTableProps {
  numSelected: number
  rowCount: number
  hasSelect: boolean
  ColumnDefinations: Array<ColumnDefination>
}
