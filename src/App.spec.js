/* global cy */
import * as React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.contains(/learn react/i)
})
