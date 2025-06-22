import jwt from 'jsonwebtoken';

const refreshTokens = new Set(); // Use Redis/DB in production

export const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

  refreshTokens.add(refreshToken);
  return { accessToken, refreshToken };
};

export const verifyRefreshToken = (token) => {
  if (!refreshTokens.has(token)) throw new Error('Invalid refresh token');

  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  return decoded;
};

export const revokeRefreshToken = (token) => {
  refreshTokens.delete(token);
};
