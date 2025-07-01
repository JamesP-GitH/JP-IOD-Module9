"use strict";

const dogImageCache = {
    images: [],
};

function getAll() {
    return dogImageCache.images;
}

function get(index) {
    return dogImageCache.images[index];
}

function add(url) {
    dogImageCache.images.push(url);
    return url;
}

function update(index, newUrl) {
    if (index < 0 || index >= dogImageCache.images.length) return null;
    dogImageCache.images[index] = newUrl;
    return newUrl;
}

function remove(index) {
    if (index < 0 || index >= dogImageCache.images.length) return null;
    return dogImageCache.images.splice(index, 1)[0];
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
};
