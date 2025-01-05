"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import handleError from "@/lib/handlers/error";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

interface Project {
  _id: string;
  data: {
    en: {
      title: string;
      description: string;
      neighborhood?: string;
      services: string[];
    };
    ar: {
      title: string;
      description: string;
      neighborhood?: string;
      services: string[];
    };
  };
  startingPrice: number;
  area: number;
  rooms: number;
  baths: number;
  floors: number;
  status: "ongoing" | "completed";
  developer: string;
  numberOfProperties: number;
  images: string[];
  coverImage: string;
}

const ProjectsPage = () => {
  const { locale } = useLocale();
  const router = useRouter();
  const [viewDialog, setViewDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`/api/projects`);
      setProjects(response.data.data);
    } catch (error) {
      handleError(error, "api");
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (project: Project) => {
    setSelectedProject(project);
    setViewDialog(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      handleError(error, "api");
    } finally {
      setDeleteDialog(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-6 rounded-lg bg-gradient-to-r from-black to-gray-700 p-6 text-white md:flex-row">
        <div>
          <h1 className="text-2xl font-bold">Projects Overview</h1>
          <p className="text-sm">
            View, edit, and manage all your projects from one place.
          </p>
        </div>
        <div>
          <Button
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-100"
            onClick={() => router.push(`/dashboard/projects/projects-add`)}
          >
            Add New Project +
          </Button>
        </div>
      </div>

      {/* Projects Section */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center">No projects available</div>
      ) : (
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-dark-200">
          <h2 className="mb-4 text-lg font-bold">Projects List</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Developer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project._id}>
                  <TableCell>{project.data.en.title}</TableCell>
                  <TableCell>{project.developer}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(project)}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          router.push(
                            `/dashboard/projects/projects-add?id=${project._id}`
                          )
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setSelectedProject(project);
                          setDeleteDialog(true);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Dialogs */}
      <Dialog open={viewDialog} onOpenChange={setViewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project Details</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div>
              <p>
                <strong>Title (EN):</strong> {selectedProject.data.en.title}
              </p>
              <p>
                <strong>Description (EN):</strong>{" "}
                {selectedProject.data.en.description}
              </p>
              <p>
                <strong>Title (AR):</strong> {selectedProject.data.ar.title}
              </p>
              <p>
                <strong>Description (AR):</strong>{" "}
                {selectedProject.data.ar.description}
              </p>
              <p>
                <strong>Developer:</strong> {selectedProject.developer}
              </p>
              <p>
                <strong>Status:</strong> {selectedProject.status}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this project?</p>
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setDeleteDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDelete(selectedProject!._id)}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
