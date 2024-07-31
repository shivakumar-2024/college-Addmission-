export async function checkUserInformation(formData) {
    const url = `${process.env.REACT_APP_API}/check/user`;
    try {
      const rawResponse = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      // debugger
      const content = await rawResponse.text();
      let jsonResponse = {};
      try {
        jsonResponse = JSON.parse(content);
      } catch (error) {
        return {
          body: [],
          success: false,
          message: "Invalid JSON response from server.",
        };
      }
  
      if (rawResponse.ok) {
        
        localStorage.setItem("userId",jsonResponse.userId);
        
        return {
          body: jsonResponse,
          success: true,
          message: "",
        };
      } else {
        return {
          body: [],
          success: false,
          message: jsonResponse.message || "Error occurred",
        };
      }
    } catch (error) {
      return {
        body: [],
        success: false,
        message: error.message,
      };
    }
  }

  export async function checkRegistrationForCollege(id) {
    const url = `${process.env.REACT_APP_API}/check-registeration/${id}`;
    try {
      const rawResponse = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
    
      });
      const content = await rawResponse.text();
      let jsonResponse = {};
      try {
        jsonResponse = JSON.parse(content);
      } catch (error) {
        return {
          body: [],
          success: false,
          message: "Invalid JSON response from server.",
        };
      }
  
      if (rawResponse.ok) {
        return {
          body: jsonResponse,
          success: true,
          message: "",
        };
      } else {
        return {
          body: [],
          success: false,
          message: jsonResponse.message || "Error occurred",
        };
      }
    } catch (error) {
      return {
        body: [],
        success: false,
        message: error.message,
      };
    }
  }
  