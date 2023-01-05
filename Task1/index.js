const registrationForm = document.querySelector("#registration-form");

const validationFuncs = {
  name: () => {
    const inputElement = document.querySelector("#name");
    const errorElement = document.querySelector("#error-name");
    if (!required(inputElement.value)) {
      errorElement.textContent = "Name is required";
      return false;
    }
    if (`${inputElement.value}`.match("^[A-Za-z]+$") === null) {
      errorElement.textContent = "Only alphabets allowed ";
      return false;
    }

    errorElement.textContent = ""

  },

  email: () => {
    const inputElement = document.querySelector("#email");
    const errorElement = document.querySelector("#error-email");
    if (!required(inputElement.value)) {
      errorElement.textContent = "Email is required";
      return false;
    }
    if (`${inputElement.value}`.match(`([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])`) === null) {
      errorElement.textContent = "Email is invalid";
      return false;
    }
    errorElement.textContent = ""

  },

  password: () => {
    const inputElement = document.querySelector("#password");
    const errorElement = document.querySelector("#error-password");
    if (!required(inputElement.value)) {
      errorElement.textContent = "Password is required";
      return false;
    }
    if (`${inputElement.value}`.match("^.{8,20}$") === null) {
      errorElement.textContent =
        "Password must be a minimum of 8 and a maximum of 20 characters long";
      return false;
    }
    errorElement.textContent = ""

  },

  cpassword: () => {
    const inputElement = document.querySelector("#cpassword");
    const errorElement = document.querySelector("#error-cpassword");
    const passwordElement = document.querySelector("#password");
    if (!required(inputElement.value)) {
      errorElement.textContent = "Confirm Password is required";
      return false;
    }
    if (inputElement.value != passwordElement.value) {
      errorElement.textContent = "Confirm Password must be same as password";
      return false;
    }
    errorElement.textContent = ""

  },

  gender: () => {
    const maleGenderElement = document.querySelector("#gender-male");
    const femaleGenderElement = document.querySelector("#gender-female");
    const otherGenderElement = document.querySelector("#gender-other");
    const errorElement = document.querySelector("#error-gender");
    if (
      !(
        maleGenderElement.checked ||
        femaleGenderElement.checked ||
        otherGenderElement.checked
      )
    ) {
      errorElement.textContent = "Gender is required";
      return false;
    }
    errorElement.textContent = ""

  },

  hobby: () => {
    const cricketElement = document.querySelector("#hobby-cricket");
    const tableTennisElement = document.querySelector("#hobby-tableTennis");
    const footballElement = document.querySelector("#hobby-football");
    const errorElement = document.querySelector("#error-hobby");
    if (
      !(
        cricketElement.checked ||
        tableTennisElement.checked ||
        footballElement.checked
      )
    ) {
      errorElement.textContent = "Hobby is required";
      return false;
    }
    errorElement.textContent = ""

  },

  remark: () => {
    const inputElement = document.querySelector("#remark");
    const errorElement = document.querySelector("#error-remark");
    if (
      required(inputElement.value) &&
      `${inputElement.value.trim()}`.length > 20
    ) {
      errorElement.textContent =
        "Remark must be a maximum of 20 characters long";
      return false;
    }
    errorElement.textContent = ""

  },

  city: () => {
    const inputElement = document.querySelector("#city");
    const errorElement = document.querySelector("#error-city");
    if (!required(inputElement.value)) {
      errorElement.textContent = "City is required";
      return false;
    }
    errorElement.textContent = ""

  },

  empty: () => {},
};

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit event", event);
  const validationArr = [];

  Array.from(event.target).forEach((v) => {
    console.log(v);
    let isValid = validationFuncs[v.getAttribute("data-input")]();
    console.log(v.id, isValid);
    validationArr.push(isValid);
  });

  if (validationArr.some((v) => v === false)) {
    return false;
  }

  alert("Form Submitted 🤗!");
});


document.querySelector("#name").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#email").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#password").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#cpassword").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})


document.querySelector("#gender-male").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#gender-female").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#gender-other").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#hobby-cricket").addEventListener("change", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#hobby-tableTennis").addEventListener("change", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#hobby-football").addEventListener("change", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#remark").addEventListener("blur", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})

document.querySelector("#city").addEventListener("change", (event) => {
  validationFuncs[event.target.getAttribute("data-input")]()
})


function required(value) {
  return value != undefined && value != null && value != "";
}
