import { FC } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface ActiveLinkProps {
    text: string
    href: string
}

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
    const { asPath } = useRouter()
    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
    )
}
