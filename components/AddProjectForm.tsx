"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectSchema } from "@/lib/validations";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Toast } from "@radix-ui/react-toast";
import axios from "axios";
import { DialogFooter } from "./ui/dialog";
import { toast } from "@/hooks/use-toast";

type FormData = z.infer<typeof ProjectSchema>;

export const AddProjectForm = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProjectSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/projects", data);
      toast({ title: "Project added successfully!" });
      onClose();
    } catch (error) {
      console.error("Error adding project:", error);
      toast({ title: "Error adding project", variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4 py-2 pb-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        {/* Add more fields as needed */}
      </div>
      <DialogFooter>
        <Button type="submit">Submit</Button>
      </DialogFooter>
    </form>
  );
};
