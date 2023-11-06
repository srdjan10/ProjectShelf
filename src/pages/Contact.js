import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div class="container my-18 mx-auto md:px-6 text-amber-700">
      <section class="mb-32">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-10 px-6 text-medium font-bold italic">
              Kontaktirajte me licno ili putem drustvenih mreza
            </h2>
          </div>
        </div>
        <div class="flex flex-wrap justify-center text-medium">
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-2 text-primary">
                      <a
                        href="https://sr-rs.facebook.com/marko.spasojevic.79"
                        target="_blank"
                        alt="facebook"
                        rel="noreferrer"
                        class="no-underline text-amber-700 hover:text-amber-600 "
                      >
                        <FaFacebook size="20%" />
                      </a>
                      <p class="font-bold">Facebook</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-2 text-primary">
                      <a
                        href="mailto:markospasojevic@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        class="no-underline text-amber-700 hover:text-amber-600"
                      >
                        <MdEmail size="20%" />
                      </a>
                      <p class="mb-2 font-bold dark:text-white">Mail</p>
                      <p class="text-neutral-500 italic">
                        spasojevicmarko417@gmail.com
                      </p>
                    </div>
                  </div>
                  <div class="ml-6 grow"></div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-amber-700 hover:text-amber-600">
                      <BsFillTelephoneFill size="20%" />
                      <p class="mb-2 font-bold">Phone</p>
                      <p class="text-neutral-500">063/322-466</p>
                    </div>
                  </div>
                  <div class="ml-6 grow"></div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-amber-700 hover:text-amber-600">
                      <a
                        href="https://www.instagram.com/svetpolica/"
                        target="_blank"
                        alt="facebook"
                        rel="noreferrer"
                        class="no-underline text-amber-700 hover:text-amber-600 "
                      >
                        <BsInstagram size="20%" />
                      </a>
                      <p class="mb-2 font-bold">Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
