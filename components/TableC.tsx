"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface TableCProps {
  projectDetails: {
    status: string;
    developer: string;
    numberOfProperties: number;
    startingPrice: number;
    area: number;
    neighborhood: string;
    services: string[];
  };
}

const TableC: React.FC<TableCProps> = ({ projectDetails }) => {
  const {
    status,
    developer,
    numberOfProperties,
    startingPrice,
    area,
    neighborhood,
    services,
  } = projectDetails;

  return (
    <Table className="min-w-full border-collapse overflow-hidden rounded-lg border shadow-md">
      <TableBody>
        <TableRow className="bg-gray-50">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            Status
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {status} Ongoing
          </TableCell>
        </TableRow>
        <TableRow className="bg-white">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            Developer
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {developer}
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            No. of Properties
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {numberOfProperties}
          </TableCell>
        </TableRow>
        <TableRow className="bg-white">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            Starting Price
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {startingPrice} SAR
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            Area
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {area} m²
          </TableCell>
        </TableRow>
        <TableRow className="bg-white">
          <TableCell className="border-b px-4 py-2 font-medium text-gray-600">
            Neighborhood
          </TableCell>
          <TableCell className="border-b px-4 py-2 text-gray-800">
            {neighborhood}
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50">
          <TableCell className="px-4 py-2 font-medium text-gray-600">
            Services
          </TableCell>
          <TableCell className="px-4 py-2 text-gray-800">
            {Array.isArray(services) && services.length > 0 ? (
              services.map((service, index) => (
                <span key={index}>{service} | </span>
              ))
            ) : (
              <span>No services available</span>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableC;
