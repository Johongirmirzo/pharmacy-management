import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Pagination from "../../components/Pagination";
import PaginationFilter from "../../components/PaginationFilter";
import MedicineInventoryTable from "./MedicineInventoryTable";
import {
  MedicineInventorySection,
  MedicineInventoryHeader,
  MedicineInventoryTitle,
  MedicineInventoryBox,
} from "./index.styled";
import { IMedicine } from "../../redux/medicine";

const MedicineInventory = () => {
  const medicines = useSelector((state: RootState) => state.medicine.medicines);
  const [paginatedMedicines, setPaginatedMedicines] = useState<IMedicine[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    const endOffset = pageOffset + itemsPerPage;
    setPaginatedMedicines(medicines.slice(pageOffset, endOffset));
    setPageCount(Math.ceil(medicines.length / itemsPerPage));
  }, [itemsPerPage, medicines, pageOffset]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % medicines.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };
  const updateItemsPerPage = (itemPerPageAmount: number) =>
    setItemPerPage(itemPerPageAmount);

  console.log({ pageCount, pageOffset, itemsPerPage });
  return (
    <MedicineInventorySection>
      <MedicineInventoryHeader>
        <MedicineInventoryTitle>Medicine Invetory</MedicineInventoryTitle>
      </MedicineInventoryHeader>
      <MedicineInventoryTable medicines={paginatedMedicines} />
      {medicines.length > 5 && (
        <MedicineInventoryBox>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          <PaginationFilter
            updateItemsPerPage={updateItemsPerPage}
            itemType="Medicines"
          />
        </MedicineInventoryBox>
      )}
    </MedicineInventorySection>
  );
};

export default MedicineInventory;
