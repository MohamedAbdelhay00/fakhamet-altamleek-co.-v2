"use client";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";

const ManageAdmin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [admins, setAdmins] = useState<any[]>([]);

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
    <div className="p-6 bg-light-900 dark:bg-dark-900 h-full w-full">
      {/* Header */}
      <Header
        title="Manage Admins"
        description="Add, update, and control admin accounts."
        buttonLabel="Add New Admin +"
        buttonHref="/dashboard/admin/add"
      />

      <div className="mt-6 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
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
                          ? "text-green-600 bg-green-100"
                          : "text-red-600 bg-red-100"
                      } px-2 py-1 rounded-md text-sm`}
                    >
                      {admin.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={admin.active}
                        onChange={() => toggleActivation(admin.id)}
                        className="hidden"
                      />
                      <span
                        className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
                          admin.active ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
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
