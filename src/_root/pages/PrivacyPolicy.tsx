import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BB1919] mb-8">Política de Privacidad</h1>
      
      <div className="space-y-6 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
          <p className="mb-4">
            Recopilamos información que usted nos proporciona directamente cuando:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Se registra en nuestro sitio</li>
            <li>Se suscribe a nuestro boletín</li>
            <li>Comenta en nuestras publicaciones</li>
            <li>Se comunica con nosotros</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
          <p className="mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Mejorar y personalizar su experiencia</li>
            <li>Comunicarnos con usted</li>
            <li>Enviar actualizaciones y noticias relevantes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
          <p>
            Nos comprometemos a proteger su información personal y a mantenerla segura. 
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
            proteger sus datos contra el acceso no autorizado, la alteración, la divulgación 
            o la destrucción.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Sus Derechos</h2>
          <p className="mb-4">
            Como usuario de nuestros servicios, usted tiene los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceder a sus datos personales y recibir una copia de los mismos</li>
            <li>Rectificar información incorrecta o incompleta</li>
            <li>Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
            <li>Oponerse al procesamiento de sus datos en ciertas circunstancias</li>
            <li>Limitar el procesamiento de sus datos</li>
            <li>Portabilidad de sus datos a otro servicio</li>
            <li>Retirar su consentimiento en cualquier momento</li>
            <li>Presentar una reclamación ante la autoridad de control</li>
          </ul>
          <p className="mt-4">
            Para ejercer cualquiera de estos derechos, puede contactarnos a través de los medios 
            indicados en la sección de contacto. Responderemos a su solicitud en un plazo máximo 
            de 30 días.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra política de privacidad, puede contactarnos en:
            <br />
            Email: informacion.lavoz@gmail.com
          </p>
        </section>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default PrivacyPolicy; 