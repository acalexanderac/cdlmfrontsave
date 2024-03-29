export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1930.1840471751423!2d-89.44331246120885!3d14.635034591649962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDM4JzA2LjEiTiA4OcKwMjYnMzEuMyJX!5e0!3m2!1ses-419!2sgt!4v1690823865590!5m2!1ses-419!2sg"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Dirección</h2>
                            <p className="mt-1">Ubicada en la 1. calle 3-70 zona 2, a un costado del Centro Comercial 2000,
                                a pocos pasos de la Municipalidad de Quetzaltepeque.</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Correo Electrónico</h2>
                            <a className="text-indigo-500 leading-relaxed">fernandocolindres@hotmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Teléfono</h2>
                            <p className="leading-relaxed">3167 2668</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
    <form action="https://formspree.io/maygvkgy" method="POST">
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>

  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo Electrónico</label>
    <input type="email" id="email" name="_replyto" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>

  <input type="hidden" name="_subject" value="Contact Form Submission" />

  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
  </div>

  <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded text-lg">Enviar</button>
  <p className="text-xs text-gray-500 mt-3">Déjanos tus Dudas o Sugerencias por acá.</p>
</form>
                </div>
            </div>
        </section>
    )
}
