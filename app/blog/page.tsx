// app/blog/page.tsx

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

async function getPosts() {
    return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      category,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }
  `)
}

export default async function BlogPage() {
    const posts = await getPosts()
    const [featured, ...rest] = posts

    return (
        <div className="bg-background text-foreground font-body">
            <Header />

            <main>

                {/* HERO */}
                <section className="py-24 px-6 md:px-12 bg-deep-indigo">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                            Nurturly Journal
                        </span>
                        <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                            Insights on care,<br />
                            <span className="italic font-light text-sage">family, and wellbeing</span>
                        </h1>
                        <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
                            Practical guidance and honest conversation for families navigating home care.
                        </p>
                    </div>
                </section>

                {/* FEATURED POST */}
                {featured && (
                    <section className="py-20 px-6 md:px-12 bg-cream">
                        <div className="max-w-7xl mx-auto">
                            <span className="text-soft-teal font-bold tracking-widest text-xs uppercase mb-8 block">
                                Featured
                            </span>
                            <Link href={`/blog/${featured.slug.current}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                                    {featured.mainImage ? (
                                        <img
                                            src={urlFor(featured.mainImage).width(900).height(675).url()}
                                            alt={featured.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-sage/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-5xl text-sage/40">article</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {featured.category && (
                                        <span className="inline-block bg-soft-teal/10 text-soft-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                                            {featured.category}
                                        </span>
                                    )}
                                    <h2 className="font-bold text-3xl md:text-4xl text-deep-indigo mb-6 leading-tight group-hover:text-soft-teal transition-colors">
                                        {featured.title}
                                    </h2>
                                    {featured.excerpt && (
                                        <p className="text-muted-text font-light leading-relaxed mb-8 text-lg">
                                            {featured.excerpt}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-4 text-sm text-muted-text">
                                        <span>
                                            {new Date(featured.publishedAt).toLocaleDateString('en-US', {
                                                month: 'long', day: 'numeric', year: 'numeric'
                                            })}
                                        </span>
                                        {featured.estimatedReadingTime > 0 && (
                                            <>
                                                <span>·</span>
                                                <span>{featured.estimatedReadingTime} min read</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                )}

                {/* POST GRID */}
                {rest.length > 0 && (
                    <section className="py-20 px-6 md:px-12 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {rest.map((post: any) => (
                                    <Link
                                        key={post._id}
                                        href={`/blog/${post.slug.current}`}
                                        className="group flex flex-col"
                                    >
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-6">
                                            {post.mainImage ? (
                                                <img
                                                    src={urlFor(post.mainImage).width(600).height(450).url()}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-sage/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-4xl text-sage/40">article</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col flex-grow">
                                            {post.category && (
                                                <span className="text-soft-teal text-xs font-bold uppercase tracking-widest mb-3">
                                                    {post.category}
                                                </span>
                                            )}
                                            <h3 className="font-bold text-xl text-deep-indigo mb-3 leading-snug group-hover:text-soft-teal transition-colors">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="text-muted-text font-light text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            <div className="flex items-center gap-3 text-xs text-muted-text mt-auto pt-4 border-t border-border">
                                                <span>
                                                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                        month: 'short', day: 'numeric', year: 'numeric'
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
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* EMPTY STATE */}
                {posts.length === 0 && (
                    <section className="py-32 px-6 text-center bg-white">
                        <p className="text-muted-text font-light text-lg">No posts published yet. Check back soon.</p>
                    </section>
                )}

                {/* CTA STRIP */}
                <section className="py-20 px-6 md:px-12 bg-soft-teal">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
                            Looking for the right care?
                        </h2>
                        <p className="text-white/80 font-light mb-8 text-lg">
                            Let's have an honest conversation about what your family needs.
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