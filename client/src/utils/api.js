  const baseUrl = "http://localhost:3001";

  export const createUser = (userData) => {
    return fetch(`${baseUrl}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  export const loginUser = (userData) => {
    return fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  export const getWishes = () => {
    return fetch(`${baseUrl}/api/profile`,{
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
  };

  export const createWish = (wish) => {
    return fetch(`${baseUrl}/api/profile`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(wish)
    })
  };

  export const updateWish = (wish) => {
    return fetch(`${baseUrl}/api/profile`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(wish)
    })
  };

  export const deleteWish = (wish) => {
    return fetch(`${baseUrl}/api/profile`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(wish)
    })
  };