const getX = () => {
    const m = 100
    const d = 2
    let data = []
    for (let i = 0; i < m; i++) {
        let f1 = Math.random() * 300
        let f2 = Math.random() * 300
        data[i] = [
            f1 - (f1 % 1),
            f2 - (f2 % 1),
        ]
    }
    return data
    // return [
    //     [15,2],
    //     [3,2],
    //     [51,4],
    //     [2,2],
    //     [98,2],
    //     [0,2],
    //     [3,2],
    //     [1,3],
    //     [1,22],
    //     [12,2]
    // ]
}

const Data = { getX }
export default Data