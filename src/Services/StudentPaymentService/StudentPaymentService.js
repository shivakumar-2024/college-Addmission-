export async function 
addstudentPayment(formData) {
  const url = `${process.env.REACT_APP_API}/studentPayment`;
  const rawResponse = await fetch(url, {
    method: "POST", // Corrected to uppercase "POST"
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", // Added Content-Type header
    },
    body: JSON.stringify(formData),
  });
  // const content = await rawResponse.json();
  // debugger;
  if (rawResponse.status === 200) {
    return { body: rawResponse.body, success: true, message: "" };
  } else {
    return { body: [], success: false, message: "Error" };
  }
}