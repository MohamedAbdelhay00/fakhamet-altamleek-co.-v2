import { useTranslations } from "next-intl";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const TableC = () => {
  const t = useTranslations("projectDetails.details");
  const services = t.raw("services") as string[];

  return (
    <Table className="min-w-full border-collapse overflow-hidden rounded-lg border shadow-md">
      <TableBody>
        <TableRow className="bg-gray-50 dark:bg-dark-300">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("statusTitle")}
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800 dark:border-dark-400 dark:text-light-700">
            {t("status")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-white dark:bg-dark-200">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("developerTitle")}
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800 dark:border-dark-400 dark:text-light-700">
            {t("developer")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50 dark:bg-dark-300">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("noOfPropertiesTitle")}
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800 dark:border-dark-400 dark:text-light-700">
            {t("noOfProperties")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-white dark:bg-dark-200">
          <TableCell className="border-b border-gray-200 px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("startingPriceTitle")}
          </TableCell>
          <TableCell className="border-b border-gray-200 px-4 py-2 text-gray-800 dark:border-dark-400 dark:text-light-700">
            {t("startingPrice")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50 dark:bg-dark-300">
          <TableCell className="px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("areaTitle")}
          </TableCell>
          <TableCell className="px-4 py-2 text-gray-800 dark:text-light-700">
            {t("area")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-white dark:bg-dark-200">
          <TableCell className="px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("naighbourhoodTitle")}
          </TableCell>
          <TableCell className="px-4 py-2 text-gray-800 dark:text-light-700">
            {t("neighbourhood")}
          </TableCell>
        </TableRow>
        <TableRow className="bg-gray-50 dark:bg-dark-300">
          <TableCell className="px-4 py-2 font-medium text-gray-600 dark:border-dark-400 dark:text-light-500">
            {t("servicesTitle")}
          </TableCell>
          <TableCell className="px-4 py-2 text-gray-800 dark:text-light-700">
            {services.map((service, index) => (
              <span key={index}>{service} | </span>
            ))}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableC;
