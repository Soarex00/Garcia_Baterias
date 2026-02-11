export default function Location() {
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#002D72]">
          Venha até nossa loja física
        </h2>
        <div className="w-24 h-1 bg-[#FDC21C] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="w-full max-w-5xl h-[400px] mx-auto rounded-2xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.1045924202353!2d-52.34056520899959!3d-31.68408297759971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95104a8a94db0e9f%3A0xfdb4ae64875b586a!2sGarcia%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1770754842988!5m2!1spt-BR!2sbr"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Garcia Baterias"
        />
      </div>
    </>
  );
}
