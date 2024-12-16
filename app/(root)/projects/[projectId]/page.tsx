import React from "react";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return <div>Project {projectId}</div>;
};

export default ProjectDetails;
