import {ClientOnly} from "./client";

export function generateStaticParams() {
    const params = [
        { slug: ['quote'] },
        { slug: ['products'] },
        { slug: ['catalogues'] },
        { slug: ['*'] },
    ];
    console.log('Generated Static Params:', params);
    return params;
}

export default function Page() {
    return <ClientOnly />
}
