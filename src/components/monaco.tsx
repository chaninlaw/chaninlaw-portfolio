'use client'

import Editor from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import { useRef } from 'react'

interface MonacoProps {
  value?: string
}
export const Monaco: React.FC<MonacoProps> = ({ value = '// some comment' }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: any) => {
    editorRef.current = editor
  }

  return (
    <Editor
      height='100%'
      theme='vs-dark'
      defaultLanguage='typescript'
      defaultValue={value}
      onMount={handleEditorDidMount}
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        // fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2
      }}
    />
  )
}
