export default function poetry(verse) {
  const data = [
    "ای خوشا سودای دل از دیده پنهان داشتن مبحث تحقیق را در دفتر جان داشتن",
    "به سر خاک پدر، دخترکی صورت و سینه بناخن میخست",
    "بیخود از این سوی بدانسو پرید تا که بشاخ گل سرخ آرمید",
    "پهلوی جانان چو بیفکند رخت مورچه‌ای دید بپای درخت",
    "چون نهالی تازه، در پاداش رنج باغبان شاخه‌های خرد خویش از بار، وارون داشتن",
    "دیده را دریا نمودن، مردمک را غوصگر اشک را مانند مروارید غلطان داشتن",
    "روز را با کشت و زرع و شخم آوردن بشب شامگاهان در تنور خویشتن نان داشتن",
    "طرح چمن طیب و صفائی نداشت گلبن پژمرده بهائی نداشت",
    "عقل و علم و هوش را بایکدیگر آمیختن جان و دل را زنده زین جانبخش معجون داشتن",
    "گفت حدیث تو بگوش آشناست منعم دوشینه چرا بی نواست",
    "همچو موسی بودن از نور تجلی تابناک گفتگوها با خدا در کوه و هامون داشتن",
  ];

  let trimmed = verse.trim();
  let lastLet = trimmed.slice(-1);
  let lastDiv = trimmed.split(" ")[0].slice(-1);

  if (lastLet === "ء" || lastLet === "آ") {
    lastLet = "ا";
  }
  if (lastDiv === "ء" || lastDiv === "آ") {
    lastDiv = "ا";
  }

  let response = data.find((x) => x.startsWith(lastLet));

  if (response === undefined) {
    response = data.find((x) => x.startsWith(lastDiv));
  }

  response === undefined ? (response = null) : response;

  return response;
}
