import React from "react";

export interface CurrentPage {
    columnIndex: number,
    rowIndex: number
}
export interface CurrentPageProps {
    currentPage: CurrentPage,
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>
}