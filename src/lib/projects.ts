import fs from "fs";
import path from "path";

const PROJECTS_PATH = path.join(
  process.cwd(),
  "src/content/projects"
);

export function getAllProjects() {
  const slugs = fs.readdirSync(PROJECTS_PATH);

  return slugs.map((slug) => {
    const metadataPath = path.join(
      PROJECTS_PATH,
      slug,
      "project.json"
    );

    return JSON.parse(
      fs.readFileSync(metadataPath, "utf8")
    );
  });
}

export function getProjectSlugs() {
  return fs.readdirSync(PROJECTS_PATH);
}

export function getProjectBySlug(
  slug: string
) {
  const projectDir = path.join(
    PROJECTS_PATH,
    slug
  );

  const metadata = JSON.parse(
    fs.readFileSync(
      path.join(projectDir, "project.json"),
      "utf8"
    )
  );

  const content = fs.readFileSync(
    path.join(projectDir, "README.md"),
    "utf8"
  );

  return {
    metadata,
    content,
  };
}