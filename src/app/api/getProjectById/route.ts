import path from "path";
import fs from "fs";

export async function getProjectById(id: string) {
  const filePath = path.join(process.cwd(), "src/assets/data/project.json");
  const data = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(data).find((project: { id: string }) => project.id === id);
}
