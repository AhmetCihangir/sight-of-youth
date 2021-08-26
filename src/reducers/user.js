const userDetail = { role : "customer" , logged : false}

const users = (user = userDetail,action) => {
    switch (action.type){
        case "LOGGED_IN":
            return {...user,...action.payload,logged : true}
        case "SIGNUP":
            return user
        case "LOGGED_OUT":
            return userDetail
        default :
            return user
    }
}

export default users