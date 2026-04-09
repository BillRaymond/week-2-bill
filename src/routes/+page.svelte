<script lang="ts">
	const themes = [
		{
			name: 'Sunrise Glow',
			start: '#fff4d6',
			end: '#ffd2c7',
			accent: '#0f766e',
			accentStrong: '#134e4a'
		},
		{
			name: 'Mint Current',
			start: '#dcfff3',
			end: '#cde7ff',
			accent: '#0284c7',
			accentStrong: '#1d4ed8'
		},
		{
			name: 'Citrus Pop',
			start: '#fff1bf',
			end: '#ffc4a3',
			accent: '#ea580c',
			accentStrong: '#c2410c'
		}
	] as const;

	let currentThemeIndex = $state(0);
	const currentTheme = $derived(themes[currentThemeIndex]);

	function cycleTheme() {
		currentThemeIndex = (currentThemeIndex + 1) % themes.length;
	}
</script>

<svelte:head>
	<title>Hello World</title>
	<meta
		name="description"
		content="A polished static starter built with SvelteKit, Tailwind CSS, and GitHub Pages-ready deployment."
	/>
</svelte:head>

<div
	class="grid min-h-screen place-items-center px-6 py-10"
	style={`--bg-start: ${currentTheme.start}; --bg-end: ${currentTheme.end}; --accent: ${currentTheme.accent}; --accent-strong: ${currentTheme.accentStrong};`}
>
	<main
		class="w-full max-w-3xl rounded-[28px] border border-white/70 bg-white/70 p-8 shadow-[0_24px_80px_rgba(31,41,55,0.18)] backdrop-blur-xl motion-safe:animate-[float-in_700ms_ease-out_both] sm:p-12"
	>
		<p class="text-sm font-bold tracking-[0.12em] text-[var(--accent)] uppercase">
			Single-Page Demo
		</p>
		<h1 class="mt-3 text-5xl leading-none font-semibold tracking-tight text-slate-800 sm:text-7xl">
			Hello, World.
		</h1>
		<p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
			A clean, modern starter page built with SvelteKit, Tailwind CSS, and a Dev Container setup
			that is ready for GitHub Pages.
		</p>

		<div class="mt-8 flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-start">
			<button
				type="button"
				class="cursor-pointer rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 font-bold text-white shadow-[0_12px_30px_rgba(15,118,110,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,118,110,0.3)] hover:brightness-[1.03] active:translate-y-0"
				onclick={cycleTheme}
			>
				Refresh the Mood
			</button>
			<span class="text-sm text-slate-600">Theme: {currentTheme.name}</span>
		</div>
	</main>
</div>
