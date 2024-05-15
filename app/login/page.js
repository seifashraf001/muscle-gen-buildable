'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import './page.css'


// Validation function
function validateLoginForm(email, password) {
  const errors = {};

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
  // } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}/.test(password)) {
  //   errors.password = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character";
  // }

  return errors;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [invalidCredentials, setInvalidCredentials] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { data: session } = useSession();

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrors(validateLoginForm(email, password));
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res.error) {
        setInvalidCredentials('Invalid email or password');
        return;
      }

      router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (session) {
    router.replace('/');
    return null; // Render nothing if redirecting
  }

  return (

    <section className='bg-black'>
    <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 bg-black">
      <div class="mx-auto max-w-lg content rounded-lg ">
          <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-orange-300 via-red-700 to-red-900 text-transparent bg-clip-text sm:text-3xl">
            Get started
          </h1>

          <p className="mx-auto mt-6 max-w-md text-center text-white">
            Login to start building Musules
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 "
          >
            <p className="text-center text-2xl font-bold bg-gradient-to-r from-orange-300 via-red-700 to-red-900 text-transparent bg-clip-text sm:text-3xl ">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-white text-black p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

          <div>
          <div className="relative text-black">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full rounded-lg border-white text-black p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <img className='w-5 opacity-50 hover:opacity-100 transition' src='hide-password.svg' /> : <img className='w-5 opacity-50 hover:opacity-100 transition' src='show-password.svg' /> }
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

            { invalidCredentials && (
              <div>
                <div className="bg-red-900 transition text-white text-center text-sm py-1 px-3 rounded-md mt-8">
                  {invalidCredentials} 
                </div>
              </div>
            )}
            <button
              type="submit"
              className="block w-full rounded-lg bg-gradient-to-r from-red-900 via-red-700 to-orange-600 px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition "
            >
              Sign in
            </button>

            <p className="text-center text-sm text-white">
                No account? &nbsp;
              <Link className="underline hover:opacity-90 transition" href="/register">
                Sign up
              </Link>
            </p>
          </form>
      </div>
    </div>
    </section>


  );
}

export default Login;