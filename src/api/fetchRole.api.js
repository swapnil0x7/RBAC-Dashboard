// Mocking an API call based on the role
export const fetchUserRole = async (role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ role });
    }, 1000);
  });
};
