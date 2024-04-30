export const paths = {
  home: '/',
  blogs: '/blogs',
  blog: (slug: string) => `/blog/${slug}` as const,
  skills: '/skills',
  projects: '/projects',
  contact: '/contact',
  login: {
    github: '/login/github',
    githubCallback: '/login/github/callback'
  },
  extensions: {
    metaLlama: '/meta-llama'
  },
  api: {
    revalidatePath: '/api/revalidatePath',
    liveblocksAuth: '/api/liveblocks-auth',
    metaLlama: '/api/meta-llama',
    og: '/api/og',
    visitors: '/api/visitors'
  }
} as const

export const publicPaths = [paths.home, paths.blogs, paths.skills, paths.projects, paths.contact, paths.extensions.metaLlama]

export const privatePaths = []
