export async function fetchAllCourses() {
  const url = `${process.env.REACT_APP_API}/fetchCourses`;
  const rawResponse = await fetch(url, {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const content = await rawResponse.json();
  if (rawResponse.status == 200) {
    return { body: content, success: true, message: "" };
  } else {
    return { body: [], success: false, message: content.message };
  }
}
