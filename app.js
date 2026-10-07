const questionData = {
  icebreak: [
    "好きなおにぎりの具は何？理由も教えて！",
    "犬派？猫派？それともAI派？",
    "休日はインドア派？アウトドア派？理想の過ごし方は？",
    "最近買って「これは当たりだった！」と思ったものは？",
    "今の自分をひと言で紹介するとしたら？",
    "子どものころ、なりたかったものはある？",
    "つい何度も食べたくなるものって何？",
    "急に半日休みができたら、何をする？",
    "最近、思わず誰かにおすすめしたくなったものは？",
    "朝に強い？夜に強い？いちばん調子がいい時間帯は？",
    "コンビニでつい買ってしまうものはある？",
    "旅行に行くなら、予定を詰め込む派？のんびり派？",
    "いま1日だけ自由に使えるなら、何をして過ごす？",
    "自分だけの小さなこだわりってある？",
    "最近笑ったこと、またはうれしかったことは？",
    "学生時代に好きだった教科は？",
    "これまででいちばん記憶に残っているごはんは？",
    "人からよく言われる自分の印象は？",
    "もし新しい趣味を始めるなら、何をやってみたい？",
    "スマホの中でいちばんよく使うアプリは？",
    "つい集めてしまうもの・好きなものはある？",
    "早起きした休日、最初にしたいことは？",
    "自分のごきげんを取るための小さな習慣は？",
    "「これがあるとちょっと元気になる」ものは？"
  ],
  workStyle: [
    "リモートワークと出社、理想の割合はどれくらい？",
    "仕事中に一番テンションが上がるのは、どんな瞬間？",
    "仕事で壁にぶつかったとき、どうやって気分転換してる？",
    "挑戦してみたい仕事や、働き方のスタイルはある？",
    "仕事で「これだけは譲れない」と思うことは？",
    "一緒に働く人から、どんなふうに頼られるとうれしい？",
    "集中したいとき、自分なりにしていることはある？",
    "最近の仕事で「ちょっと成長したかも」と思えたことは？",
    "仕事を始めるとき、まず最初にやることは？",
    "相談するとき、チャット・口頭・資料のどれが話しやすい？",
    "どんなフィードバックをもらえるとうれしい？",
    "仕事で「助かった！」と思った周りの行動は？",
    "新しい仕事を任されたら、まず何を確認したい？",
    "会議で発言しやすいのは、どんな雰囲気のとき？",
    "自分がチームに持ち込めている強みは何だと思う？",
    "仕事の予定は、細かく決めたい派？余白を残したい派？",
    "働く場所に、どんな環境や道具があるとうれしい？",
    "仕事でうまくいったとき、誰と喜びを共有したくなる？",
    "「この人と働きやすいな」と感じるのはどんな人？",
    "やる気が出にくいとき、最初の一歩として何をする？",
    "仕事で新しく身につけたいスキルは？",
    "自分にとって、理想の1日の仕事の終わり方は？",
    "チームで大事にしたいルールや空気感はある？",
    "最近、誰かの仕事ぶりで素敵だと思ったことは？"
  ],
  honest: [
    "仕事終わりに「今日サシで行く？」と誘われるのは、どんなときならうれしい？",
    "職場の人とごはんに行くなら、どんな雰囲気のお店が好き？",
    "上司・部下・同期に、本当は聞いてみたかったことはある？",
    "「実は自分、こういう性格なんです」という意外な一面はある？",
    "今のチームや職場の「ここが好き」を1つ教えて！",
    "職場で話しかけられるなら、どんなタイミングが話しやすい？",
    "「助かるな」と感じるコミュニケーションはどんなもの？",
    "仕事以外で最近ちょっとうれしかったことは？",
    "職場で「これをしてもらえると安心する」と思うことは？",
    "自分が忙しいとき、周りにはどう接してもらえるとうれしい？",
    "声をかけてもらえるとしたら、どんな言葉がうれしい？",
    "仕事の相談は、早めにしたい派？少し考えてからしたい派？",
    "職場で、実はもっと増えたらいいと思う会話はある？",
    "相手と距離を縮めるとき、どんなきっかけがあると自然？",
    "「ありがとう」を伝えるなら、どんな方法が自分らしい？",
    "仕事中に、ちょっと気分が上がる瞬間は？",
    "チームで過ごす時間に、密かに楽しみにしていることは？",
    "自分が周りにできる、ちょっとしたサポートは何だと思う？",
    "意見が違うとき、どんな話し方だと受け取りやすい？",
    "職場の人に知っておいてもらえたらうれしい自分の特徴は？",
    "「今日はよく頑張った」と思うのは、どんな日？",
    "誰かに頼るとき、どんな頼り方なら頼りやすい？",
    "職場で感じる、小さな居心地のよさはどんなところ？",
    "これからチームで試してみたい、ちょっとした工夫はある？"
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
