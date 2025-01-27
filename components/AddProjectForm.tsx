"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ProjectSchema } from "@/lib/validations";

import { DialogFooter } from "./ui/dialog";

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
          <Label htmlFor="title-en">Title (English)</Label>
          <Input id="title-en" {...register("data.en.title")} />
          {errors.data?.en?.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.data.en.title.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="title-ar">Title (Arabic)</Label>
          <Input id="title-ar" {...register("data.ar.title")} />
          {errors.data?.ar?.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.data.ar.title.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="startingPrice">Starting Price</Label>
          <Input
            id="startingPrice"
            type="number"
            {...register("startingPrice")}
          />
          {errors.startingPrice && (
            <p className="mt-1 text-sm text-red-500">
              {errors.startingPrice.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="area">Area</Label>
          <Input id="area" type="number" {...register("area")} />
          {errors.area && (
            <p className="mt-1 text-sm text-red-500">{errors.area.message}</p>
          )}
        </div>
        {/* Add more fields as defined in ProjectSchema */}
      </div>
      <DialogFooter>
        <Button type="submit">Submit</Button>
      </DialogFooter>
    </form>
  );
};
