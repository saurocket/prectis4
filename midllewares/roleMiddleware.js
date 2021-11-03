

const roleMiddleware = async (roles) => {
    return function (req,res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.message('user is not autorisation')

        }

        //token verify


        // const USER.role.filet(i => i === ADMIN)

        //if user.lenght ====> nex
        //req.user = user
        // next()


    }
}
