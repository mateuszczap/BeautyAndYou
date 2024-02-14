import Link from "next/link"

export function Logo() {
    return <Link href='/'>
    <img src='/logo.png' width={200}></img>
    </Link>
};