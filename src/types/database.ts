import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import {
	users,
	incomeSources,
	budgetCategories,
	budgetPeriods,
	budgetAllocations,
	expenses,
	importBatches,
} from "../db/schema";

// User types
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

// Income source types
export type IncomeSource = InferSelectModel<typeof incomeSources>;
export type NewIncomeSource = InferInsertModel<typeof incomeSources>;

// Budget category types
export type BudgetCategory = InferSelectModel<typeof budgetCategories>;
export type NewBudgetCategory = InferInsertModel<typeof budgetCategories>;

// Budget period types
export type BudgetPeriod = InferSelectModel<typeof budgetPeriods>;
export type NewBudgetPeriod = InferInsertModel<typeof budgetPeriods>;

// Budget allocation types
export type BudgetAllocation = InferSelectModel<typeof budgetAllocations>;
export type NewBudgetAllocation = InferInsertModel<typeof budgetAllocations>;

// Expense types
export type Expense = InferSelectModel<typeof expenses>;
export type NewExpense = InferInsertModel<typeof expenses>;

// Import batch types
export type ImportBatch = InferSelectModel<typeof importBatches>;
export type NewImportBatch = InferInsertModel<typeof importBatches>;

// Frequency enum for income sources
export type IncomeFrequency = "weekly" | "biweekly" | "monthly" | "yearly";

// User role enum
export type UserRole = "admin" | "member";

// Import status enum
export type ImportStatus = "pending" | "processing" | "completed" | "failed";
