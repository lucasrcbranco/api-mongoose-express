import mongoose from "mongoose";

export default async function main(): Promise<typeof mongoose> {
  const connection = await mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
  );

  return connection;
}
