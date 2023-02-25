const SEP = process.env.sep as string

export type headerLink = {
  name: string
  path: string | headerLink[]
  key: string
}
 
export const headerLinks: headerLink[] = [
  {
    name: 'HOME',
    path: '/',
    key: 'home'
  },
  {
    name: 'ROADMAP',
    path: '/documents/快速开始',
    key: 'documents'
  }
]
