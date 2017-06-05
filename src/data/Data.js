// const getX = () => {
//     const m = 100
//     const d = 2
//     let data = []
//     for (let i = 0; i < m; i++) {
//         let f1 = Math.random() * 300
//         let f2 = Math.random() * 300
//         data[i] = [
//             f1 - (f1 % 1),
//             f2 - (f2 % 1),
//         ]
//     }
//     return data
// }

function getX() {
    return [  
        [1, 2],
        [2, 1],
        [2, 4], 
        [1, 3],
        [2, 2],
        [3, 1],
        [1, 1],

        [7, 3],
        [8, 2],
        [6, 4],
        [7, 4],
        [8, 1],
        [9, 2],

        [10, 8],
        [9, 10],
        [7, 8],
        [7, 9],
        [8, 11],
        [9, 9],
    ]
}

const Data = { getX }
export default Data