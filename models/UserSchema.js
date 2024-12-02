const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true,
            unique: true 
        },
        email: { 
            type: String, 
            required: true,
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            enum: ['admin', 'member'], 
            default: 'member' 
        }
    },
    { timestamps: true }
);
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

module.exports = mongoose.model('users', UserSchema);
