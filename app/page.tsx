import Image from 'next/image'
import NotesList from './_components/notes-list'
import TimerCounter from './_components/timer-counter'
import { Suspense } from 'react'
import Spinner from './_components/spinner'
import RefreshBtn from './_components/refresh-btn'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>hello</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
