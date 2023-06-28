const getOffset = (currentPage = 1, listPerPage = 10) => {
    return (currentPage - 1) * [listPerPage];
}
module.exports = {
    getOffset
}