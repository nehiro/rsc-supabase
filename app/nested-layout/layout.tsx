import React, { ReactNode } from 'react'

const FirstLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout1</p>
      {children}
    </main>
  )
}

export default FirstLayout
