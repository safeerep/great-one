export const findExistingUser_usecase = (dependencies: any) => {
  const {
    repositories: {
      userRepo: { getUserData },
    },
  } = dependencies;

  if (!getUserData) throw new Error("dependecy is required for it");

  const execute = async (email: string) => {
    return await getUserData(email);
  };

  return { execute };
};
