"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function BunbunPrompt() {
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!question.trim()) {
      return;
    }

    setQuestion("");
    setStatus("Bunbun's chat is getting ready—check back soon! 🐰");
  }

  return (
    <section className="bunbun" aria-label="Ask Bunbun">
      <button
        className="bunbun-intro"
        type="button"
        aria-label="Ask Bunbun about Sunnie's professional work"
        onClick={() =>
          setStatus("hii! ask Bunbun about Sunnie's design work 🐰")
        }
      >
        <Image
          src="/images/bunbun-icon.png"
          alt=""
          width={68}
          height={68}
          className="bunbun-icon"
        />
        <Image
          src="/images/speech-bubble.png"
          alt=""
          width={85}
          height={58}
          className="speech-bubble"
        />
        <span className="speech-bubble-copy" aria-hidden="true">
          hi! ask me
          <br />
          anything
        </span>
      </button>

      <form className="bunbun-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="bunbun-question">
          Ask Bunbun a question
        </label>
        <input
          id="bunbun-question"
          name="question"
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="ask bunbun!"
          autoComplete="off"
        />
        <button
          type="submit"
          aria-label="Send question to Bunbun"
          disabled={!question.trim()}
        >
          <Image
            src="/images/send-arrow.png"
            alt=""
            width={27}
            height={27}
          />
        </button>
      </form>

      <p className="bunbun-status" role="status" aria-live="polite">
        {status}
      </p>
    </section>
  );
}
