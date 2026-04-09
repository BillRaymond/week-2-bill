import adapter from '@sveltejs/adapter-static';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPagesSite =
	process.env.GITHUB_ACTIONS === 'true' && repoName && !repoName.endsWith('.github.io');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: isProjectPagesSite ? `/${repoName}` : ''
		}
	}
};

export default config;
