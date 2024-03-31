import {
	VscDebugAlt,
	VscExtensions,
	VscFiles,
	VscSearch,
	VscSourceControl,
} from 'react-icons/vsc'

export function EditorNavSide() {
	return (
		<div className='h-full w-12'>
			<ul className='flex flex-col items-center py-3 space-y-6'>
				<li>
					<VscFiles className='text-white/60 w-6 h-6' />
				</li>
				<li>
					<VscSearch className='text-white/60 w-6 h-6' />
				</li>
				<li>
					<VscSourceControl className='text-white/60 w-6 h-6' />
				</li>
				<li>
					<VscDebugAlt className='text-white/60 w-6 h-6' />
				</li>
				<li>
					<VscExtensions className='text-white/60 w-6 h-6' />
				</li>
			</ul>
		</div>
	)
}
