const username = document.getElementById("username")
const fname = document.getElementById("Fname")
const phone = document.getElementById("call")
const age = document.getElementById("age")


async function register(){
    if(username.value !== "" && fname.value !== "" && phone.value !== "" && age.value !== ""){
    // firestore function //
   await db.collection("users").add({
        firstName: username.value,
        fname: fname.value,
        born: age.value,
        phone: phone.value,
    })
    .then((docRef) => {
        console.log("registration successful", `ID => ${docRef.id}`);
    })
    .catch((error) => {
        console.error("Error =>", error);
    });
    // firestore function //
    username.value=''
    fname.value=''
    phone.value=''
    age.value=''



    
        
    }else{
        alert("please fill the all field required")
    }
}

const btn = document.getElementById("registerbtn")
btn.addEventListener('click',register)