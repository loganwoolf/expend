import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

// parsers
const tsParser = tseslint.parser;

export default defineConfig([
	// Global configuration
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	// Base configs
	js.configs.recommended,
	tseslint.configs.recommended,

	// Prettier config
	{
		plugins: {
			prettier: prettier,
		},
		rules: {
			// disable warnings, since prettier should format on save
			"prettier/prettier": "off",
		},
	},

	// astro setup with a11y
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: eslintPluginAstro.parser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
				project: "./tsconfig.json",
			},
		},
		rules: {
			"no-undef": "off", // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
			"@typescript-eslint/no-explicit-any": "off", // you may want this as it can get annoying
		},
	},

	// Ignore patterns
	{
		ignores: [
			"dist/**",
			// "**/*.d.ts",
			".github/",
		],
	},
]);
