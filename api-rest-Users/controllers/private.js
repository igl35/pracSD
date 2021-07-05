const private = {};

private.getHome = (req, res) => {
    res.json(req.user_id);
};

module.exports = private;