import Image from 'next/image';
import {services1, services2,services3,services4,services5, services6, services7, services8} from './imports'

export default function Services() {
    return (
 <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">

      <h2 className="text-xs text-rose-900 tracking-widest font-medium title-font mb-1">

        Servicios</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Nuestros Servicios</h1>


      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">En nuestra clínica, comprendemos la importancia
        de la salud ginecológica en cada etapa de la vida de la mujer, y por eso, te ofrecemos una gama completa
        de servicios especializados diseñados para brindarte atención integral y personalizada.
        Algunos de nuestros servicios destacados incluyen:


        </p>

    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Ultrasonido Pélvico</h2>
        <p className="leading-relaxed text-base mb-4">Es una técnica de diagnóstico por imágenes que utiliza ondas de sonido para crear imágenes
          de los órganos internos del área pélvica, como el útero, ovarios, vejiga, y otros órganos reproductivos.</p>

        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services2}
               alt="services"
               width={200}
               height={200}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Ultrasonido Obstétrico</h2>
        <p className="leading-relaxed text-base mb-4">Es similar al ultrasonido pélvico, pero se enfoca en el seguimiento del desarrollo del feto durante el embarazo,
          permitiendo observar su crecimiento y verificar su bienestar.

        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Papanicolaou</h2>
        <p className="leading-relaxed text-base mb-4">También conocido como citología cervical, es una prueba que se realiza para detectar anomalías celulares en el cuello
          uterino, ayudando a prevenir y detectar tempranamente el cáncer cérvico-uterino.

        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Control Prenatal</h2>
        <p className="leading-relaxed text-base mb-4">Es un seguimiento médico regular que se realiza durante el
          embarazo para asegurar el bienestar de la madre y el bebé, incluyendo exámenes, análisis y asesoramiento.
          <Image className="tracking-widest align-middle flex-auto mx-auto"
                 src={services1}
                 alt="services"
                 width={200}
                 height={200}
                 blurDataURL="data:..."
                 placeholder="blur"
          />
        </p>

      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Enfermedades de transmisión sexual</h2>
        <p className="leading-relaxed text-base mb-4">La clínica ofrece pruebas, diagnóstico y tratamiento de diversas enfermedades de transmisión sexual (ETS) para prevenir
          complicaciones y proteger la salud sexual de las pacientes.


        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Infertilidad</h2>
        <p className="leading-relaxed text-base mb-4">La clínica ofrece estudios y tratamientos para abordar la infertilidad en parejas que buscan concebir,
          proporcionando opciones y soluciones adaptadas a cada caso.</p>
        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services3}
               alt="services5"
               width={200}
               height={200}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Métodos de planificación familiar</h2>
        <p className="leading-relaxed text-base mb-4">Se brinda asesoramiento y opciones para elegir el método anticonceptivo más adecuado a las necesidades y
          preferencias de cada paciente.</p>
        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services5}
               alt="services"
               width={150}
               height={150}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Cirugía de matriz</h2>
        <p className="leading-relaxed text-base mb-4">También conocida como histerectomía, es una intervención quirúrgica que
          consiste en la extirpación del útero, generalmente indicada en casos de problemas ginecológicos graves.</p>

      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Cirugía de Ovarios</h2>
        <p className="leading-relaxed text-base mb-4">Se realizan diversas cirugías en los ovarios para tratar quistes,
          tumores, endometriosis u otros problemas que afecten su funcionamiento.</p>

        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services4}
               alt="services"
               width={150}
               height={150}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Cirugía de Mama</h2>
        <p className="leading-relaxed text-base mb-4">La clínica ofrece intervenciones quirúrgicas para tratar
          problemas mamarios, incluyendo biopsias, extirpación de tumores benignos o malignos, y reconstrucción mamaria.

        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Atención de partos</h2>
        <p className="leading-relaxed text-base mb-4">El equipo médico brinda apoyo y atención
          durante el proceso de parto, asegurando un entorno seguro y cómodo para la madre y el bebé.
        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Atención de Cesáreas</h2>
        <p className="leading-relaxed text-base mb-4">En caso de ser necesaria una cesárea, el equipo médico realiza esta
          intervención quirúrgica para el nacimiento del bebé.
          <Image className="tracking-widest align-middle flex-auto mx-auto"
                 src={services6}
                 alt="services"
                 width={200}
                 height={200}
                 blurDataURL="data:..."
                 placeholder="blur"
          />
        </p>

      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Operación Laser</h2>
        <p className="leading-relaxed text-base mb-4">Se utilizan técnicas quirúrgicas con láser para tratar diversas condiciones ginecológicas,
          como eliminar pólipos o verrugas.

        </p>

      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Crioterapia</h2>
        <p className="leading-relaxed text-base mb-4">Es un tratamiento que utiliza frío extremo para eliminar tejido anormal,
          como lesiones pre-cancerosas del cuello uterino.</p>
        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services7}
               alt="services5"
               width={150}
               height={150}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Colposcopia</h2>
        <p className="leading-relaxed text-base mb-4">Es un procedimiento para examinar el cuello uterino y la vagina
          con un colposcopio, especialmente utilizado para detectar cambios anormales en el tejido cervical.</p>
        <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={services8}
               alt="services"
               width={200}
               height={200}
               blurDataURL="data:..."
               placeholder="blur"
        />
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Consulta Externa</h2>
        <p className="leading-relaxed text-base mb-4">Ofrecemos una evaluación integral de su salud ginecológica y se les
          proporciona el cuidado y la orientación necesarios para mantener su bienestar y salud reproductiva</p>

      </div>
    </div>

    
  </div>
</section>
    )
}
