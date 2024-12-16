import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Link href={`projects/${1}`}>Project 1</Link>
    </div>
  );
};

export default Projects;
