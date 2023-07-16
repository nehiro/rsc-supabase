import React, { ReactNode } from 'react'

const ThirdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout3</p>
      {children}
    </main>
  )
}

export default ThirdLayout
