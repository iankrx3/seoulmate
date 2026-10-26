import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import { cast, plans } from "@/lib/cast";

const features = [
  {
    title: "Chat",
    body: "He keeps the plot. Not a transcript of every single text.",
  },
  {
    title: "Calls",
    body: "In the app, on a minute meter. Voice costs more than text.",
  },
  {
    title: "Pics",
    body: "Send him one and he reacts. His face stays his face.",
  },
];

const questions = [
  {
    q: "Is he a real person?",
    a: "No. Seoulmate is an AI. The boys on this page are fictional.",
  },
  {
    q: "What works today?",
    a: "This page. Chat, calls, and pics are not live yet. The list is how you hear when they are.",
  },
  {
    q: "What do the prices include?",
    a: "Nothing is charged today. Later, Free is capped, Plus is $15 with 30 pics and 15 call minutes, and Close is $25 with more of both. Same boy, same model, on every plan.",
  },
  {
    q: "Is this explicit?",
    a: "No. Romantic, not porn. You need to be 18 or older.",
  },
  {
    q: "Where does my email go?",
    a: "We use it to tell you when this opens. When chat exists, messages go to Google's Gemini API to write replies, and a copy stays in our database.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-6 sm:px-8 sm:pt-12">
        <p className="inline-flex rounded-full bg-melon/70 px-3 py-1 text-xs font-semibold tracking-wide">
          18+ · AI · not a real person
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Let everyone be the lead in their own seoul love story,{" "}
          <span className="text-clay">seoulmate</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
          Four AI boyfriends. You run the plot. Chat, calls, and pics are
          almost here.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#list"
            className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white"
          >
            I&apos;m the lead
          </a>
          <a
            href="#boys"
            className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold"
          >
            Meet the boys
          </a>
        </div>
      </section>

      <section id="boys" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Pick your bias.
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-ink/60 sm:block">
            Fixed cast. You don&apos;t upload a real person&apos;s face.
          </p>
        </div>
        <p className="mt-2 text-sm text-ink/60 sm:hidden">
          Fixed cast. You don&apos;t upload a real person&apos;s face.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {cast.map((person, index) => (
            <li key={person.name}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] bg-white">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, a fictional AI companion`}
                    fill
                    priority={index === 0}
                    className="object-cover object-[center_18%]"
                    sizes="(min-width: 1024px) 22vw, 50vw"
                  />
                </div>
                <p className="mt-3 text-xs font-bold tracking-wide text-clay uppercase">
                  {person.tag}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight">
                  {person.name}{" "}
                  <span className="text-base text-mist">{person.age}</span>
                </h3>
                <p className="mt-1 text-sm leading-6 text-ink/75">{person.line}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          Soon, for real.
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="rounded-[1.6rem] bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-clay uppercase">
                Soon
              </p>
              <h3 className="mt-2 font-serif text-2xl">{feature.title}</h3>
              <p className="mt-2 leading-7 text-ink/75">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">The tab.</h2>
        <p className="mt-2 max-w-xl text-ink/70">
          These are the numbers. This page does not charge you.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {plans.map((plan) => {
            const featured = "featured" in plan && plan.featured;
            return (
              <li
                key={plan.name}
                className={`rounded-[1.6rem] p-5 ${featured ? "bg-ink text-cream" : "bg-white"}`}
              >
                <h3 className="font-serif text-2xl">{plan.name}</h3>
                <p className={`mt-3 font-serif text-5xl tracking-tight ${featured ? "text-pop" : ""}`}>
                  {plan.price}
                </p>
                <p className={`mt-1 text-sm ${featured ? "text-cream/60" : "text-mist"}`}>
                  {plan.cadence}
                </p>
                <ul className="mt-5 space-y-1.5 text-sm leading-6">
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Real talk.</h2>
        <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {questions.map((item) => (
            <div key={item.q} className="grid gap-1 py-4 md:grid-cols-[1fr_1.4fr] md:gap-6">
              <dt className="font-semibold">{item.q}</dt>
              <dd className="text-ink/75">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="list" className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Get the text.
          </h2>
          <p className="mt-3 max-w-md leading-7 text-ink/75">
            Email, plus a yes that you&apos;re 18. Launch note only. Not a
            charge.
          </p>
        </div>
        <div className="rounded-[1.6rem] bg-white p-6 sm:p-8">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
