import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Users table for family members
export const users = sqliteTable("users", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").unique(),
	role: text("role", { enum: ["admin", "member"] })
		.default("member")
		.notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Income sources for budgeting
export const incomeSources = sqliteTable("income_sources", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	userId: integer("user_id")
		.references(() => users.id, { onDelete: "cascade" })
		.notNull(),
	name: text("name").notNull(),
	amount: real("amount").notNull(),
	frequency: text("frequency", { enum: ["weekly", "biweekly", "monthly", "yearly"] }).notNull(),
	isActive: integer("is_active", { mode: "boolean" }).default(true).notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Budget categories for organizing expenses
export const budgetCategories = sqliteTable("budget_categories", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	description: text("description"),
	color: text("color"), // Hex color for UI
	isDefault: integer("is_default", { mode: "boolean" }).default(false).notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Budget periods (monthly budgets)
export const budgetPeriods = sqliteTable("budget_periods", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	year: integer("year").notNull(),
	month: integer("month").notNull(), // 1-12
	totalIncome: real("total_income").notNull(),
	isActive: integer("is_active", { mode: "boolean" }).default(true).notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Budget allocations for each category per period
export const budgetAllocations = sqliteTable("budget_allocations", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	budgetPeriodId: integer("budget_period_id")
		.references(() => budgetPeriods.id, { onDelete: "cascade" })
		.notNull(),
	categoryId: integer("category_id")
		.references(() => budgetCategories.id, { onDelete: "cascade" })
		.notNull(),
	allocatedAmount: real("allocated_amount").notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Import batches for bulk expense imports
export const importBatches = sqliteTable("import_batches", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	userId: integer("user_id")
		.references(() => users.id, { onDelete: "cascade" })
		.notNull(),
	fileName: text("file_name").notNull(),
	totalRecords: integer("total_records").notNull(),
	successfulRecords: integer("successful_records").notNull(),
	failedRecords: integer("failed_records").notNull(),
	status: text("status", { enum: ["pending", "processing", "completed", "failed"] }).notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

// Actual expenses tracked against the budget
export const expenses = sqliteTable("expenses", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	budgetPeriodId: integer("budget_period_id")
		.references(() => budgetPeriods.id, { onDelete: "cascade" })
		.notNull(),
	categoryId: integer("category_id")
		.references(() => budgetCategories.id, { onDelete: "cascade" })
		.notNull(),
	userId: integer("user_id")
		.references(() => users.id, { onDelete: "cascade" })
		.notNull(),
	description: text("description").notNull(),
	amount: real("amount").notNull(),
	expenseDate: text("expense_date").notNull(), // ISO date string
	importBatchId: integer("import_batch_id").references(() => importBatches.id),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});
