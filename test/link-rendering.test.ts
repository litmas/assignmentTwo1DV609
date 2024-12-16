/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom/server'
import Link from 'next/link'


/**
 * @jest-environment node
 */
jest.mock('react-dom/server', () => ({
    renderToString: jest.fn(() => '<a href="/my-path">to another page</a>'),
  }));  

describe('Link rendering', () => {
  it('should render Link on its own', async () => {
    const element = React.createElement(
      Link,
      {
        href: '/my-path',
      },
      'to another page'
    )
    const html = ReactDOM.renderToString(element)
    expect(html).toMatchInlineSnapshot(
      `"<a href="/my-path">to another page</a>"`
    )
  })
})