import React from 'react';
import { PageCoordinates } from '../../interfaces_old/page.tsx';
import { NavigationDirection } from '../../types_old/navigationDirection.tsx';
import { NavigationMap } from '../../constants_old/navigationMap.tsx';

export function navigate(directionOrPath: NavigationDirection | Array<NavigationDirection>, setCurrentPage: React.Dispatch<React.SetStateAction<PageCoordinates>>): void {
    (Array.isArray(directionOrPath) ? directionOrPath : [directionOrPath]).forEach(direction => {
        setCurrentPage(currentPage => {
            const [dir, rowOffset] = {
                left: [0, 0],
                up: [1, -1],
                down: [2, 1],
                right: [3, 0]
            }[direction];

            if (dir !== undefined) {
                const newColumnIndex = NavigationMap[currentPage.rowIndex][currentPage.columnIndex][dir];
                const newRowIndex = currentPage.rowIndex + rowOffset;
                const nextRow = document.querySelectorAll('div.columns')[newRowIndex];
                const nextPage = nextRow?.childNodes[newColumnIndex] as HTMLElement;
                if (nextPage) {
                    if (newRowIndex !== currentPage.rowIndex) nextRow.scrollTo({ left: nextPage.offsetLeft, behavior: 'auto' });
                    nextPage.scrollIntoView({ behavior: 'smooth' });
                    return { columnIndex: newColumnIndex, rowIndex: newRowIndex };
                }
            }
            return currentPage;
        });
    });
}

export function findNavigationPath(from: PageCoordinates, to: PageCoordinates): Array<NavigationDirection> | null {
    const queue: [[PageCoordinates, Array<NavigationDirection>]] = [[from, []]];
    const visited = new Set<string>();
    visited.add(`${from.columnIndex},${from.rowIndex}`);
    while (queue.length) {
        const [current, path] = queue.shift()!;
        if (current.columnIndex === to.columnIndex && current.rowIndex === to.rowIndex) return path;
        const directions: Array<NavigationDirection> = ['left', 'up', 'down', 'right'];
        directions.forEach((direction, directionIndex) => {
            const newColumnIndex = NavigationMap[current.rowIndex][current.columnIndex][directionIndex];
            if (newColumnIndex !== null) {
                const newRowIndex = direction === 'up' ? current.rowIndex - 1 : direction === 'down' ? current.rowIndex + 1 : current.rowIndex;
                const newPosition = { columnIndex: newColumnIndex, rowIndex: newRowIndex };
                const key = `${newPosition.columnIndex},${newPosition.rowIndex}`;
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([newPosition, [...path, direction]]);
                }
            }
        });
    }
    return null;
}