const storeName = "五福来(ごふっき) 表参道 和食｜Gofukky washoku";
const address = "東京都渋谷区神宮前3-4-3 2F";
const phone = "03-6339-7519";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A6%8F%E6%9D%A5%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D3-4-3";
const guideUrl = "https://r.gnavi.co.jp/6tsgrre40000/";
const faq = [
  ["五福来はどこにありますか？", `${address}にあります。表参道駅から徒歩約5分です。`],
  ["営業時間と定休日は？", "営業時間は18:00〜22:00、定休日は不定休です。来店前に最新情報をご確認ください。"],
  ["予約はできますか？", `予約できます。電話（${phone}）または店舗案内ページからご確認ください。`],
  ["どのような料理を楽しめますか？", "旬の魚介や野菜を使い、伝統を大切にしながら工夫を凝らした日本料理と、厳選した日本酒を楽しめます。"],
  ["席について教えてください。", "店主の手仕事を間近で見られるカウンター席と、4名用のテーブル個室があります。個室の利用は予約時にご確認ください。"]
];
const jaCore = ["五福来","ごふっき","Gofukky","表参道 和食","表参道 日本料理","神宮前 和食","神宮前 日本料理","青山 和食","東京 日本料理","旬の魚介","旬の野菜","季節の日本料理","和割烹","日本酒","カウンター席","テーブル個室","予約","営業時間","住所","電話番号","アクセス","地図","表参道駅 徒歩5分","神宮前3丁目","渋谷区神宮前"];
const jaIntent = ["店","レストラン","案内","検索","場所","行き方","予約方法","ディナー","食事","店舗情報"];
const enCore = ["Gofukky","Gofukki","Gofukky washoku","Gofukky Omotesando","Japanese restaurant Omotesando","Japanese cuisine Jingumae","washoku Tokyo","seasonal Japanese cuisine","seasonal seafood","seasonal vegetables","Japanese sake","counter seating","private table room","restaurant reservation","opening hours","address","phone number","directions","Google Maps","near Omotesando Station","Jingumae restaurant","Shibuya Japanese restaurant","Tokyo washoku","Japanese dinner","local dining"];
const enIntent = ["restaurant","guide","information","location","directions","reservation","dinner","dining","nearby","Tokyo Japan"];
const relatedJa = jaCore.flatMap(a => jaIntent.map(b => `${a} ${b}`));
const relatedEn = enCore.flatMap(a => enIntent.map(b => `${a} ${b}`));

