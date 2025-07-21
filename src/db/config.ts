import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";

// Turso database configuration
const tursoUrl = process.env.TURSO_DATABASE_URL;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN;

if (!tursoUrl) {
	throw new Error("TURSO_DATABASE_URL environment variable is required");
}

if (!tursoAuthToken) {
	throw new Error("TURSO_AUTH_TOKEN environment variable is required");
}

// Create Turso client
export const tursoClient = createClient({
	url: tursoUrl,
	authToken: tursoAuthToken,
});

// Create Drizzle instance
export const db = drizzle(tursoClient);
