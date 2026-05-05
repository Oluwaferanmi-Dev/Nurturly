// app/blog/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

async function getPost(slug: string) {
    return client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      category,
      body,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`,
        { slug }
    )
}

async function getRelatedPosts(slug: string, category: string) {
    return client.fetch(
        `*[_type == "post" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      category
    }`,
        { slug, category }
    )
}

// Portable Text component overrides — styled to brand
const ptComponents = {
    block: {
        normal: ({ children }: any) => (
            <p className="text-deep-indigo/80 font-light leading-relaxed text-lg mb-6">{children}</p>
        ),
        h2: ({ children }: any) => (
            <h2 className="font-bold text-3xl text-deep-indigo mt-14 mb-6 leading-snug">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="font-bold text-2xl text-deep-indigo mt-10 mb-4 leading-snug">{children}</h3>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-soft-teal pl-6 my-8 italic text-xl text-deep-indigo/70 font-light leading-relaxed">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="space-y-2 mb-6 pl-6 list-disc text-deep-indigo/80 font-light text-lg">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="space-y-2 mb-6 pl-6 list-decimal text-deep-indigo/80 font-light text-lg">{children}</ol>
        ),
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold text-deep-indigo">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ value, children }: any) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-teal underline underline-offset-2 hover:text-calm-blue transition-colors"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }: any) => (
            <figure className="my-12">
                <img
                    src={urlFor(value).width(900).url()}
                    alt={value.alt || ''}
                    className="w-full rounded-xl object-cover shadow-md"
                />
                {value.caption && (
                    <figcaption className="text-center text-sm text-muted-text mt-3 font-light italic">
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),
    },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)
    if (!post) notFound()

    const related = post.category ? await getRelatedPosts(params.slug, post.category) : []

    return (
        <div className="bg-background text-foreground font-body">
            <Header />

            <main>

                {/* HERO */}
                <section className="py-20 px-6 md:px-12 bg-cream">
                    <div className="max-w-3xl mx-auto text-center">
                        {post.category && (
                            <span className="inline-block bg-soft-teal/10 text-soft-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                                {post.category}
                            </span>
                        )}
                        <h1 className="font-bold text-4xl md:text-5xl text-deep-indigo leading-tight mb-6">
                            {post.title}
                        </h1>
                        {post.excerpt && (
                            <p className="text-muted-text font-light text-lg leading-relaxed mb-8">
                                {post.excerpt}
                            </p>
                        )}
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-text">
                            <span>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long', day: 'numeric', year: 'numeric'
                                })}
                            </span>
                            {post.estimatedReadingTime > 0 && (
                                <>
                                    <span>·</span>
                                    <span>{post.estimatedReadingTime} min read</span>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* MAIN IMAGE */}
                {post.mainImage && (
                    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 -mt-4 mb-4">
                        <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={urlFor(post.mainImage).width(1200).height(525).url()}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* BODY */}
                <article className="py-16 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        {post.body && <PortableText value={post.body} components={ptComponents} />}
                    </div>
                </article>

                {/* BACK LINK */}
                <div className="pb-8 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-soft-teal font-bold hover:text-calm-blue transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Journal
                        </Link>
                    </div>
                </div>

                {/* RELATED POSTS */}
                {related.length > 0 && (
                    <section className="py-20 px-6 md:px-12 bg-cream border-t border-border">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-bold text-2xl text-deep-indigo mb-10">More from the Journal</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {related.map((p: any) => (
                                    <Link key={p._id} href={`/blog/${p.slug.current}`} className="group flex flex-col">
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-5">
                                            {p.mainImage ? (
                                                <img
                                                    src={urlFor(p.mainImage).width(600).height(450).url()}
                                                    alt={p.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-sage/20" />
                                            )}
                                        </div>
                                        {p.category && (
                                            <span className="text-soft-teal text-xs font-bold uppercase tracking-widest mb-2">
                                                {p.category}
                                            </span>
                                        )}
                                        <h3 className="font-bold text-lg text-deep-indigo leading-snug group-hover:text-soft-teal transition-colors">
                                            {p.title}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-20 px-6 md:px-12 bg-soft-teal">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
                            Ready to find the right care?
                        </h2>
                        <p className="text-white/80 font-light mb-8 text-lg">
                            Speak with a care manager today. No pressure, just an honest conversation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
                        >
                            Schedule a Free Consultation
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}