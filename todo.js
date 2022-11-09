
const todolist = () => {
    all = []
    const add = (todotask) => {
        all.push(todotask)
        console.log(all)
    }
    const MarkAsComplete = (index) => {
        all[index].complete = true
        console.log(all)
    }
    return { all, add, MarkAsComplete};
    }

