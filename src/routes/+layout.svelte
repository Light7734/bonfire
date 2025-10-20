<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen bg-dark-bg">
	<!-- Left Section - Hidden on mobile, visible on lg screens -->
	<div class="relative hidden border-r border-dark-neutral lg:flex lg:w-1/4">
		<!-- Diagonal line pattern -->
		<div class="absolute inset-0">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="diagonal-left" patternUnits="userSpaceOnUse" width="40" height="40">
						<line x1="0" y1="40" x2="40" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
					<linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:white;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:white;stop-opacity:0.1" />
					</linearGradient>
					<mask id="fade-mask-left">
						<rect width="100%" height="100%" fill="url(#fade-left)" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-left)" mask="url(#fade-mask-left)" />
			</svg>
		</div>
	</div>

	<!-- Main Content Section -->
	<div class="relative flex-1 lg:w-3/5">
		<!-- Left diagonal border -->
		<div class="absolute bottom-0 left-0 top-0 w-8 overflow-hidden lg:w-12">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
				<defs>
					<pattern id="diagonal-border-left" patternUnits="userSpaceOnUse" width="12" height="12">
						<line x1="0" y1="12" x2="12" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-border-left)" />
			</svg>
		</div>

		<!-- Main content area -->
		<div class="min-h-screen px-12 py-8 lg:px-24">
			{@render children()}
		</div>

		<!-- Right diagonal border -->
		<div class="absolute bottom-0 right-0 top-0 w-8 overflow-hidden lg:w-12">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
				<defs>
					<pattern id="diagonal-border-right" patternUnits="userSpaceOnUse" width="12" height="12">
						<line x1="0" y1="12" x2="12" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-border-right)" />
			</svg>
		</div>
	</div>

	<!-- Right Section - Hidden on mobile, visible on lg screens -->
	<div class="relative hidden border-l border-dark-neutral lg:flex lg:w-1/4">
		<!-- Diagonal line pattern -->
		<div class="absolute inset-0">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="diagonal-right" patternUnits="userSpaceOnUse" width="40" height="40">
						<line x1="0" y1="40" x2="40" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
					<linearGradient id="fade-right" x1="100%" y1="0%" x2="0%" y2="0%">
						<stop offset="0%" style="stop-color:white;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:white;stop-opacity:0.2" />
					</linearGradient>
					<mask id="fade-mask-right">
						<rect width="100%" height="100%" fill="url(#fade-right)" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-right)" mask="url(#fade-mask-right)" />
			</svg>
		</div>
	</div>
</div>

<style>
	/* Additional custom styles if needed */
</style>
