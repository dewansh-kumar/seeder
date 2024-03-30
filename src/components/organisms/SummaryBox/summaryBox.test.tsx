import React from 'react'
import SummaryBox from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('SummaryBox', () => {
  it('renders the summary information', () => {
    render(
      <SummaryBox
        buttonLabel="2323"
        handleOnClick2={() => {
          //
        }}
        handleResetClick={() => {
          //
        }}
        height="auto"
        maxValue={1333}
        numberOfSelectedContracts={2}
        onSilderChangeHandler={() => {
          //
        }}
        term="12 months"
        totalSelectedAmount={233}
        totalValue={23232443}
        width="300px"
      />
    )

    expect(screen.getByText('Summary')).toBeInTheDocument()
    expect(screen.getByText('Term')).toBeInTheDocument()
    expect(screen.getByText('Selected contracts')).toBeInTheDocument()
    expect(screen.getByText('Pay back amount')).toBeInTheDocument()
  })
})
