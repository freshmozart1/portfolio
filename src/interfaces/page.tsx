import React from "react";

export interface PageCoordinates {
    columnIndex: number,
    rowIndex: number
}
export interface CurrentPageProps {
    currentPage: PageCoordinates,
    setCurrentPage: React.Dispatch<React.SetStateAction<PageCoordinates>>
}