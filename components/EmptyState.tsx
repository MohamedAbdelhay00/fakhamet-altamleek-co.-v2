import React from "react";

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center text-gray-500 mt-4">
    <p>{message}</p>
  </div>
);

export default EmptyState;
