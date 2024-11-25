import { Head } from '@inertiajs/react';

export default function Welcome() {
	return (
		<>
			<Head title="Welcome" />
			<div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-900 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
				<h1 className='text-cyan-400'>Hello World</h1>
			</div>
		</>
	);
}
