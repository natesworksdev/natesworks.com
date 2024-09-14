import Link from 'next/link'

interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Brawlmods",
    description: "Discover brawl stars mods!",
    tags: ['Website'],
    url: "https://brawlmods.natesworks.com"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={project.url} key={project.id} className="block">
            <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}