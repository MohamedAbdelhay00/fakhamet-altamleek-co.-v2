"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { LocalizedDataSchema, ProjectSchema } from "@/lib/validations";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";

type FormData = {
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
};

const ProjectsAddEdit = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    data: {
      en: { title: "", description: "", neighborhood: "", services: [] },
      ar: { title: "", description: "", neighborhood: "", services: [] },
    },
    startingPrice: 0,
    area: 0,
    rooms: 0,
    baths: 0,
    floors: 0,
    status: "ongoing",
    developer: "",
    numberOfProperties: 0,
    images: [],
    coverImage: "",
  });

  const [newService, setNewService] = useState<string>("");

  useEffect(() => {
    if (projectId) {
      const fetchProject = async () => {
        try {
          const response = await axios.get(`/api/projects/${projectId}`);
          setFormData(response.data.data);
        } catch (error) {
          console.error("Failed to fetch project:", error);
        }
      };

      fetchProject();
    }
  }, [projectId]);

  // const validateStep = (): boolean => {
  //   try {
  //     if (step === 1) {
  //       ProjectSchema.pick({
  //         data: z.object({
  //           en: LocalizedDataSchema,
  //         }),
  //       }).parse({
  //         data: {
  //           en: formData.data.en,
  //         },
  //       });
  //     } else if (step === 2) {
  //       ProjectSchema.pick({
  //         data: z.object({
  //           ar: LocalizedDataSchema,
  //         }),
  //       }).parse({
  //         data: {
  //           ar: formData.data.ar,
  //         },
  //       });
  //     } else if (step === 3) {
  //       ProjectSchema.pick({
  //         startingPrice: ProjectSchema.shape.startingPrice,
  //         area: ProjectSchema.shape.area,
  //         rooms: ProjectSchema.shape.rooms,
  //         baths: ProjectSchema.shape.baths,
  //         floors: ProjectSchema.shape.floors,
  //         developer: ProjectSchema.shape.developer,
  //         numberOfProperties: ProjectSchema.shape.numberOfProperties,
  //         coverImage: ProjectSchema.shape.coverImage,
  //       }).parse({
  //         startingPrice: Number(formData.startingPrice),
  //         area: Number(formData.area),
  //         rooms: Number(formData.rooms),
  //         baths: Number(formData.baths),
  //         floors: Number(formData.floors),
  //         developer: formData.developer,
  //         numberOfProperties: Number(formData.numberOfProperties),
  //         coverImage: formData.coverImage,
  //       });
  //     }
  //     setErrors({});
  //     return true;
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       const validationErrors: Record<string, string> = {};
  //       error.errors.forEach((e) => {
  //         validationErrors[e.path.join(".")] = e.message;
  //       });
  //       setErrors(validationErrors);
  //     }
  //     return false;
  //   }
  // };

  const handleNext = () => {
    // const isValid = validateStep();
    // if (isValid) {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleAddService = (language: "en" | "ar") => {
    if (!newService.trim()) return;
    setFormData({
      ...formData,
      data: {
        ...formData.data,
        [language]: {
          ...formData.data[language],
          services: [...formData.data[language].services, newService],
        },
      },
    });
    setNewService("");
  };

  const handleRemoveService = (language: "en" | "ar", index: number) => {
    setFormData({
      ...formData,
      data: {
        ...formData.data,
        [language]: {
          ...formData.data[language],
          services: formData.data[language].services.filter(
            (_, i) => i !== index
          ),
        },
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!validateStep()) return;

    try {
      if (projectId) {
        await axios.put(`/api/projects/${projectId}`, formData);
      } else {
        await axios.post(`/api/projects`, formData);
      }
      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Failed to submit project:", error);
    }
  };

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">
        <Link href="/dashboard/projects">
          <Image
            src="/icons/back.svg"
            width={40}
            height={40}
            alt="back"
            className=" inline"
          />
        </Link>
        {projectId ? "Edit Project" : "Add New Project"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Step 1: English Details
            </h2>
            <div>
              <label className="block text-sm font-medium">Title (EN)</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.data.en.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      en: { ...formData.data.en, title: e.target.value },
                    },
                  })
                }
              />
              {errors["data.en.title"] && (
                <p className="text-red-500">{errors["data.en.title"]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Description (EN)
              </label>
              <textarea
                className="w-full border rounded-md p-2"
                value={formData.data.en.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      en: { ...formData.data.en, description: e.target.value },
                    },
                  })
                }
              ></textarea>
              {errors["data.en.description"] && (
                <p className="text-red-500">{errors["data.en.description"]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Neighborhood (EN)
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.data.en.neighborhood}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      en: {
                        ...formData.data.en,
                        neighborhood: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Services (EN)</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-md p-2"
                  placeholder="Add a service"
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                />
                <Button type="button" onClick={() => handleAddService("en")}>
                  Add
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {formData.data.en.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded flex items-center gap-2"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => handleRemoveService("en", index)}
                      className="text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Step 2: Arabic Details
            </h2>
            <div>
              <label className="block text-sm font-medium">Title (AR)</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.data.ar.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      ar: { ...formData.data.ar, title: e.target.value },
                    },
                  })
                }
              />
              {errors["data.ar.title"] && (
                <p className="text-red-500">{errors["data.ar.title"]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Description (AR)
              </label>
              <textarea
                className="w-full border rounded-md p-2"
                value={formData.data.ar.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      ar: { ...formData.data.ar, description: e.target.value },
                    },
                  })
                }
              ></textarea>
              {errors["data.ar.description"] && (
                <p className="text-red-500">{errors["data.ar.description"]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Neighborhood (AR)
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.data.ar.neighborhood}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    data: {
                      ...formData.data,
                      ar: { ...formData.data.ar, neighborhood: e.target.value },
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Services (AR)</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-md p-2"
                  placeholder="Add a service"
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                />
                <Button type="button" onClick={() => handleAddService("ar")}>
                  Add
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {formData.data.ar.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded flex items-center gap-2"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => handleRemoveService("ar", index)}
                      className="text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-4">
              Step 3: Numeric Details
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Starting Price
              </label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.startingPrice}
                onChange={(e) =>
                  setFormData({ ...formData, startingPrice: +e.target.value })
                }
              />
              {errors.startingPrice && (
                <p className="text-red-500">{errors.startingPrice}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Area</label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: +e.target.value })
                }
              />
              {errors.area && <p className="text-red-500">{errors.area}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Rooms</label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.rooms}
                onChange={(e) =>
                  setFormData({ ...formData, rooms: +e.target.value })
                }
              />
              {errors.rooms && <p className="text-red-500">{errors.rooms}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Baths</label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.baths}
                onChange={(e) =>
                  setFormData({ ...formData, baths: +e.target.value })
                }
              />
              {errors.baths && <p className="text-red-500">{errors.baths}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Floors</label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.floors}
                onChange={(e) =>
                  setFormData({ ...formData, floors: +e.target.value })
                }
              />
              {errors.floors && <p className="text-red-500">{errors.floors}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Developer</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.developer}
                onChange={(e) =>
                  setFormData({ ...formData, developer: e.target.value })
                }
              />
              {errors.developer && (
                <p className="text-red-500">{errors.developer}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Number of Properties
              </label>
              <input
                type="number"
                className="w-full border rounded-md p-2"
                value={formData.numberOfProperties}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numberOfProperties: +e.target.value,
                  })
                }
              />
              {errors.numberOfProperties && (
                <p className="text-red-500">{errors.numberOfProperties}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Cover Image</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.coverImage}
                onChange={(e) =>
                  setFormData({ ...formData, coverImage: e.target.value })
                }
              />
              {errors.coverImage && (
                <p className="text-red-500">{errors.coverImage}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Images</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={formData.images.join(",")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: e.target.value.split(","),
                  })
                }
              />
              {errors.images && <p className="text-red-500">{errors.images}</p>}
            </div>
          </>
        )}
        <div className="flex justify-between">
          {step > 1 && (
            <Button type="button" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step < 3 && (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          )}
          {step === 3 && <Button type="submit">Submit</Button>}
        </div>
      </form>
    </div>
  );
};

export default ProjectsAddEdit;
