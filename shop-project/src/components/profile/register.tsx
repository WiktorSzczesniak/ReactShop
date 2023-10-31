import { useDispatch } from "react-redux";
import Link from "next/link";
import React, { useState } from "react";
import { registerUser } from "@/store/Registration-slice";
import { firestore, auth } from "../../firebase";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "@/store";
import { AnyAction } from "redux";
import { useRouter } from "next/router";

const RegisterInterface = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    if (!formData.firstName.trim()) {
      errors.push("First Name is required.");
    }

    if (!formData.lastName.trim()) {
      errors.push("Last Name is required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.push("Email is required.");
    } else if (!emailPattern.test(formData.email)) {
      errors.push("Invalid email format.");
    }

    if (!formData.password) {
      errors.push("Password is required.");
    } else if (
      formData.password.length < 6 &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(formData.password)
    ) {
      errors.push(
        "Password must be at least 6 characters long and must contain at least one lowercase letter, one uppercase letter, and one digit. "
      );
    } else if (formData.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(formData.password)) {
      errors.push(
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit."
      );
    }

    setFormErrors(errors);

    if (errors.length === 0) {
      console.log("Registration form is valid.");
      console.log("First Name:", formData.firstName);
      console.log("Last Name:", formData.lastName);
      console.log("Email:", formData.email);
      console.log("Password:", formData.password);

      try {
        const response = await auth.createUserWithEmailAndPassword(
          formData.email,
          formData.password
        );

        if (response.user) {
          await firestore.collection("users").doc(response.user.uid).set({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          });

          (dispatch as ThunkDispatch<RootState, void, AnyAction>)(
            registerUser(formData)
          );
          router.push("/login");
        } else {
          console.error("User not found in the response.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      console.error("Registration form has the following errors:");
      errors.forEach((error) => console.error(`- ${error}`));
    }
  };

  return (
    <div className="register-page">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="button">
          Register
        </button>
        <h3>
          Already a user? <Link href="/login">SIGN IN</Link>
        </h3>
      </form>

      {formErrors.length > 0 && (
        <div className="error-message">
          <p>Registration form has the following errors:</p>
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterInterface;
