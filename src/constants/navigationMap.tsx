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
        //[null, null, 1, 2, null, null, '&larr; Riddle', 'Me &rarr;'],
        [null, null, 1, 2, null, null, 'My Journey &darr;', 'Skills &rarr;'],
        [1, null, null, 3, 'Me &larr;', null, null, 'Projects &rarr;'],
        [2, null, 3, 4, 'Skills &larr;', null, 'Case Study &darr;', '&rarr;'],
        [3, null, null, 5, '&larr;', null, 'Try it', '&rarr;'], //Exception 1
        [4, null, null, 6, '&larr;', null, 'Try it', 'Imprint &rarr;'], //Exception 2
        [5, null, null, null, 'Projects &larr;', null, null, null]

    ],
    1: [
        [null, 1, null, null, 'Wikipedia', '&uarr;', null, null], //Exception 0
        //[null, 1, null, null, null, '&uarr;', null, null],
        [null, 1, null, 2, null, '&uarr;', null, '&rarr;'],
        [1, 1, null, null, '&larr;', '&uarr;', null, null],
        [null, 3, null, 4, null, '&uarr;', null, '&rarr;'],
        [3, 3, null, 5, '&larr;', '&uarr;', null, '&rarr;'],
        [4, 3, null, 6, '&larr;', '&uarr;', null, '&rarr;'],
        [5, 3, null, 7, '&larr;', '&uarr;', null, '&rarr;'],
        [6, 3, null, 8, '&larr;', '&uarr;', null, '&rarr;'],
        [7, 3, null, 9, '&larr;', '&uarr;', null, '&rarr;'],
        [8, 3, null, 10, '&larr;', '&uarr;', null, '&rarr;'],
        [9, 3, null, 11, '&larr;', '&uarr;', null, '&rarr;'],
        [10, 3, null, 12, '&larr;', '&uarr;', null, '&rarr;'],
        [11, 3, null, 13, '&larr;', '&uarr;', null, '&rarr;'],
        [12, 3, null, 14, '&larr;', '&uarr;', null, '&rarr;'],
        [13, 3, null, 15, '&larr;', '&uarr;', null, '&rarr;'],
        [14, 3, null, 16, '&larr;', '&uarr;', null, '&rarr;'],
        [15, 3, null, null, '&larr;', '&uarr;', null, null]
    ]
};