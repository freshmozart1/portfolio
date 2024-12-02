import React, { ReactNode, useEffect } from 'react';
import { CurrentPageProps, PageCoordinates } from '../../interfaces/page.tsx';
import { NavigationDirection } from '../../types/navigationDirection.tsx';
import { NavigationMap, NavigationMapCell } from '../../constants/navigationMap.tsx';
import './navigation.scss';

/*left, up, down, right, leftLabel, upLabel, downLabel, rightLabel */

function moveNavigationLine(columnIndex: number = 0, rowIndex: number = 0) {
    const navigationLine = document.querySelector('div.navigationLine') as HTMLDivElement;
    const numberOfColumns = NavigationMap[rowIndex].length;
    const lineWidth = window.innerWidth / numberOfColumns;
    const left = columnIndex * lineWidth;
    navigationLine.style.width = `${lineWidth}px`;
    navigationLine.style.left = `${left}px`;
    navigationLine.style.transition = 'left 0.3s ease';
}

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
                    moveNavigationLine(newColumnIndex, newRowIndex);
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

export default function Navigation({ currentPage, setCurrentPage }: CurrentPageProps) {

    function createNavigationButtons(): Array<ReactNode> {
        const navigationDivs: Array<ReactNode> = [];
        function handleTryIt(link: string, labels: { left: string | null, down: string | null, right: string | null }) {
            return ['left', 'down', 'right'].map((label) => {
                return React.createElement('button', {
                    key: label,
                    onClick: () => label === 'down' ? window.open(link) : navigate(label as NavigationDirection, setCurrentPage),
                    dangerouslySetInnerHTML: { __html: labels[label] }
                });
            });
        }
        Object.keys(NavigationMap).forEach(row => NavigationMap[row].forEach(([left, up, down, right, leftLabel, upLabel, downLabel, rightLabel]: NavigationMapCell, index) => {
            const buttons: Array<ReactNode> = [];
            if (row === '1' && index === 0) { // Exception 0
                buttons.push(
                    React.createElement('button', { key: 'left', onClick: () => window.open('https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'), dangerouslySetInnerHTML: { __html: leftLabel as string } }),
                    React.createElement('button', { key: 'up', onClick: () => navigate('up', setCurrentPage), dangerouslySetInnerHTML: { __html: upLabel as string } })
                );
            } else if (row === '0' && (index === 4 || index === 5)) { // Exception 1 & 2
                ['left', 'down', 'right'].forEach((dir, idx) => {
                    buttons.push(
                        React.createElement('button', {
                            key: dir,
                            onClick: () => dir === 'down' ? window.open(index === 4 ? 'https://oles-myflix.netlify.app' : 'https://pokedex.ole-koester.de') : navigate(dir as NavigationDirection, setCurrentPage),
                            dangerouslySetInnerHTML: { __html: [leftLabel, downLabel, rightLabel][idx] as string }
                        })
                    );
                });
            } else {
                ['left', 'up', 'down', 'right'].forEach((dir, i) => {
                    if ([left, up, down, right][i] !== null) {
                        buttons.push(React.createElement('button', {
                            key: dir,
                            onClick: () => navigate(dir as NavigationDirection, setCurrentPage),
                            dangerouslySetInnerHTML: { __html: [leftLabel, upLabel, downLabel, rightLabel][i] as string }
                        }));
                    }
                });
            }
            navigationDivs.push(React.createElement('div', { className: 'navigation', key: `${row}-${index}` }, buttons));
        }));
        return navigationDivs;
    }

    function handleArrowKeyPress(event: KeyboardEvent) {
        const keyMap = {
            ArrowLeft: 'left',
            ArrowRight: 'right',
            ArrowUp: 'up',
            ArrowDown: 'down'
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