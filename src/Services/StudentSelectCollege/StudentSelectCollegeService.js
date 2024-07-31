export async function fetchAllColleges() {
  const url = `${process.env.REACT_APP_API}/fetch/college`;
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

export async function addstudentCollege(formData) {
  const url = `${process.env.REACT_APP_API}/studentSelectColleges`;
  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData),
    });
    if (rawResponse.ok) {
    // const content = await rawResponse.json();
    return { body: "success", success: true, message: "" };
    }
  } catch (error) {
    return { body: [], success: false, message: error.message };
  }
}

