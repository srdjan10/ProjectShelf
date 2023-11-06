import Card from "../components/Card";
import ProductsItem from "../data.js/ProductsItem";

const Products = () => {
  return (
    <div class="text-amber-700">
      <span class="indent-8 text-justify ml-8">
        <b>Police za vino</b> koje proizvodimo su unikatne i uklopljive u svaki
        enterijer.Police su ručno rađene obrađene i lakirane tri puta. Prava su
        stvar za ljubitelje vina koji žele da ukrase svoj enterijer sa nečim
        novim i da uživaju u vinu.
      </span>
      <br />
      <hr class="w-60 h-1 mx-auto my-4 bg-gray-200 border-0 rounded-md:my-10 dark:bg-gray-700" />
      <span class="indent-8 text-justify ml-8">
        <b>Proizvodnja polica za cvece</b> vrši se na tradicionalan način, što
        znači da je svaki sastavni deo polica izrađen ručno i kao takav je
        neponovljiv. Drvo od kojih se izrađuju police je suvo i izuzetno lagano
        zbog toga naše police koje stižu na vašu adresu imaju manje troškove
        dostave.
      </span>
      <br />
      <hr class="w-60 h-1 mx-auto my-4 bg-gray-200 border-0 rounded-md:my-10 dark:bg-gray-700" />
      <span class="indent-8 text-justify ml-8">
        <b class="underline decoration-sky-500/30">
          Izrada polica traje od 7 dana do 14 dana
        </b>
        , police se rade po porudžbini i nema lagera. Vi možete birati boju
        željene police i dimenzije koje vam najviše odgovaraju. Isporuka polica
        ide preko pošte ili lično preuzimanje po dogovoru
      </span>
      <div class="grid grid-cols-3 gap-2 place-items-center mt-10">
        {ProductsItem.map((item) => (
          <Card>
            {" "}
            <ul key={item.id} class="text-center">
              {" "}
              <b>Proizvod:</b> {item.name} <br />
              <b>Cena:</b> {item.price}
              <img
                src={item.picture}
                alt="svet polica"
                width={220}
                class="rounded-lg hover:scale-125 transition duration-1000 ease-in-out"
              ></img>
              <br />
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Products;
