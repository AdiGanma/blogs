import { getEntries } from "@/api/getEntries";
import CardBlogs from "./components/CardBlogs";
import { findAsset } from "@/utils/findAsset";

export default async function Home() {
  const blogs = await getEntries();

  // console.log(blogs);

  return (
    <main className="container mx-auto px-4">
      {/* SECTION JUMBOTRON */}
      <section className="mt-10 space-y-2 text-center">
        <h1 className="md:text-5xl text-3xl font-bold">Coba Dulu Blogs</h1>
        <p className="md:text-xl text-lg">
          Blog ini Berisi Informasi yang Penting untuk tidak di lihat
        </p>
      </section>
      {/* BLOG LIST */}
      <section className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
        {blogs.items.map((blog, index) => {
          const assetId = blog.fields.thumbnail.sys.id;
          const assets = blogs.includes.Asset;
          const image = findAsset(assetId, assets);
          return (
            <CardBlogs
              key={index}
              slug={blog.fields.slug}
              title={blog.fields.title}
              author={blog.fields.author}
              category={blog.fields.category}
              createdAt={blog.fields.createdAt}
              description={blog.fields.description}
              imageUrl={`https:${image?.fields.file.url}`}
            />
          );
        })}
      </section>
    </main>
  );
}
