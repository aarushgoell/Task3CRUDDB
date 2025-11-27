function authMiddle(req, res, next) {

    const orig_token = req.headers['authorization'];
    if (!orig_token) {
        return res.status(401).json({
            message: "No Authorization header provided"
        })
    }

    console.log("Access granted Token", orig_token);
    next();
}

module.exports = {
    authMiddle
}