const RANDOM_PET = `http://pet-library.moonhighway.com/api/randompet`;

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const getPet = () => {
  return fetch(`${RANDOM_PET}`, { headers: headers() }).then((res) =>
    res.json()
  );
};

export const api = {
  user: {
    getPet,
  },
};
