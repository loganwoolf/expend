import { db } from "./config";
import * as schema from "./schema";

// Export the database instance with schema
export { db };

// Export all schema tables for use in queries
export const {
	users,
	incomeSources,
	budgetCategories,
	budgetPeriods,
	budgetAllocations,
	expenses,
	importBatches,
} = schema;

// Export all schema for drizzle-kit migrations
export * as schema from "./schema";

// Re-export types
export type * from "../types/database";
