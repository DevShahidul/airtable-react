export const validate = (values) => {
    const errors = {};
    // regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex = "^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
    if(!values.userName){
      errors.userName = "The Name is required!";
    }
    if(!values.email){
      errors.email = "The Emil is required!";
    } else if(!regex.test(values.email)){
        errors.email = "This is not a valid email!";
    }
    if(!values.password){
      errors.password = "The Password is required!";
    }
    if(!values.confirmPassword || values.password !== values.confirmPassword){
      errors.confirmPassword = "The password does not match!";
    }
    return errors;
}

export const inputs = [
    {
        "username": {
            type: "text",
            placeholder: "John Doe",
            label: "Name",
            errorMessage: "Username should be 3-16 characters and should't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        "email": {
            type: "email",
            placeholder: "jamie@oliver.com",
            label: "Email",
            errorMessage: "It should be a valid email!",
            pattern: "^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",
            required: true,
        },
        "password": {
            type: "password",
            placeholder: "*****",
            label: "Password",
            errorMessage: "Min 10 characters, 1 lowercase, 1 uppercase, and 1 numeric.",
            pattern: "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*]{10,}$",
            required: true,
            icon: "true"
        },
        "confirmPassword": {
            type: "password",
            placeholder: "jamie@oliver.com",
            label: "Password (again)",
            errorMessage: "Passwords don't match!",
            required: true,
            icon: "true"
        },
    }
];