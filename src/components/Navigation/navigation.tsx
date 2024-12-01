import React, { ReactNode, useEffect } from 'react';
import { CurrentPageProps, PageCoordinates } from '../../interfaces/page.tsx';
import './navigation.scss';

/*left, up, down, right, leftLabel, upLabel, downLabel, rightLabel */
export const navigationMap: {
    0: Array<Array<null | number | string>>,
    1: Array<Array<null | number | string>>
} = {
    0: [
        [null, null, 0, 1, null, null, '?', 'Portfolio &rarr;'],
        [null, null, 1, 2, null, null, '&larr; Riddle', 'Me &rarr;'],
        [1, null, 2, 3, '&larr; 42', null, 'My Journey &darr;', 'Skills &rarr;'],
        [2, null, null, 4, 'Me &larr;', null, null, 'Projects &rarr;'],
        [3, null, 4, 5, 'Skills &larr;', null, 'Case Study &darr;', '&rarr;'],
        [4, null, null, 6, '&larr;', null, 'Try it', '&rarr;'], //Exception 1
        [5, null, null, 7, '&larr;', null, 'Try it', 'Imprint &rarr;'], //Exception 2
        [6, null, null, null, 'Projects &larr;', null, null, null]

    ],
    1: [
        [null, 1, null, null, 'Wikipedia', '&uarr;', null, null], //Exception 0
        [null, 1, null, null, null, '&uarr;', null, null],
        [null, 2, null, 3, null, '&uarr;', null, '&rarr;'],
        [2, 2, null, null, '&larr;', '&uarr;', null, null],
        [null, 4, null, 5, null, '&uarr;', null, '&rarr;'],
        [4, 4, null, 6, '&larr;', '&uarr;', null, '&rarr;'],
        [5, 4, null, 7, '&larr;', '&uarr;', null, '&rarr;'],
        [6, 4, null, 8, '&larr;', '&uarr;', null, '&rarr;'],
        [7, 4, null, 9, '&larr;', '&uarr;', null, '&rarr;'],
        [8, 4, null, 10, '&larr;', '&uarr;', null, '&rarr;'],
        [9, 4, null, 11, '&larr;', '&uarr;', null, '&rarr;'],
        [10, 4, null, 12, '&larr;', '&uarr;', null, '&rarr;'],
        [11, 4, null, 13, '&larr;', '&uarr;', null, '&rarr;'],
        [12, 4, null, 14, '&larr;', '&uarr;', null, '&rarr;'],
        [13, 4, null, 15, '&larr;', '&uarr;', null, '&rarr;'],
        [14, 4, null, 16, '&larr;', '&uarr;', null, '&rarr;'],
        [15, 4, null, 17, '&larr;', '&uarr;', null, '&rarr;'],
        [16, 4, null, null, '&larr;', '&uarr;', null, null]
    ]
};

function moveNavigationLine(columnIndex: number = 0, rowIndex: number = 0) {
    const navigationLine = document.querySelector('div.navigationLine') as HTMLDivElement;
    const numberOfColumns = navigationMap[rowIndex].length;
    const lineWidth = window.innerWidth / numberOfColumns;
    const left = columnIndex * lineWidth;
    navigationLine.style.width = `${lineWidth}px`;
    navigationLine.style.left = `${left}px`;
    navigationLine.style.transition = 'left 0.3s ease';
}

export function navigate(directionOrPath: 'left' | 'up' | 'down' | 'right' | Array<'left' | 'up' | 'down' | 'right'>, setCurrentPage: React.Dispatch<React.SetStateAction<PageCoordinates>>): void {
    (Array.isArray(directionOrPath) ? directionOrPath : [directionOrPath]).forEach(direction => {
        setCurrentPage(currentPage => {
            const [dir, rowOffset] = {
                left: [0, 0],
                up: [1, -1],
                down: [2, 1],
                right: [3, 0]
            }[direction];

            if (dir !== undefined) {
                const newColumnIndex = navigationMap[currentPage.rowIndex][currentPage.columnIndex][dir];
                const newRowIndex = currentPage.rowIndex + rowOffset;
                const nextRow = document.querySelectorAll('div.columns')[newRowIndex];
                const nextPage = nextRow?.childNodes[newColumnIndex] as HTMLElement;
                if (nextPage) {
                    if (newRowIndex !== currentPage.rowIndex) nextRow.scrollTo({ left: nextPage.offsetLeft, behavior: 'auto' });
                    moveNavigationLine(newColumnIndex, newRowIndex);
                    nextPage.scrollIntoView({ behavior: 'smooth' });
                    return { columnIndex: newColumnIndex, rowIndex: newRowIndex };
                }
            }
            return currentPage;
        });
    });
}

