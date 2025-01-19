interface UserPayload {
  userId: number;
  email: string;
  iat: number;  // issued at timestamp
  exp: number;  // expiration timestamp
}

function parseUserPayload(token: string): UserPayload | null {
  try {
    const payloadBase64 = token.split('.')[1];

    if (!payloadBase64) {
      return  null
    }

    // Convert base64 to JSON
    const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
    const jsonString = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonString) as UserPayload;
  } catch (error: any) {
    throw new Error(`Failed to parse JWT payload: ${error.message}`);
  }
}

export default parseUserPayload