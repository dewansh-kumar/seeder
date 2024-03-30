/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import theme from '../../../themes'
import Text from '../../atoms/Typography'
import styled from '@emotion/styled'
import {
  DataTablePropType,
  EnhancedTableProps,
  EnhancedTableToolbarProps,
} from './interface'

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { numSelected, rowCount, ColumnDefinations } = props

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: theme.palette.greys.backgroundElevation1,
          borderRadius: '20px',
        }}
      >
        {props.hasSelect ? (
          <StyledTableCell padding="checkbox">
            <StyledCheckBox
              color="primary"
              indeterminate={numSelected > 0}
              checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </StyledTableCell>
        ) : (
          <></>
        )}
        {ColumnDefinations.map((headCell) => (
          <StyledTableCell key={headCell.key}>
            <Text textBody={headCell.label} variant="body2" />
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  return <Toolbar>{props.tableHead}</Toolbar>
}

const StyledTableCell = styled(TableCell)(() => ({
  border: 'none',
  color: theme.palette.primary.primaryTextLowEmp,
  padding: '12px 30px',
}))

const StyledCheckBox = styled(Checkbox)<CheckboxProps>(() => ({
  color: theme.palette.icon.iconLowEmp,
  borderRadius: '50%',
  '&.Mui-checked': {
    color: theme.palette.primary.primaryAlphaPurple400,
  },
}))
const StyledPaper = styled(Paper)<any>(({ height, width }) => ({
  width,
  height,
  padding: 10,
  background: theme.palette.background.backgroundElevation1,
  borderRadius: '12px',
}))

const DataTable = ({
  tableHead,
  hasSelect = false,
  ColumnDefinations,
  uniqueField = 'id',
  data,
  height = '500px',
  width = '90%',
  selected,
  setSelected,
}: DataTablePropType) => {
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected?.indexOf(name)
    let newSelected: string[] = []

    if (selected && selectedIndex) {
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name)
      } else {
        newSelected = selected.filter((ele) => ele !== name)
      }
    }
    if (setSelected) {
      setSelected(newSelected)
    }
  }
  const isSelected = (name: string) => selected?.indexOf(name) !== -1

  return (
    <StyledPaper height={height} width={width}>
      <EnhancedTableToolbar tableHead={tableHead} />
      <TableContainer
        sx={{
          height: '85%',
        }}
      >
        <Table
          sx={{ minWidth: 750, height: '100%' }}
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="sticky table"
        >
          <EnhancedTableHead
            ColumnDefinations={ColumnDefinations}
            hasSelect={hasSelect}
            numSelected={selected?.length as number}
            rowCount={data.length}
          />
          <TableBody>
            {data.map((row, index) => {
              const isItemSelected = isSelected(row[uniqueField])
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow
                  hover={hasSelect}
                  onClick={(event) => handleClick(event, row[uniqueField])}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row[uniqueField]}
                  selected={isItemSelected}
                  sx={{
                    cursor: 'pointer',
                    '& .Mui-selected': {
                      backgroundColor: hasSelect
                        ? theme.palette.primary.primaryAlphaPurple600
                        : '',
                    },
                  }}
                >
                  {hasSelect ? (
                    <StyledTableCell padding="checkbox">
                      <StyledCheckBox
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </StyledTableCell>
                  ) : (
                    <></>
                  )}
                  {ColumnDefinations.map(({ key, customRow }) => {
                    return (
                      <StyledTableCell component="th" key={key} scope="row">
                        {customRow ? customRow(row) : row[key]}
                      </StyledTableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  )
}

export default DataTable
