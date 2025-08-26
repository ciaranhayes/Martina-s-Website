import Link from "next/link"
import Image from "next/image"
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
]

export default function ContentContainerWithPhoto({ url, alt }: { url: string; alt: string }) {
    return (
        <div className="text-[#292842]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-4">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border-l border-[#8A2BE2] p-5">
                            <div className="group relative grow">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/9">{post.description}</p>
                            </div>
                        </article>
                    ))}
                    <Image src={url} alt={alt} width={500} height={500}></Image>
                </div>
            </div>
        </div>
    )
}