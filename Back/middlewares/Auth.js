const Auth = {
    checkUser: (req, res, next) => {
        console.log(`Check User`);
        next();
    },
    checkRota: (req, res, next) => {
        console.log(`Check Rota`);
        next();
    }
};

export default Auth;
