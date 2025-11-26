const z = require("zod");

const UserSchema = z.object({
    email: z.email(),
    password: z.string().min(6, 'The password must be at least 6 characters long').max(32, 'The password must be a maximun 32 characters'),
    name: z.string().min(6, 'The name must be at least 6 characters long').max(32, 'The name can be only of a maximun of 32 characters')
})

module.exports = {
    UserSchema
}