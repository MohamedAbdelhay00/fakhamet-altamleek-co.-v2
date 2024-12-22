import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const TableC = () => {
  return (
    <Table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-300 shadow-md">
      <TableBody>
        <TableRow className="bg-gray-50">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600">
            Finishing
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800">
            Not finished
          </TableCell>
        </TableRow>
        <TableRow className="bg-white">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600">
            Developer
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800">
            Fakhamet Altamleek
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600">
            No. of properties
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800">
            150
          </TableCell>
        </TableRow>
        <TableRow className="bg-white">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600">
            Starts from
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800">
            300,000 SAR
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50">
          <TableCell className="px-4 py-2 font-medium text-gray-600">
            Area
          </TableCell>
          <TableCell className="px-4 py-2 text-gray-800">
            70 m² - 115 m²
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableC;
