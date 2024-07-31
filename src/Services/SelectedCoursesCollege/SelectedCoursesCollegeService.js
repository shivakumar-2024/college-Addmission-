export  async function SelectedCoursesCollege(formData){
    const url=`${process.env.REACT_APP_API}/admin/courses`;
    const response= await fetch(url,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    });
    console.log(JSON.stringify(response.body));
    // const content = await response.json();
    if(response.status==200){
        return{ body: response.body,success:true,message:""};
    }
    else{
        return{body:[], success:false,message: "error"};
    }
}



