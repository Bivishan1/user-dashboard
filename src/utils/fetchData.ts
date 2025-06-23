// utils/fetchUserData.ts

export const fetchUserData = async () => {
  try {
    const [userData, postsData] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) =>
        res.json()
      ),
    ]);

    return { userData, postsData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Let the component decide how to handle it
  }
};
