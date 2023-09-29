"use client";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body >
        <h2>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
