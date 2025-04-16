// src/app/api/getProjectById/route.ts

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  const filePath = path.join(process.cwd(), "src/assets/data/project.json");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);
    const project = projects.find((p: { id: string }) => p["id"] === id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error reading project data:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