export function findNavigationPath(from: PageCoordinates, to: PageCoordinates): Array<'left' | 'up' | 'down' | 'right'> | null {
    const queue: [[PageCoordinates, Array<'left' | 'up' | 'down' | 'right'>]] = [[from, []]];
    const visited = new Set<string>();
    visited.add(`${from.columnIndex},${from.rowIndex}`);
    while (queue.length) {
        const [current, path] = queue.shift()!;
        if (current.columnIndex === to.columnIndex && current.rowIndex === to.rowIndex) return path;
        const directions: Array<'left' | 'up' | 'down' | 'right'> = ['left', 'up', 'down', 'right'];
        directions.forEach((direction, directionIndex) => {
            const newColumnIndex = navigationMap[current.rowIndex][current.columnIndex][directionIndex];
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

export default function Navigation({ currentPage, setCurrentPage }: CurrentPageProps) {

    function createNavigationButtons(): Array<ReactNode> {
        const navigationDivs: Array<ReactNode> = [];
        Object.keys(navigationMap).forEach(row => {
            const columns: Array<Array<null | number | string>> = navigationMap[row];
            columns.forEach(([left, up, down, right, leftLabel, upLabel, downLabel, rightLabel], index) => {
                const buttons: Array<ReactNode> = [];
                if (row === '1' && index === 0) { // Exception 0
                    buttons.push(
                        React.createElement('button', { key: 'left', onClick: () => window.open('https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'), dangerouslySetInnerHTML: { __html: leftLabel as string } }),
                        React.createElement('button', { key: 'up', onClick: () => navigate('up', setCurrentPage), dangerouslySetInnerHTML: { __html: upLabel as string } })
                    );
                } else if (row === '0' && index === 5) { // Exception 1
                    buttons.push(
                        React.createElement('button', { key: 'left', onClick: () => navigate('left', setCurrentPage), dangerouslySetInnerHTML: { __html: leftLabel as string } }),
                        React.createElement('button', { key: 'tryIt', onClick: () => window.open('https://oles-myflix.netlify.app'), dangerouslySetInnerHTML: { __html: downLabel as string } }),
                        React.createElement('button', { key: 'right', onClick: () => navigate('right', setCurrentPage), dangerouslySetInnerHTML: { __html: rightLabel as string } })
                    );
                } else if (row === '0' && index === 6) { // Exception 2
                    buttons.push(
                        React.createElement('button', { key: 'left', onClick: () => navigate('left', setCurrentPage), dangerouslySetInnerHTML: { __html: leftLabel as string } }),
                        React.createElement('button', { key: 'tryIt', onClick: () => window.open('https://pokedex.ole-koester.de'), dangerouslySetInnerHTML: { __html: downLabel as string } }),
                        React.createElement('button', { key: 'right', onClick: () => navigate('right', setCurrentPage), dangerouslySetInnerHTML: { __html: rightLabel as string } })
                    );
                } else {
                    if (left !== null) buttons.push(React.createElement('button', { key: 'left', onClick: () => navigate('left', setCurrentPage), dangerouslySetInnerHTML: { __html: leftLabel as string } }));
                    if (up !== null) buttons.push(React.createElement('button', { key: 'up', onClick: () => navigate('up', setCurrentPage), dangerouslySetInnerHTML: { __html: upLabel as string } }));
                    if (down !== null) buttons.push(React.createElement('button', { key: 'down', onClick: () => navigate('down', setCurrentPage), dangerouslySetInnerHTML: { __html: downLabel as string } }));
                    if (right !== null) buttons.push(React.createElement('button', { key: 'right', onClick: () => navigate('right', setCurrentPage), dangerouslySetInnerHTML: { __html: rightLabel as string } }));
                }
                const navigationDiv = React.createElement('div', { className: 'navigation', key: `${row}-${index}` }, buttons);
                navigationDivs.push(navigationDiv);
            });
        });
        return navigationDivs;
    }

    function handleArrowKeyPress(event: KeyboardEvent) {
        const keyMap = {
            ArrowLeft: (currentPage.columnIndex === 1 && currentPage.rowIndex === 0) ? 'down' : 'left',
            ArrowRight: 'right',
            ArrowUp: 'up',
            ArrowDown: currentPage.columnIndex === 1 && currentPage.rowIndex === 0 ? null : 'down'
        };
        if (keyMap[event.key]) {
            navigate(keyMap[event.key], setCurrentPage);
        }
    };

    useEffect(() => {
        let offset = 0;
        for (let i = 0; i < currentPage.rowIndex; i++) {
            offset += document.querySelectorAll('div.columns')[i].children.length;
        }
        offset += currentPage.columnIndex;
        document.querySelectorAll('div.rows>div.navigation').forEach((container, index) => {
            const navigationDiv = container as HTMLDivElement;
            navigationDiv.style.opacity = index === offset ? '1' : '0';
            navigationDiv.style.zIndex = index === offset ? '1' : '0';
        });
        window.addEventListener('keyup', handleArrowKeyPress);
        return () => {
            window.removeEventListener('keyup', handleArrowKeyPress);
        };
        // eslint-disable-next-line
    }, [currentPage]);

    return (
        <>
            {createNavigationButtons()}
            <div className='navigationLine' />
        </>);
}