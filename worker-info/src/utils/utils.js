

//takes and array of object and checks the workedId, 
// if the workerId is not present in the users array =>  add it
export const configure = (arr) => {
    let users = [];

    arr.forEach(obj => {
        if (!users.includes(obj.workerId)){
            users.push(obj.workerId);
        }
    })
    return users;
}

