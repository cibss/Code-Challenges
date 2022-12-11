// [id, file name, parent id]
const directories = [
    [1, 'Dir 1', null], // root
    [2, 'Dir 2', 1], // dir 1
    [3, 'Dir 3', 2] // dir 2
]

// file belongs to directory
const files = [
    [1, 'File 1.txt', null], // no dir
    [2, 'File 2.txt', 1], // dir 1
    [3, 'File 3.txt', 2] // dir 2
]

let mergedArr = directories.concat(files);
let mergedObj = mergedArr.map((dir) => {
    return {
        id: dir[0],
        name: dir[1],
        parentId: dir[2]
    }
})
console.log('mergedObj', mergedObj);

// const a = '|--'

// directories.map((dir) => {
//     if (dir[2] === null) {
//         console.log(a + dir[1]);
//     } else {

//     }
// })

