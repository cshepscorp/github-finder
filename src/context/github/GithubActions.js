import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: 'http://api.github.com',
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// get search results fetch
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`https://api.github.com/search/users?${params}`);
  const { items } = await response.json();
  return items;
};

// get search results axios
// export const searchUsers = async (text) => {
//   const params = new URLSearchParams({
//     q: text,
//   })

//   const response = await github.get(`/search/users?${params}`)
//   return response.data.items
// }

// get user and their repos axios
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// get user and their repos with fetch
// export const getUserAndRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });
//   const [user, repos] = await Promise.all([
//     fetch(`http://api.github.com/users/${login}`),
//     fetch(`http://api.github.com/users/${login}/repos?${params}`),
//   ]);
//   console.log(user, repos);

//   //return { user: user.data, repos: repos.data };
// };

// get single user
// export const getUser = async (login) => {
//   const response = await fetch(`http://api.github.com/users/${login}`);
//   console.log('response from getUser', response);

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     console.log('data from response', data);
//     return data;
//   }
// };

// get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(
//     `http://api.github.com/users/${login}/repos?${params}`
//   );
//   console.log('response', response);

//   const data = await response.json();
//   return data;
// };
