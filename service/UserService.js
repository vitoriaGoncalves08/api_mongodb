const User = require('../model/User')

const createUser = async(userData) =>{
    try {
      const user =  await User.create(userData)
      return user
    } catch (error) {
        
    }
}

module.exports = {createUser}