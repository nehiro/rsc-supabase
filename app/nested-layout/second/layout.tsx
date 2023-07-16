import React, { ReactNode } from 'react'

const SecondLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout2</p>
      {children}
    </main>
  )
}

export default SecondLayout
