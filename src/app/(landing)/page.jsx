function LandingPage() {
  return (
    <main className="grid gap-8">
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <img
          src="/fondo.jpg"
          alt="Portada"
          className="w-full object-cover md:order-2"
        />
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 text-black dark:text-white">
          <p className="text-lg md:text-xl">🧑‍💻 Impulsa tu negocio con tecnología</p>

          <h1 className="text-3xl md:text-4xl font-medium">
            Desarrollo Web a Medida
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 text-center">
            Digitaliza tus procesos, mejora la eficiencia y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas.
          </p>

          <button className="bg-blue-500 rounded-md px-4 py-2 hover:bg-green-600 flex items-center gap-2 text-white">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
              />
            </svg>
            <span>Contáctanos</span>
          </button>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-4">
  <div className="bg-zinc-100 dark:bg-zinc-950 rounded-md p-4 flex items-center gap-2">
 

    <div>
      <h1 className="text-lg text-black dark:text-white font-medium">
        Desarrollo a Medida
      </h1>
      <p>
        Creamos soluciones personalizadas para optimizar tus procesos y mejorar la productividad.
      </p>
    </div>
  </div>

  <div className="bg-zinc-100 dark:bg-zinc-950 rounded-md p-4 flex items-center gap-2">


    <div>
      <h1 className="text-lg text-black dark:text-white font-medium">
        Integración de Sistemas
      </h1>
      <p>
        Unificamos tus plataformas para mejorar la comunicación y eficiencia empresarial.
      </p>
    </div>
  </div>

  <div className="bg-zinc-100 dark:bg-zinc-950 rounded-md p-4 flex items-center gap-2">
  

    <div>
      <h1 className="text-lg text-black dark:text-white font-medium">
        Soporte y Actualizaciones
      </h1>
      <p>
        Mantenimiento y mejoras constantes para garantizar el rendimiento de tus sistemas.
      </p>
    </div>
  </div>
</section>

      <section className="bg-blue-100 dark:bg-blue-950 rounded-md p-4">
        <h1 className="text-xl text-black dark:text-white font-medium">
          Transformación Digital para tu Empresa
        </h1>

        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Acelera tu crecimiento con nuestras soluciones tecnológicas personalizadas.
        </p>
      </section>
    </main>
  );
}


export default  LandingPage