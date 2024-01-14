const fs = require('fs')
// info: check if exist file with that name return boolean 
const isExist = fs.existsSync('./users.json')
if (!isExist) {
   // info: create file , get a path as argument and data (after stringify) 
   fs.writeFileSync('./users.json', JSON.stringify([]))
}

const findAll = () => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   return all
}

const create = (newUser) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const newList = [...all, newUser]
   fs.writeFileSync('./users.json', JSON.stringify(newList))
   return 'created!'
}


// TODO
// getOne
//  user by id
// read the file with fs
// run find
// return one user or null

// TODO
// deleteOne
//  user by id
// read the file with fs
// delete one new users list
// if not found return null
// save with fs the new list
// return ok

// TODO
// updateOne
//  user by id and data
// read the file with fs
// if not found return null
// save with fs the new list
// return the updated user


// TODO
// add here the created functions
module.exports = { findAll, create }
