/* Purpose : Common utility to send POST requests to backend
    Contributor: Daksh asati(23BEC7195)*/

const postData = async (url, body) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      return { success: res.ok, data };
    } catch (err) {
      console.error(err);
      return { success: false, data: { message: "Network Error" } };
    }
  };
  