import { editor } from 'monaco-editor'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'

interface MonacoProps {
	value?: string
}
export const Monaco: React.FC<MonacoProps> = ({
	value = '// some comment',
}) => {
	const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

	const handleEditorDidMount = (
		editor: editor.IStandaloneCodeEditor,
		monaco: any
	) => {
		editorRef.current = editor
	}

	return (
		<Editor
			height='100%'
			theme='vs-dark'
			defaultLanguage='typescript'
			defaultValue={value}
			onMount={handleEditorDidMount}
		/>
	)
}
