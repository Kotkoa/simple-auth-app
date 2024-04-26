import { Github } from '@/icons'

export default function Orders() {
  return (
    <>
      <em className="mt-4 text-gray-700">{`This is an orders page`}</em>
      <ul className="mt-8">
        <li>
          <Github className="h-6 w-6 opacity-50 hover:opacity-80" />
        </li>
      </ul>
    </>
  )
}
