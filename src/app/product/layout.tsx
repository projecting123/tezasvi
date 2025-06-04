import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <h1>Checkout Layout</h1>
    <div>{children}</div>
    </>
  )
}
