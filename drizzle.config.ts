import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:9HVIrKC1uflj@ep-wandering-surf-a5zg3uxp.us-east-2.aws.neon.tech/interview-expert?sslmode=require",
  },
  verbose: true,
  strict: true,
});
