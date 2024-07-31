export async function fetchAllotedseatAdmin(bool) {
    const url = `${process.env.REACT_APP_API}/fetch/Student/AllotSeat`;
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const content = await rawResponse.json();
    if (rawResponse.status === 200) {
      return { body: content, success: true, message: "" };
    } else {
      return { body: [], success: false, message: "error" };
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