import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateClerkId() {
  try {
    // קבלת כל המשתמשים
    const users = await prisma.user.findMany();
    console.log("All users:", JSON.stringify(users, null, 2));
    
    if (users.length === 0) {
      console.log("No users found. Creating a new user...");
      const newUser = await prisma.user.create({
        data: {
          clerkId: "ABC"
        }
      });
      console.log("New user created:", newUser);
    } else {
      // עדכון המשתמש הראשון
      const userId = users[0].id;
      console.log(`Updating user with ID: ${userId}`);
      
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          clerkId: "ABC"
        }
      });

      console.log("User updated successfully:", JSON.stringify(user, null, 2));
    }
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateClerkId();
