// export async function addStudentApplicationDetails(formData) {
//   const url = `${process.env.REACT_APP_API}/add/student/application`;
//   const rawResponse = await fetch(url, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//       Authorization:''
//     },
//     body: JSON.stringify(formData),
//   });
//   const content = await rawResponse.json();
//   if (rawResponse.status === 200) {
//     return { body: content.body, success: true, message: "" };
//   } else {
//     return { body: [], success: false, message: content.message };
//   }
// }

export async function addStudentApplicationDetails(formValues) {
  const url = `${process.env.REACT_APP_API}/add/student/application`;

  const rawResponse = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // Authorization: "",
    },
    body: formValues,
  });
  const content = await rawResponse.json();
  if (rawResponse.status === 200) {
    return { body: content, success: true, message: "" };
  } else {
    return { body: [], success: false, message: content.message };
  }
}

export async function fetchAllCountry() {
  const url = `${process.env.REACT_APP_API}/fetch/country`;
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
