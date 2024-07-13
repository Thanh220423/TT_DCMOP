export const RequestApi = async (req = {}) => {
  try {
    const data = {
      name: "John Doe",
      age: 30,
    };

    const res = await fetch(`http://localhost:${server_PORT}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok && res.status != 200) return null;
    console.log(res.json());
    return res.json();
  } catch (err) {
    console.log({ err });
  }
};
