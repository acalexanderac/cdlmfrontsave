"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "../services/imports";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/sys");
  };

    return (
      <div>
  
      <div>
                <>
              <img
        className="tracking-widest align-middle flex-auto mx-auto"
        src={Logo.src}
        alt="services"
        width={300}
        height={300}
       
      />
                </>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
           
                                
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-rose-900">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-rose-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-900 sm:text-sm sm:leading-6"
                value={email}
          onChange={(event) => setEmail(event.target.value)}
                                        />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 pt-4 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-rose-900 hover:text-rose-600">
                    Olvidaste la Contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                                        type="password"
                                        placeholder="dfjaklsfjksaf"
//autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-rose-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-900 sm:text-sm sm:leading-6"
                 value={password}
          onChange={(event) => setPassword(event.target.value)}
                                        />
              </div>
            </div>

            <div className="py-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-rose-900 px-3 py-1.5 text-sm 
                font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

            <div>
     
      {errors.length > 0 && (
        <div className="alert alert-danger mt-2">
          <ul className="mb-0">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
        </div>
      </div>
  

                                       
      </div>
      </div>
  );
};
export default LoginPage;