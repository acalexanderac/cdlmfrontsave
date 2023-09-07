import ButtonAuth from "@/componentsAuth/ButtonAuth";
import Image from 'next/image';
import { Logo } from "@/styles/imports";

const HomePage = () => {
  return (
     <div className="place-items-center grid py-5">
      <h1 className="text-3xl font-medium title-font text-rose-900 py-5 text-center">Bienvenido</h1>
       <Image className=" align-middle flex-auto mx-auto"
               src={Logo}
               alt="Pacientes Clínica"
               width={400}
               height={400}
               blurDataURL="data:..."
               placeholder="blur"
        />
      <ButtonAuth />
    </div>
  );
};
export default HomePage;
