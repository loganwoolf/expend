import { db, users, budgetCategories } from "./index";
import { eq } from "drizzle-orm";
import type { NewUser, NewBudgetCategory } from "../types/database";

export async function testDatabaseConnection() {
	try {
		console.log("Testing database connection...");

		// Test 1: Create initial migration (this will be handled by drizzle-kit)
		console.log("✓ Database client initialized");

		// Test 2: Insert a test user
		const newUser: NewUser = {
			name: "Test User",
			email: "test@example.com",
			role: "admin",
		};

		const insertedUsers = await db.insert(users).values(newUser).returning();
		const testUser = insertedUsers[0];
		console.log("✓ User inserted:", testUser.name);

		// Test 3: Insert a test budget category
		const newCategory: NewBudgetCategory = {
			name: "Groceries",
			description: "Food and household items",
			color: "#4CAF50",
			isDefault: true,
		};

		const insertedCategories = await db
			.insert(budgetCategories)
			.values(newCategory)
			.returning();
		const testCategory = insertedCategories[0];
		console.log("✓ Budget category inserted:", testCategory.name);

		// Test 4: Read data back
		const allUsers = await db.select().from(users);
		const allCategories = await db.select().from(budgetCategories);
		console.log("✓ Read back:", allUsers.length, "users,", allCategories.length, "categories");

		// Test 5: Update a record
		await db.update(users).set({ name: "Updated Test User" }).where(eq(users.id, testUser.id));
		console.log("✓ User updated");

		// Test 6: Delete test records (cleanup)
		await db.delete(users).where(eq(users.id, testUser.id));
		await db.delete(budgetCategories).where(eq(budgetCategories.id, testCategory.id));
		console.log("✓ Test records cleaned up");

		console.log("\n🎉 All database tests passed! Database foundation is working correctly.");
		return true;
	} catch (error) {
		console.error("❌ Database test failed:", error);
		return false;
	}
}

// Run test if file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
	testDatabaseConnection().then((success) => {
		process.exit(success ? 0 : 1);
	});
}
