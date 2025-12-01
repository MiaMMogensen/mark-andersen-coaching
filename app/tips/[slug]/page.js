import tipsData from "@/data/tips.json";
import Image from "next/image";

export default function ArticlePage({ params }) {
  const article = tipsData.find((t) => t.slug === params.slug);

  if (!article) {
    return <p>Artiklen blev ikke fundet.</p>;
  }

  return (
    <main style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{article.title}</h1>
      <Image src={article.image} alt={article.title} width={800} height={500} />
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        {/* Her kan vi senere indsætte rigtig tekst */}
        Her kommer artiklens indhold...
      </p>
    </main>
  );
}
