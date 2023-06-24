import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-8 rounded-lg  border bg-light shadow dark:border-dark dark:bg-zinc-800 dark:shadow-2xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023 <button className="">Yuvraj</button> | Made with{" "}
          <a className="hover:underline" href="https://nextjs.org/">
            Next Js
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