export default function Page() {
  const schema = {"@context":"https://schema.org","@type":"Restaurant",name:storeName,alternateName:["五福来（ごふっき）","五福来 Gofukky"],url:"https://gofukky-omotesando.vercel.app",description:"表参道で旬の魚介や野菜を使った日本料理と日本酒を楽しめる和食店。",telephone:phone,servesCuisine:["日本料理","和食"],address:{"@type":"PostalAddress",streetAddress:"神宮前3-4-3 2F",addressLocality:"渋谷区",addressRegion:"東京都",postalCode:"150-0001",addressCountry:"JP"},openingHours:"Mo-Su 18:00-22:00",hasMap:mapUrl,acceptsReservations:true,sameAs:[guideUrl,mapUrl]};
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <header><a className="brand" href="#top"><b>五福来</b><span>GOFUKKY</span></a><nav><a href="#story">特徴</a><a href="#menu">料理</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#english">English</a></nav></header>
    <main id="top"><section className="hero"><div className="seal">五<br/>福<br/>来</div><div><p className="eyebrow">JAPANESE CUISINE · OMOTESANDO</p><h1>旬を映す、<br/>一皿と一献。</h1><p className="lead">表参道で、四季の食材を確かな手仕事に。<br/>日本料理と厳選した日本酒を愉しむ夜。</p><a className="button" href={guideUrl} target="_blank" rel="noreferrer">予約・店舗案内</a></div></section>
    <section id="story" className="section story"><p className="kicker">五福来について</p><div className="twocol"><h2>伝統を大切に、<br/>季節を自由に。</h2><div><p>五福来（ごふっき）は、表参道・神宮前にある日本料理店です。旬の魚介や野菜を使い、素材の持ち味を大切にした料理を仕立てます。</p><p>前菜や八寸など、その日の食材で作る盛り合わせ「お決まり」から始まり、その後は好みのアラカルトを選ぶスタイル。料理に寄り添う日本酒とともに、季節の移ろいを味わえます。</p></div></div></section>
    <section id="menu" className="section menu"><p className="kicker">料理と空間</p><h2>その日の食材を、<br/>その日の一皿へ。</h2><div className="cards"><article><span>01</span><h3>旬の魚介と野菜</h3><p>日々仕入れる魚介や野菜を、さまざまな調理法で。季節を感じる日本料理を提供します。</p></article><article><span>02</span><h3>お決まりとアラカルト</h3><p>前菜や八寸などの盛り合わせから始め、続きは好みに合わせて選べます。</p></article><article><span>03</span><h3>料理と日本酒</h3><p>工夫を凝らした料理と厳選した日本酒を、一緒に楽しめます。</p></article></div></section>
    <section id="info" className="section info"><p className="kicker">店舗情報</p><h2>Information</h2><dl><div><dt>正式店名</dt><dd>{storeName}</dd></div><div><dt>料理</dt><dd>日本料理・和食</dd></div><div><dt>住所</dt><dd>{address}</dd></div><div><dt>電話</dt><dd><a href={`tel:${phone}`}>{phone}</a></dd></div><div><dt>営業時間</dt><dd>18:00〜22:00</dd></div><div><dt>定休日</dt><dd>不定休</dd></div><div><dt>席</dt><dd>カウンター席、4名用テーブル個室</dd></div></dl><p className="note">営業時間・休業日は変更になる場合があります。来店前に最新情報をご確認ください。</p></section>
    <section id="access" className="section access"><div><p className="kicker">アクセス</p><h2>表参道駅から<br/>徒歩約5分。</h2><p>{address}</p><p>東京メトロ銀座線・千代田線・半蔵門線の表参道駅から神宮前3丁目方面へ。店舗は建物の2階です。</p><div className="actions"><a className="button dark" href={mapUrl} target="_blank" rel="noreferrer">Google Maps</a><a href={`tel:${phone}`} className="tel">{phone}</a></div></div><div className="mapmark"><span>OMOTESANDO</span><b>表参道</b><small>JINGUMAE · TOKYO</small></div></section>
    <section className="section faq"><p className="kicker">よくある質問</p><h2>FAQ</h2>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section id="english" className="section english"><p className="kicker">English Guide</p><h2>Gofukky<br/>washoku</h2><p>Gofukky is a Japanese restaurant in Jingumae, about a five-minute walk from Omotesando Station. It serves seasonal Japanese cuisine prepared with fresh seafood and vegetables, together with a selection of Japanese sake.</p><div className="enggrid"><p><b>Address</b><br/>2F, 3-4-3 Jingumae, Shibuya-ku, Tokyo 150-0001, Japan</p><p><b>Hours</b><br/>6:00 PM–10:00 PM<br/>Irregular closing days</p><p><b>Reservations</b><br/>Call {phone} or use the linked restaurant guide.</p><p><b>Access</b><br/>About five minutes on foot from Omotesando Station. The restaurant is on the second floor.</p></div><a className="button" href={mapUrl} target="_blank" rel="noreferrer">OPEN GOOGLE MAPS</a></section>
    <section className="section related"><details><summary>関連する検索語 / Related searches</summary><div><p>{relatedJa.join("・")}</p><p lang="en">{relatedEn.join(" · ")}</p></div></details></section></main>
    <footer><div className="brand"><b>五福来</b><span>GOFUKKY</span></div><p>{storeName}<br/>{address}<br/>{phone}</p><p>© 2026 五福来</p></footer></>;
}
