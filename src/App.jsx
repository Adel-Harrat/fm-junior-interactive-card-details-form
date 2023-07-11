import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardDateMM, setCardDateMM] = useState("00");
  const [cardDateYY, setCardDateYY] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");
  const [formSuccess, setFormSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setFormSuccess(true);
  }
  return (
    <div className="min-h-screen md:grid md:place-items-center">
      <section className="bg-[url('/images/bg-main-mobile.png')] md:bg-[url('/images/bg-main-desktop.png')] h-64 md:h-screen w-full md:w-1/3 md:absolute md:top-0 md:left-0 md:bottom-0 bg-cover bg-no-repeat"></section>
      <main className="md:grid md:grid-cols-2 md:max-w-6xl md:px-16 md:mx-auto md:gap-16">
        <section className="h-64 md:h-full flex flex-col md:flex-col-reverse items-end md:items-start relative -translate-y-64 -mb-40 md:flex-1 md:translate-y-0 md:mb-0 md:gap-10">
          {/* start of backcard */}
          <figure className="w-9/12 absolute top-10 right-10 md:relative md:top-auto md:right-auto self-end">
            <img src="./images/bg-card-back.png" alt="back view" />

            <p className="absolute inset-[15%] grid place-items-center text-tw-white text-[.6rem]">
              <span className="w-full text-right">{cardCVC}</span>
            </p>
          </figure>
          {/* end of backcard */}

          {/* start of frontcard */}
          <figure className="w-9/12 absolute top-36 right-20 md:relative md:top-auto md:right-auto z-10">
            <img src="./images/bg-card-front.png" alt="front view" />
            <section className="absolute inset-5 flex flex-col">
              <div className="flex-1">
                <img
                  src="./images/card-logo.svg"
                  alt="card logo"
                  className="w-14"
                />
              </div>
              <h1 className="text-tw-white tracking-widest text-[1.25rem] mb-3 truncate">
                {cardNumber}
              </h1>
              <p className="flex justify-between items-center gap-5 text-tw-white text-[.6rem] uppercase tracking-widest">
                <span className="truncate flex-auto">{cardName}</span>
                <span className="flex-shrink text-right truncate">
                  {cardDateMM} / {cardDateYY}
                </span>
              </p>
            </section>
          </figure>
          {/* end of frontcard */}
        </section>

        <section className="mt-10 md:mt-0 md:flex-1 self-center">
          {!formSuccess ? (
            <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="uppercase text-tw-dark-violet tracking-widest text-sm mb-2 block"
                >
                  cardholder name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  className={`ring-1 shadow-sm ring-zinc-950/20 focus:outline-none w-full rounded-xl p-3 focus:ring-tw-active-input-border-to transition ${
                    errors.name ? "ring-tw-input-errors" : ""
                  }`}
                  {...register("name", {
                    required: "Can't be blank",
                    onChange: (e) => setCardName(e.target.value),
                  })}
                />
                {errors.name && (
                  <p className="text-tw-input-errors text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="number"
                  className="uppercase text-tw-dark-violet tracking-widest text-sm mb-2 block"
                >
                  card number
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="e.g. 1234 5678 9123 0000"
                  className={`ring-1 shadow-sm ring-zinc-950/20 focus:outline-none w-full rounded-xl p-3 focus:ring-tw-active-input-border-to transition ${
                    errors.number ? "ring-tw-input-errors" : ""
                  }`}
                  {...register("number", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Wrong format, numbers only",
                    },
                    onChange: (e) => setCardNumber(e.target.value),
                  })}
                />
                {errors.number && (
                  <p className="text-tw-input-errors text-sm mt-2">
                    {errors.number?.message}
                  </p>
                )}
              </div>
              <div className="mt-5 flex items-start gap-2">
                <div className="flex-1">
                  <label
                    htmlFor="dateMM"
                    className="uppercase text-tw-dark-violet tracking-widest text-sm mb-2 block"
                  >
                    Exp. Date (MM/YY)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="dateMM"
                      type="text"
                      placeholder="MM"
                      className={`ring-1 shadow-sm ring-zinc-950/20 focus:outline-none w-full rounded-xl p-3 focus:ring-tw-active-input-border-to transition ${
                        errors.dateMM ? "ring-tw-input-errors" : ""
                      }`}
                      {...register("dateMM", {
                        required: "Can't be blank",
                        onChange: (e) => setCardDateMM(e.target.value),
                      })}
                    />
                    <input
                      id="dateYY"
                      type="text"
                      placeholder="YY"
                      className={`ring-1 shadow-sm ring-zinc-950/20 focus:outline-none w-full rounded-xl p-3 focus:ring-tw-active-input-border-to transition ${
                        errors.dateYY ? "ring-tw-input-errors" : ""
                      }`}
                      {...register("dateYY", {
                        required: "Can't be blank",
                        onChange: (e) => setCardDateYY(e.target.value),
                      })}
                    />
                  </div>
                  {errors.dateMM ? (
                    <p className="text-tw-input-errors text-sm mt-2">
                      {errors.dateMM?.message}
                    </p>
                  ) : (
                    errors.dateYY && (
                      <p className="text-tw-input-errors text-sm mt-2">
                        {errors.dateYY?.message}
                      </p>
                    )
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="cvc"
                    className="uppercase text-tw-dark-violet tracking-widest text-sm mb-2 block"
                  >
                    cvc
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    placeholder="e.g. 123"
                    className={`ring-1 shadow-sm ring-zinc-950/20 focus:outline-none w-full rounded-xl p-3 focus:ring-tw-active-input-border-to transition ${
                      errors.cvc ? "ring-tw-input-errors" : ""
                    }`}
                    {...register("cvc", {
                      required: "Can't be blank",
                      onChange: (e) => setCardCVC(e.target.value),
                    })}
                  />
                  {errors.cvc && (
                    <p className="text-tw-input-errors text-sm mt-2">
                      {errors.cvc?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-tw-dark-violet text-tw-white capitalize rounded-xl py-3"
                >
                  confirm
                </button>
              </div>
            </form>
          ) : (
            <article className="px-8 mt-20 md:mt-0">
              <figure className="text-center">
                <img
                  src="./images/icon-complete.svg"
                  alt="icon complete"
                  className="inline-block"
                />
              </figure>

              <h1 className="text-4xl uppercase tracking-widest text-tw-dark-violet text-center mt-10">
                Thank you!
              </h1>
              <h2 className="text-tw-dark-gray text-center mt-3">
                We've added your card details
              </h2>
              <button className="w-full bg-tw-dark-violet text-tw-white capitalize rounded-xl py-3 mt-12">
                Continue
              </button>
            </article>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
