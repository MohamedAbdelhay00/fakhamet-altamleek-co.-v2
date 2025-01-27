"use client";
import React, { useEffect, useState } from "react";

import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

type Admin = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

const ManageAdmin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setAdmins([
        { id: 1, name: "Admin 1", email: "admin1@example.com", active: true },
        { id: 2, name: "Admin 2", email: "admin2@example.com", active: false },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleActivation = (id: number) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === id ? { ...admin, active: !admin.active } : admin
      )
    );
  };

  return (
    <div className="size-full bg-light-800 p-6 dark:bg-dark-500">
      {/* Header */}
      <Header
        title="Manage Admins"
        description="Add, update, and control admin accounts."
        buttonLabel="Add New Admin +"
        buttonHref="/dashboard/admin/add"
      />

      <div className="mt-6 rounded-lg border border-gray-300 p-4 dark:border-gray-700">
        {isLoading ? (
          <Spinner />
        ) : admins.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-gray-100 dark:bg-gray-800">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="border-b">
                  <td className="p-4">{admin.name}</td>
                  <td className="p-4">{admin.email}</td>
                  <td className="p-4">
                    <span
                      className={`${
                        admin.active
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      } rounded-md px-2 py-1 text-sm`}
                    >
                      {admin.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={admin.active}
                        onChange={() => toggleActivation(admin.id)}
                        className="hidden"
                      />
                      <span
                        className={`flex h-5 w-10 items-center rounded-full bg-gray-300 p-1 transition ${
                          admin.active ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <span
                          className={`size-4 rounded-full bg-white shadow transition${
                            admin.active ? "translate-x-5" : ""
                          }`}
                        />
                      </span>
                      <span className="text-sm">
                        {admin.active ? "Deactivate" : "Activate"}
                      </span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState message="No admin accounts available." />
        )}
      </div>
    </div>
  );
};

export default ManageAdmin;
