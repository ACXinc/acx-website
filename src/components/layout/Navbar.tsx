"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {

const links = [
"Home",
"About",
"ACX",
"Services",
"Portfolio",
"Blog",
"Book",
"Contact"
];

return (
<nav
className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-md
bg-black/40
border-b
border-white/10
"
>

<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center
px-8
py-5
">

<h1 className="text-3xl font-bold text-white">
ACX
</h1>


<div className="flex gap-8">

{links.map((link)=>(

<Link
key={link}
href={`#${link.toLowerCase()}`}
className="
text-white
hover:text-yellow-400
transition
"
>

{link}

</Link>

))}

</div>

</div>

</nav>
)

}