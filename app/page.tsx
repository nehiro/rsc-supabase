import Image from 'next/image'
import NotesList from './components/notes-list'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        hello <NotesList></NotesList>
      </div>
    </main>
  )
}
