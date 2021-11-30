const baseUrl = "http://localhost:3001";

export const getMe = () => {
  return fetch(`${baseUrl}/api/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export const createUser = (userData) => {
  return fetch(`${baseUrl}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
};

export const logout = () => {
  return fetch(`${baseUrl}/api/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export const getWishes = () => {
  return fetch(`${baseUrl}/api/profile/wishes`,{
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};

export const createWish = (wish) => {
  return fetch(`${baseUrl}/api/profile/wishes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const updateWish = (wish) => {
  return fetch(`${baseUrl}/api/profile/wishes`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const deleteWish = (wish) => {
  return fetch(`${baseUrl}/api/profile/wishes`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const getBio = () => {
  return fetch(`${baseUrl}/api/profile/bio`, { 
    credentials: "include",
  });
};

export const setBio = (content) => {
  return fetch(`${baseUrl}/api/profile/bio`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ content }),
  });
};
