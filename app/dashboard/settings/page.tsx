"use client";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<any[]>([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setSettings([
        { id: 1, name: "Theme", value: "Dark" },
        { id: 2, name: "Notifications", value: "Enabled" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-6 bg-light-900 dark:bg-dark-900 h-full w-full">
      <Header
        title="Settings"
        description="Your Setings"
        buttonLabel="Mark All As Seen"
        buttonHref=""
      />
      <div className="mt-6 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        {isLoading ? (
          <Spinner />
        ) : settings.length > 0 ? (
          <ul>
            {settings.map((setting) => (
              <li key={setting.id} className="p-2 border-b">
                <strong>{setting.name}:</strong> {setting.value}
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState message="No settings available." />
        )}
      </div>
    </div>
  );
};

export default Settings;
