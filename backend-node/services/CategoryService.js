

function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (!parentId) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for (let cat of category) {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: createCategories(categories, cat._id)
        })
    }
    return categoryList;
}

module.exports = {
    createCategories
};