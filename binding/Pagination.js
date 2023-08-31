const Pagination = {
    array: [],
    currentOne: null,
    page: 1,
    pageItems: null,
    init (arr, number) {
        this.array = arr;
        this.pageItems = number;
        this.currentOne = arr.filter((val, index) => index < this.pageItems);
    },
    firstPage () {
        const arr = this.array;
        this.currentOne = arr.filter((val, index) => index < this.pageItems);
        this.page = 1;
    },
    lastPage () {
        const arr = this.array;
        const lastPage = Math.round(arr.length / this.pageItems);
        this.currentOne = arr.filter((val, index) => index >= Math.floor(arr.length / this.pageItems) * this.pageItems);
        this.page = lastPage;
    },
    getPageItems () {
        return this.currentOne;
    },
    nextPage () {
        const currentPage = this.page;
        const arr = this.array;
        this.currentOne = arr.filter((val, index) => {
            return ((index + currentPage * this.pageItems >= (currentPage * 2) * this.pageItems) && 
                                                                (index < (currentPage + 1) * this.pageItems));
        });
        this.page = this.page + 1;;
        return this;
    },
    prevPage () {
        this.page = this.page - 1;
        const currentPage = this.page - 1;
        const arr = this.array;
        this.currentOne = arr.filter((val, index) => {
            return ((index + currentPage * this.pageItems >= (currentPage * 2) * this.pageItems) && 
                                                                (index < (currentPage + 1) * this.pageItems));
        });
        return this;
        },
    goToPage (n) {
        this.currentOne = this.array.filter((val, index) => {
            return (index + (n - 1) * this.pageItems >= ((n - 1) * 2) * this.pageItems) && 
                                                                (index < ((n - 1) + 1) * this.pageItems);
        });
        this.page = n;
    },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
console.log(Pagination.getPageItems()); // ["m", "n", "o", "p"]
Pagination.goToPage(3); // current page must be set to 3
console.log(Pagination.getPageItems()); // ["i", "j", "k", "l"] 
Pagination.prevPage().prevPage();
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.lastPage();
console.log(Pagination.getPageItems()); // ["y", "z"]
Pagination.firstPage();
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]