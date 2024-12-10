const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        function remove(object) {
            return object.map(element => {
                delete element.code;
                return element;
            });
        }
        const newobject = remove(err.errors);
        res.status(400).json({ message: err.errors });
    }
};

module.exports = validate;