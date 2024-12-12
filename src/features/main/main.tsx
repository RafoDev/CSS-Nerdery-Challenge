import styles from "./main.module.scss";
import { Project } from "./components/project";
import { File as FileType, Project as ProjectType } from "./types";
import { SearchField } from "./components/search-field";
import { FileList } from "./components/file-list";

const recentProjects: ProjectType[] = [
  { contributors: ["", ""], creationDate: "20.02.2020", name: "App Project" },
  {
    contributors: ["", ""],
    creationDate: "28.02.2020",
    name: "Project: fitbit",
  },
  {
    contributors: ["", "", "", "", "", ""],
    creationDate: "04.03.2020",
    name: "Client Documents",
  },
];

const recentFiles: FileType[] = [
  {
    name: "Travel Landing Page",
    members: 5,
    lastModified: "Mar 8, 2020",
    type: "design",
  },
  {
    name: "True Photos",
    members: 12,
    lastModified: "Mar 8, 2020",
    type: "gallery",
  },
  {
    name: "Dashboard Structure",
    members: 10,
    lastModified: "Mar 9, 2020",
    type: "document",
  },
  {
    name: "Character Illustration",
    members: 3,
    lastModified: "Mar 10, 2020",
    type: "other",
  },
];

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <SearchField />
      </div>

      <section className={styles.container}>
        <section>
          <h2 className={styles.projectsSubtitle}>Recently Used</h2>
          <div className={styles.recentProjects}>
            {recentProjects.map((project) => (
              <Project data={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.filesSubtitle}>Recent Files</h2>
          <FileList files={recentFiles} />
        </section>
      </section>
    </main>
  );
};
