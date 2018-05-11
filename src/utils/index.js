// FindIndexById

export const findByIndexId = (arr, id) => {
    let result = -1;
    arr.forEach((ele, index) => {
        if (ele.id === id) {
            result = index;
        }
    });

    return result;
}