export default (): string => {
    const secret = process.env.JWT_SECRET
    if (!secret) throw 'JWT_SECRET NOT DEFINED'
    return secret
}