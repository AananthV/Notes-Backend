interface User {
    _id: string;
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
