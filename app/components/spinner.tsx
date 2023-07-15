import React from 'react'

const Spinner = ({ color = 'border-blue-500' }: { color?: string }) => {
  return (
    <div className="my-16 flex justify-center">
      {/* <p>フェッチ中です</p> */}
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}
      />
    </div>
  )
}

export default Spinner
