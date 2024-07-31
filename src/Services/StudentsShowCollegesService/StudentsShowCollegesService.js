export async function fetchStudentsData(bool) {
  const url = `${process.env.REACT_APP_API}/fetch/Students/Data?`+`allot=${bool}`;
  try {
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", // Corrected header name
      },
    });
    const content = await rawResponse.json();
    if (rawResponse.ok) {
      // Check if response is successful
      return { body: content, success: true, message: "" };
    } else {
      // If response is not successful, return an error
      return { body: [], success: false, message: content.message };
    }
  } catch (error) {
    // Handle any network errors or exceptions
    console.error("Error fetching data:", error);
    return { body: [], success: false, message: "Error fetching data" };
  }
}

export async function checkIdAllotedTrue(id) {
  const url = `${process.env.REACT_APP_API}/allot/users/seat`;
  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!rawResponse.ok) {
      throw new Error("Failed to fetch");
    }

    const content = await rawResponse.json();
    return { body: content, success: true, message: "" };
  } catch (error) {
    return { body: [], success: false, message: error.message };
  }
}

export async function StudentAllotTrue() {
  const url = `${process.env.REACT_APP_API}/fetch/Student/AllotSeat`;
  try {
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!rawResponse.ok) {
      throw new Error("Failed to fetch");
    }
    const content = await rawResponse.json();
    return { body: content, success: true, message: "" };
  } catch (error) {
    return { body: [], success: false, message: error.message };
  }
}

export async function allotedStudentPdfId(id) {
  const url = `${process.env.REACT_APP_API}/checkStudentIdPdf`;
  const rawResponse = await fetch(url, {
    method: "POST", // Corrected to uppercase "POST"
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", // Added Content-Type header
    },
    body: JSON.stringify({ id }),
  });
   
    const content = await rawResponse.json();

    
//   console.log(rawResponse.body);
  if (rawResponse.status === 200) {
    return { body: content.fileData, success: true, message: "" };
  } else {
    return { body: [], success: false, message: "Error" };
  }
}
