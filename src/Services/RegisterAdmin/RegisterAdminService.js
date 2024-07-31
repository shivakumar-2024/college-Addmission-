export async function 
addRegisterAdmin(formData) {
  const url = `${process.env.REACT_APP_API}/add/register/admin`;
  const rawResponse = await fetch(url, {
    method: "POST", // Corrected to uppercase "POST"
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", // Added Content-Type header
    },
    body: JSON.stringify(formData),
  });
  const content = await rawResponse.json();
  if (rawResponse.status === 200) {
    return { body: content.body, success: true, message: "" };
  } else {
    return { body: [], success: false, message: content.message };
  }
}