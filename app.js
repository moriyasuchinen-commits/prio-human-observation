const questionData = {
  icebreak: [
    "好きなおにぎりの具は何？理由も教えて！",
    "犬派？猫派？それともAI派？",
    "休日はインドア派？アウトドア派？理想の過ごし方は？",
    "最近買って「これは当たりだった！」と思ったものは？",
    "今の自分をひと言で紹介するとしたら？",
    "子どものころ、なりたかったものはある？",
    "つい何度も食べたくなるものって何？",
    "急に半日休みができたら、何をする？"
  ],
  workStyle: [
    "リモートワークと出社、理想の割合はどれくらい？",
    "仕事中に一番テンションが上がるのは、どんな瞬間？",
    "仕事で壁にぶつかったとき、どうやって気分転換してる？",
    "挑戦してみたい仕事や、働き方のスタイルはある？",
    "仕事で「これだけは譲れない」と思うことは？",
    "一緒に働く人から、どんなふうに頼られるとうれしい？",
    "集中したいとき、自分なりにしていることはある？",
    "最近の仕事で「ちょっと成長したかも」と思えたことは？"
  ],
  honest: [
    "仕事終わりに「今日サシで行く？」と誘われるのは、どんなときならうれしい？",
    "職場の人とごはんに行くなら、どんな雰囲気のお店が好き？",
    "上司・部下・同期に、本当は聞いてみたかったことはある？",
    "「実は自分、こういう性格なんです」という意外な一面はある？",
    "今のチームや職場の「ここが好き」を1つ教えて！",
    "職場で話しかけられるなら、どんなタイミングが話しやすい？",
    "「助かるな」と感じるコミュニケーションはどんなもの？",
    "仕事以外で最近ちょっとうれしかったことは？"
  ]
};

const questionImages = [
  "amazing/amazing_S.gif",
  "angry/angry_S.gif",
  "burning/burning2_S.gif",
  "doctor/doctor2_S.gif",
  "drinking/drinking_S.gif",
  "fight/fight_S.gif",
  "happy/happy_S.gif",
  "lonely/lonely_S.gif"
];

const categories = [
  { key: "icebreak", label: "日常", images: questionImages },
  { key: "workStyle", label: "お仕事", images: questionImages },
  { key: "honest", label: "ぶっちゃけ！", images: questionImages }
];

const usedQuestions = Object.fromEntries(categories.map(({ key }) => [key, []]));
const usedImages = Object.fromEntries(categories.map(({ key }) => [key, []]));
let categoryIndex = 0;

const $ = (selector) => document.querySelector(selector);
const introScreen = $("#intro-screen");
const playScreen = $("#play-screen");
const questionTitle = $("#question-title");
const questionImage = $("#question-image");
const categoryBadge = $("#category-badge");
const questionCard = $("#question-card");

function nextUnused(items, used) {
  if (used.length === items.length) used.length = 0;
  const available = items.map((_, index) => index).filter((index) => !used.includes(index));
  const pick = available[Math.floor(Math.random() * available.length)];
  used.push(pick);
  return items[pick];
}

function showQuestion() {
  const category = categories[categoryIndex];
  const question = nextUnused(questionData[category.key], usedQuestions[category.key]);
  const image = nextUnused(category.images, usedImages[category.key]);

  questionCard.classList.remove("is-entering");
  questionImage.classList.remove("is-entering");
  void questionCard.offsetWidth;

  categoryBadge.textContent = category.label;
  questionTitle.textContent = question;
  questionImage.src = `assets/prio/${image}`;
  questionImage.alt = `${category.label}の質問をするプリオ`;
  questionImage.classList.toggle("is-peeking", image.startsWith("peeking-"));
  questionCard.classList.add("is-entering");
  questionImage.classList.add("is-entering");
  categoryIndex = (categoryIndex + 1) % categories.length;
}

$("#start-button").addEventListener("click", () => {
  introScreen.classList.remove("is-active");
  window.setTimeout(() => { introScreen.hidden = true; }, 240);
  playScreen.hidden = false;
  requestAnimationFrame(() => playScreen.classList.add("is-active"));
  showQuestion();
});

$("#home-button").addEventListener("click", () => {
  playScreen.classList.remove("is-active");
  window.setTimeout(() => { playScreen.hidden = true; }, 240);
  introScreen.hidden = false;
  requestAnimationFrame(() => introScreen.classList.add("is-active"));
  $("#start-button").focus();
});

$("#next-button").addEventListener("click", showQuestion);
