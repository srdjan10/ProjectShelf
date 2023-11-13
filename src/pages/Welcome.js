import policazavinonaslov from "../images/polica_za_vino_v7.jpg";
import { motion as m } from "framer-motion";
const Welcome = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.25 }}
    >
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl content-center mb-12">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={policazavinonaslov}
              alt="Svet polica"
            />
          </div>
          <div class="p-8">
            <p class="mt-2 text-amber-700 text-justify">
              Ukoliko imate slobodnog mesta u svom životnom prostoru a želite da
              ga oplemenite sa nečim jedinstvenim i po svemu ostalom
              specifičnim, onda su naše police idealne za vas. Bavimo se
              proizvodnjom unikatnih polica za vino i za cveće. Unikatnim u
              svakom smislu upravo zbog toga što su naše police napravljene od
              drveta i svaka polica je izrađena od zasebnog komada drveta koji
              je neponovljiv. Posebnju pažnju poklanjamo detaljima kao što su
              obrađene ivice i lakiranje. Dobijate policu koja je izrađena od
              komada drveta na kojem je uloženo dosta ručnog rada da bi se drvo
              kao takvo oblikovalo i obradilo.
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
};
export default Welcome;
