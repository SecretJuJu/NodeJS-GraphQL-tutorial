const getEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error("환경변수가 설정되지 않음 " + key);
  }

  return value;
};

export default getEnv;
