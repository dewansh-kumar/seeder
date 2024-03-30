import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '.'

describe('Testing Avtar Atoms', () => {
  it('Checking avtar with is rendering properly or not', async () => {
    const url =
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'
    render(<Avatar alt="Profile Pic" src={url} />)
    const component = screen.getByAltText('Profile Pic')
    expect(component.getAttribute('src')).toBe(url)
  })
})
