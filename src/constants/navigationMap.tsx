export type NavigationMapCell = [
    (null | number),
    (null | number),
    (null | number),
    (null | number),
    (null | string),
    (null | string),
    (null | string),
    (null | string)
];

type NavigationMapRow = Array<NavigationMapCell>;

export const NavigationMap: {
    0: NavigationMapRow,
    1: NavigationMapRow
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