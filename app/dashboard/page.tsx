"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const { resolvedTheme } = useTheme();

  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("/api/dashboard-data");
        setDashboardData(response.data.data);
      } catch (err) {
        setError("Failed to fetch dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!dashboardData) {
    return <div className="text-red-500">No data available.</div>;
  }

  const projectStatusData = {
    labels: ["Ongoing", "Completed"],
    datasets: [
      {
        data: [
          dashboardData.projectStatus.ongoing,
          dashboardData.projectStatus.completed,
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Welcome Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-6 rounded-lg bg-gradient-to-r from-black to-gray-700 p-6 text-white md:flex-row">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Mohamed!</h1>
          <p className="text-sm">
            Stay on top of your projects and manage them seamlessly.
          </p>
        </div>
        <div>
          <Link href="/dashboard/projects">
            <Button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-100">
              Add New Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Projects",
            value: dashboardData?.totalProjects || 0,
            icon: "/icons/projects.svg",
          },
          {
            title: "Sold Properties",
            value: dashboardData?.soldProperties || 0,
            icon: "/icons/sold.svg",
          },
          {
            title: "Leads",
            value: dashboardData?.leads || 0,
            icon: "/icons/leads.svg",
          },
          {
            title: "Revenue",
            value: `$${(dashboardData?.revenue || 0).toLocaleString()}`,
            icon: "/icons/revenue.svg",
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md dark:bg-dark-200"
          >
            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-black p-3">
              <img
                src={metric.icon}
                alt={metric.title}
                className="h-full w-full invert"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{metric.value}</h3>
              <p className="text-sm text-gray-500">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-md dark:bg-dark-200">
        <h2 className="mb-4 text-lg font-bold">Recent Activities</h2>
        <ul className="space-y-4">
          {dashboardData?.recentActivities?.length > 0 ? (
            dashboardData.recentActivities.map(
              (activity: any, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></div>
                  <p className="text-sm">{activity.title}</p>
                </li>
              )
            )
          ) : (
            <li>No recent activities found.</li>
          )}
        </ul>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-dark-200">
          <h2 className="mb-4 text-lg font-bold">Project Status Overview</h2>
          <div className="h-64 w-full flex items-center justify-center">
            <Pie data={projectStatusData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
