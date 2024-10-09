export const tempData = (req, res, next) => {
    res.setError = (message) => {
        req.session.error = {
            message,
            reqCount: 0,
        };
    };

    if (req.session.err) {
        
        if (req.session.error.reqCount > 0) {
            req.session.error = null;
        } else {
            req.session.error.reqCount++;
            res.locals.error = req.session.error.message;
        };
    };

    next();
};