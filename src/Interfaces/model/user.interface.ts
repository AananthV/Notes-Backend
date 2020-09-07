import { Document } from 'mongoose'

interface User extends Document {
    email: string;
    username: string;
    password: string;
    mobileNumber: string;
    isVerified: boolean;
    verificationCode: string;
    passwordResetToken: string;
    lastUpdate: Date;
}

export default User;
