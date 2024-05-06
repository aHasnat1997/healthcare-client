'use server';

export async function LoginUser(payload: { email: string, password: string }) {
  const res = await fetch(`http://localhost:3030/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  });
  const result = await res.json();
  return result;
};
