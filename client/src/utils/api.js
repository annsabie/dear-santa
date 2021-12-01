// const baseUrl = "http://localhost:3001";

export const getMe = () => {

  return fetch(`/api/users/me`, {
    headers: {      "Content-Type": "application/json",

    },
    credentials: "include",
  });
};

export const createUser = (userData) => {
  return fetch(`/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch(`/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
};

export const logout = () => {
  return fetch(`/api/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export const getWishes = async () => {
  console.log("getWishes");
  const response = await fetch(`/api/profile/wishes`,{
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await response.json();
  console.log(data);
  return data;

};

export const createWish = (wish) => {
  return fetch(`/api/profile/wishes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const updateWish = (wish) => {
  return fetch(`/api/profile/wishes`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const deleteWish = (wish) => {
  return fetch(`/api/profile/wishes`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(wish),
  });
};

export const getBio = () => {
  return fetch(`/api/profile/bio`, { 
    credentials: "include",
  });
};

export const setBio = (content) => {
  return fetch(`/api/profile/bio`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ content }),
  });
};
