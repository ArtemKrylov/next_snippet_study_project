import { PrismaClient } from "@prisma/client";
// export const db = new PrismaClient();

// import { PrismaClient } from "@/app/generated/prisma";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const db =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ["error"], // optional but valid
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }

import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
// import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const db = new PrismaClient({ adapter });

export { db };
