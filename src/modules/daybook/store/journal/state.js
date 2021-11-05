

/* export default () => ({

}) */



export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1723823742
            date: new Date().toDateString(), // sat 27, jun
            text: 'If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. For more information, see Creating a pull request from a fork" and About forks.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //1723823742
            date: new Date().toDateString(), // sat 27, jun
            text: 'You can specify which branch you d like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.',
            picture: null,
        },
    ]
})