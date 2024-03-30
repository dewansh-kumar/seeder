/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import DataTable from '.'
import { ColumnDefinationPayments, data } from './constant'

describe('Test Data Table Organisms', () => {
  it("Checked if we don't pass hasCheckbox is rendering or not ", async () => {
    render(
      <DataTable data={data} ColumnDefinations={ColumnDefinationPayments} />
    )
    await screen.findByText(data[0].name)
    await screen.findByText(data[0].totalFinanced)
    await screen.findByText(data[0].totalReceived)
  })
  it('Checked if we  pass hasCheckbox is rendering or not ', async () => {
    render(
      <DataTable
        data={data}
        ColumnDefinations={ColumnDefinationPayments}
        hasSelect={true}
      />
    )
    await screen.findByText(data[0].name)
    await screen.findByText(data[0].totalFinanced)
    await screen.findByText(data[0].totalReceived)
    const allCheckBox = document.querySelectorAll('input[type=checkbox]')
    expect(allCheckBox).toHaveLength(data.length + 1)
  }, 30000)
})
