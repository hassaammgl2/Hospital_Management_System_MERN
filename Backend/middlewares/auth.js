import { catchAsyncErrors } from './catchAsyncErrors.js'; 

export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const  token = req.cookies.adminToken
})