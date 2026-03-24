import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message) return NextResponse.json({ count: 0, results: [] });

  const keywords = message.toLowerCase().split(/\s+/).filter(Boolean);

  const results = products.filter(p => {
    const haystack = [p.name, p.sku, p.category, ...p.tags].join(" ").toLowerCase();
    return keywords.some(kw => haystack.includes(kw));
  });

  return NextResponse.json({ count: results.length, results });
}
