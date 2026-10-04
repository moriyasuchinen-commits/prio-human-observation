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

const categories = [
  { key: "icebreak", label: "日常", images: ["smile/smile_S.png", "happy/happy_S.png", "relax/relax_S.png", "amazing/amazing_S.png", "great/great_S.png", "oh/oh_S.png", "surprise/surprise_S.png"] },
  { key: "workStyle", label: "お仕事", images: ["thinking/thinking_S.png", "focus/focus_S.png", "study/study_S.png", "doctor/doctor2_S.png", "nurse/nurse2_S.png", "pointing-left/pointing-left_S.png", "pointing-right/pointing-right_S.png", "base/base_S.png"] },
  { key: "honest", label: "ぶっちゃけ！", images: ["drinking/drinking_S.png", "what/whats_S.png", "antsy/antsy_S.png", "lonely/lonely_S.png", "angry/angry_S.png", "sad/sad_S.png", "please/please_S.png", "peeking-left/peeking-left_S.png", "peeking-right/peeking-right_S.png", "fight/fight_S.png", "burning/burning2_S.png"] }
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
