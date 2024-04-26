import { Github } from '@/icons'

export default function Home() {
  return (
    <>
      <em className="mt-4 text-gray-700">{`This is a home page`}</em>
      <ul className="mt-8">
        <li>
          <Github className="h-6 w-6 opacity-50 hover:opacity-80" />
        </li>
      </ul>
    </>
  )
}
