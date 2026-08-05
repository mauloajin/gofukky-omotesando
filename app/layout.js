import "./globals.css";

const url = "https://gofukky-omotesando.vercel.app";
export const metadata = {
  metadataBase: new URL(url),
  title: "五福来(ごふっき) 表参道 和食｜Gofukky washoku",
  description: "表参道の日本料理店、五福来（ごふっき）。旬の魚介や野菜を使った和食と日本酒、住所、営業時間、予約、アクセスをご案内します。",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title: "五福来（ごふっき）｜Gofukky washoku", description: "表参道で旬の味覚と日本酒を楽しむ日本料理店。店舗情報とアクセスをご案内します。", url, siteName: "五福来（ごふっき）", locale: "ja_JP", type: "website" }
};
export default function RootLayout({children}) { return <html lang="ja"><body>{children}</body></html>; }
