"use client";
import React, { useEffect, useState } from "react";

import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

type Lead = {
  id: number;
  name: string;
  email: string;
  status: string;
};

const Leads = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setLeads([
        { id: 1, name: "John Doe", email: "john@example.com", status: "New" },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          status: "In Progress",
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-light-900 dark:bg-dark-900 size-full p-6">
      <Header
        title="Leads Management"
        description="Track and manage all your client leads efficiently."
        buttonLabel="Add New Lead +"
        buttonHref="/dashboard/leads/add"
      />
      <div className="mt-6 rounded-lg border border-gray-300 p-4 dark:border-gray-700">
        {isLoading ? (
          <Spinner />
        ) : leads.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b">
                  <td className="p-2">{lead.name}</td>
                  <td className="p-2">{lead.email}</td>
                  <td className="p-2">{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState message="No leads available." />
        )}
      </div>
    </div>
  );
};

export default Leads;
