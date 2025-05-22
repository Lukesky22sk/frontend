// src/api.js
const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchData() {
  const res = await fetch(`${API_URL}/api/data`);
  return res.json();
}

export async function postForm(data) {
  const res = await fetch(`${API_URL}/api/form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
