"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// signup validation
function validateSignupForm(name, email, password, confirmPassword) {
  const errors = {};

  // First Name validation
  if (!name) {
    errors.name = "Full Name is required";
  }

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  }
  // else if (password.length < 6) {
  //   errors.password = "Password must be at least 6 characters";
  // }
  // else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}/.test(password)) {
  //   errors.password = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character";
  // }

  // Confirm Password validation
  if (!confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

function Reg() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [marketingAccept, setMarketingAccept] = useState(false);
  const [errors, setErrors] = useState({});
  const [userExistError, setUserExistError] = useState("");

  const router = useRouter();
  if (session) {
    router.replace("/");
    return; // Render nothing if redirecting
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateSignupForm(name, email, password, passwordConfirmation);
    setErrors(errors);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    console.log("Passed validation and connecting to db");

    try {
      const resUserExist = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExist.json();

      if (user) {
        setUserExistError("User with this Email already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <section className="bg-black dark:bg-primary">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/OIG3.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <img alt="" src="logo1.png" width={120} height={90} />
            </a>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Wlcome to Muscl builder
            </h2>
            <p className="mt-4 leading-relaxed text-white/90"></p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                href="#"
              >
                <span className="sr-only">Home</span>
                <img alt="" src="logo1.png" width={120} height={90} 
                className="bg-black rounded-full"/>
              </a>
              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl dark:text-white">
                Welcome to Muscle builder
              </h1>
              <p className="mt-4 leading-relaxed text-white dark:text-white">
                complete the form to unlock exuclisve featuers
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-6 gap-10">
              <div className="col-span-6 bg-white">
                <label
                  htmlFor="name"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-white dark:bg-white"
                >
                  <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-black">
                    Full Name
                  </span>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-black"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </label>
              </div>

              <div className="col-span-6 bg-white ">
                <label
                  htmlFor="email"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-white text-white  "
                >
                  <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-black">
                    Email
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-black peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-black"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 bg-white">
                <label
                  htmlFor="password"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-white dark:bg-white"
                >
                  <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-black">
                    Password
                  </span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-black peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-black"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 bg-white">
                <label
                  htmlFor="passwordConfirmation"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-white dark:border-gray-700 dark:bg-white"
                >
                  <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-black">
                    Password Confirmation
                  </span>{" "}
                  <input
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="text-black peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-black"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                  )}
                </label>
              </div>
              <div className="col-span-6">
                <label htmlFor="marketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="marketingAccept"
                    name="marketing_accept"
                    checked={marketingAccept}
                    onChange={(e) => setMarketingAccept(e.target.checked)}
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900 text-white"
                  />
                  <span className="text-sm text-white dark:text-gray-200">
                    I want to receive emails about events, product updates and company
                    announcements.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <p className="text-sm text-white dark:text-white">
                  By creating an account, you agree to our &nbsp;
                  <a href="/terms" className="text-white underline dark:text-white">
                    terms and conditions 
                  </a>
                  &nbsp; and &nbsp;
                  <a href="/privacy" className="text-white underline dark:text-white">
                    
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-red-900 bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-white sm:mt-0 dark:text-white">
                  Already have an account? &nbsp;
                  <Link href="/login" className="text-white underline dark:text-white">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>

            {userExistError && (
              <div className="bg-red-900 transition text-white text-center text-sm py-1 px-3 rounded-md mt-8">
                {userExistError}
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

export default Reg;
