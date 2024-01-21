import jwt from "jsonwebtoken";

// Secret
const JWT_SECRET = process.env.JWT_SECRET || "secret.001";
// Firmar el token
const generateToken = (id: string): string => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' })
}

// Verificar el token
const verifyToken = (token: string) => {

    const verify = jwt.verify(token, JWT_SECRET)
    return verify;
}

export {
    generateToken,
    verifyToken
}