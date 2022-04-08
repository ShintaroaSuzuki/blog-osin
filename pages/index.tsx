import Head from 'next/head'
import Image from 'next/image'
import PostItem from "@/components/PostItem"
import { getAllPosts } from "@/lib/supabase/fetchPosts"
import { Post } from "@/types"

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    },
    revalidate: 60
  }
}

const Home = ({ posts }: { posts: ({ id: string } & Post)[] }) => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Head>
        <title>oshin</title>
        <meta name="description" content="oshin's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-3/4 sm:min-w-1/2 min-h-screen">
        <div className="flex flex-col items-center my-10 sm:my-10">
          <Image src="/grinning-cat-with-smiling-eyes.png" alt="home header image" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-bold tracking-wide">
          osin.
        </h1>
        <p className="text-sm text-slate-500 leading-loose">A software engineer</p>
        <div className="w-full flex flex-col items-center mt-10 gap-y-8">
        {
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                emoji={post.emoji}
                title={post.title}
                createdAt={post.createdAt}
              />
            )
          })
        }
        </div>
      </main>

      <footer className="my-10">
        <span className="text-sm text-slate-600">{`© ${new Date().getFullYear()} osin.`}</span>
      </footer>
    </div>
  )
}

export default Home
