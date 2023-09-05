"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
      <div  className="pb-5">
        Iniciaste sesión como {session.user?.email} </div>
        <button
          onClick={() => signOut()}
          className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded text-lg"
        >
          Cerrar Sesión
        </button>
      
        </>
    );
  }
  return (
    <>
      No has Iniciado Sesión <br />
      <button
        onClick={() => signIn()}
        className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded text-lg "
      >
       Inicia Sesión
      </button>
    </>
  );
}
