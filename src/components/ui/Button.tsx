import Link from "next/link";


interface ButtonProps {

  text: string;

  href: string;

}



export default function Button({
  text,
  href,

}: ButtonProps) {


  return (

    <Link

      href={href}

      className="
      px-8
      py-4
      rounded-xl
      bg-blue-600
      hover:bg-blue-500
      transition
      duration-300
      font-semibold
      text-white
      "

    >

      {text}

    </Link>

  );

}