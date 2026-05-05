import { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aaloki.shop";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" },
    { url: `${baseUrl}/shop`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/gifting`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  return [...staticPages, ...productPages];
}
