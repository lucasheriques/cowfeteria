import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cowfeteria - Cardápio Digital</title>
        <meta
          name="description"
          content="Site da Cowfeteria - a cafeteria com um tema de mimosas"
        />
        <link rel="icon" href="/cow.svg" />
      </Head>

      <main className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="lg:mb-8 mb-4">
          <h1 className="text-rose-300 block text-4xl text-center leading-8 my-4 font-bold mb-4">
            Bem vindo a Cowfeteria!
          </h1>
          <h2 className="text-purple-300 text-3xl font-semibold">
            Sua cafeteria com um tema de vaquinhas.
          </h2>
        </div>

        <div className="relative text-base mx-auto max-w-prose">
          <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
            <Image src="/cow.svg" alt="Cowfeteria" width={300} height={300} />
          </div>
        </div>

        <div className="lg:mt-0">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500 font-semibold">
              Todas as nossas as nossas bebidas e docinhos são caseiros, e
              feitos com zero adição de açúcares.
            </p>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="text-base max-w-prose mx-auto lg:max-w-none text-gray-500 space-y-4">
            <div>
              <h3 className="font-bold mb-2 text-lg text-rose-400">Docinhos</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold block">Palha italiana</span>
                  <p className="text-sm">
                    Feita com leite condensado diet e leite em pó.
                  </p>
                </li>
                <li>
                  <span className="font-semibold block line-through">
                    Cookie de chocolate
                  </span>
                  <p className="text-sm">
                    Com gotinhas de chocolate preto e branco.{" "}
                    <span className="text-rose-300 font-semibold">
                      Temporariamente indisponível pela falta de ingredientes.
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-1 text-lg text-rose-400">
                Bebidinhas
              </h3>
              <p className="text-sm font-semibold mb-2">
                Nosso café é moído na hora pois a Iara é chique ✨
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold block">Expresso</span>
                  <p className="text-sm">Intenso e concentrado.</p>
                </li>
                <li>
                  <span className="font-semibold block">Café</span>
                  <p className="text-sm">Maior e mais leve.</p>
                </li>
                <li>
                  <span className="font-semibold block">
                    Capuccino italiano
                  </span>
                  <p className="text-sm">
                    Café e Leitíssimo © vaporizado, com canela ou cacau por
                    cima.
                  </p>
                </li>

                <li>
                  <span className="font-semibold block">Capuccino gelado</span>
                  <p className="text-sm">
                    O mesmo que o de cima, mas pro verão. ☀️
                  </p>
                </li>
                <li>
                  <span className="font-semibold block">Coca zero</span>
                  <p className="text-sm">
                    Sim, nós também somos viciados em coca. Nem só de café vivem
                    os humanos.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg text-rose-400">
                Comidinhas
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold block">
                    Quibe de Carne com quinoa
                  </span>
                  <p className="text-sm">Sem trigo.</p>
                </li>
                <li>
                  <span className="font-semibold block">
                    Mini-pizza de frango
                  </span>
                  <p className="text-sm">Massa de farinha de bico.</p>
                </li>
                <li>
                  <span className="font-semibold block">
                    Mini-pizza de cogumelos com alho poró
                  </span>
                  <p className="text-sm">E com queijo minas sem lactose.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="mt-16 text-rose-500">© 2022 Cowfeteria.</footer>
      </main>
    </div>
  );
};

export default Home;
