import { auth } from 'express-oauth2-jwt-bearer';

// Với việc dùng thuật toán RS256, kết hợp express-oauth2-jwt-bearer sẽ tự động xử lý việc lấy và sử dụng khóa công khai từ Auth0 thông qua cơ chế jwks.json, do đó không cần phải cung cấp secret trong quá trình verify JWT.
const auth0JwtCheck = auth({
  audience: 'https://node-server-sso-g7b5.onrender.com',
  issuerBaseURL: 'https://dev-36l1kpwvov80hkg5.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});

export const authMiddleware = {
  auth0JwtCheck,
};
