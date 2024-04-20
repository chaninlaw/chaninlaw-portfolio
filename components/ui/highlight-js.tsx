import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.min.css'
import Highlight from 'react-highlight'

hljs.registerLanguage('javascript', javascript)

interface IHighlightJSProps {
  js?: string
}
export const HighlightJS: React.FC<IHighlightJSProps> = ({ js = '' }) => {
  const highlightedCode = hljs.highlight(js, { language: 'javascript' }).value
  return (
    <Highlight className='text-sm' innerHTML>
      {highlightedCode}
    </Highlight>
  )
}
