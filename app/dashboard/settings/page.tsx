"use client";
import React, { useEffect, useState } from "react";

import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

type Setting = {
  id: number;
  name: string;
  value: string;
};

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<Setting[]>([]);

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
    <div className="bg-light-900 dark:bg-dark-900 size-full p-6">
      <Header
        title="Settings"
        description="Your Setings"
        buttonLabel="Mark All As Seen"
        buttonHref=""
      />
      <div className="mt-6 rounded-lg border border-gray-300 p-4 dark:border-gray-700">
        {isLoading ? (
          <Spinner />
        ) : settings.length > 0 ? (
          <ul>
            {settings.map((setting) => (
              <li key={setting.id} className="border-b p-2">
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
