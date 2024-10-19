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
  },
  {
    id: 2,
    name: "Reversedrive",
    description: "Allows downloading files uploaded to Drive directly.",
    tags: ['Python script'],
    url: "https://github.com/natesworksdev/reversedrive"
  },
  {
    id: 3,
    name: "Directmedia",
    description: "Allows downloading files uploaded to Mediafire directly.",
    tags: ['Python script'],
    url: "https://github.com/natesworksdev/directmedia"
  },
  {
    id: 4,
    name: "Direct download link generator (DDL)",
    description: "A website and api that allows you to create permanent direct links to Mediafire that you can share.",
    tags: ['Website'],
    url: "https://github.com/natesworksdev/reversedrive"
  },
  {
    id: 5,
    name: "LunarWM",
    description: "A Linux and BSD stacking window manager",
    tags: ['Website'],
    url: "https://github.com/lunarwm/lunarwm"
  },
]

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Projects</h1>
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
