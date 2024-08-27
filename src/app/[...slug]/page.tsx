import {ClientOnly} from "./client";

export function generateStaticParams() {
    const params = [
        { slug: ['quote'] },
        { slug: ['products'] },
        { slug: ['categories'] },
    ];
    console.log('Generated Static Params:', params);
    return params;
}

export default function Page() {
    return <ClientOnly />
}
