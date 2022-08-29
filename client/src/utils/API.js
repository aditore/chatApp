/*API*/
//GET ME
export const getMe = (token, id) => {
  return fetch(`/api/users/me/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
  });
};

//NEW USER
export const createUser = (user) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
};

//LOGIN
export const login = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
};

//ADD CHATS
export const createChat = (chatData) => {
  return fetch('/api/chats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chatData)
  })
};

//GET USER CHATS
export const getAllChats = (user_idC) => {
  return fetch(`/api/chats/${user_idC}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
};