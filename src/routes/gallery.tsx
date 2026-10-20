import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { sitePhotos } from "@/lib/unsplash-images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Media Gallery — Inua Youth Initiative" },
      { name: "description", content: "Illustrative imagery of youth leadership, mentorship and community in Kenya." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: sitePhotos.galleryHero, label: "Youth discussion", span: "md:col-span-2" },
  { src: sitePhotos.galleryStory, label: "Mentorship", span: "" },
  { src: sitePhotos.galleryTech, label: "Practical skills", span: "" },
  { src: sitePhotos.galleryCommunity, label: "Community participation", span: "md:col-span-2" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Media Gallery"
        title="Youth, learning and community."
        description="Illustrative Kenyan-context imagery. These generated images are not photographs of Inua Youth Initiative events or participants."
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((img, i) => (
              <figure key={i} className={`overflow-hidden group ${img.span}`}>
                <img
                  src={img.src}
                  alt={`Illustration of ${img.label.toLowerCase()} in a Kenyan context`}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="mt-3 text-muted-foreground">{img.label} · Illustrative image</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
