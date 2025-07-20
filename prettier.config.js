/**
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
};

export default config;
