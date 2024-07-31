export async function studentDocument(formValues) {
  const url = `${process.env.REACT_APP_API}/student/document`;

  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      body: formValues,
    });

    if (!rawResponse.ok) {
      throw new Error("Failed to fetch");
    }

    // Check if response body is empty
    const content = await rawResponse.text();
    const responseBody = content ? JSON.parse(content) : {};

    return { body: responseBody, success: true, message: "" };
  } catch (error) {
    return { body: null, success: false, message: error.message };
  }
}

