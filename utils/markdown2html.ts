import { marked } from 'marked'
import Toc from '@/types/Toc'
import { v4 as uuidv4 } from 'uuid'

export const markdownToHtml = async (markdown: string) => {
  const toc: Toc[] = []
  const renderer = {
    heading(text: string, level: 1 | 2 | 3 | 4 | 5) {
      toc.push({
        text,
        level,
        id: uuidv4()
      })
      return `
              <a id="${text}" style='display: block; height: 30px;'></a>
              <h${level}>
                ${text}
              </h${level}>
            `
    }
  }

  marked.use({ renderer })
  return {
    content: marked.parse(markdown),
    toc
  }
}
