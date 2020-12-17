import { Category, Year } from "../types";

export type Data = {
  videoId: string;
  title: string;
  description: string;
  year: Year;
  category: Category;
  hp: string;
};
export const DATA: Array<Data> = [
  {
    title: "ポケットモンスター",
    description: `
    老若男女問わず愛される世界的人気コンテンツ。
    ゲーム嫌いでない限り、プレイしたことがあるのではないか。
    ゲームのみならずアニメも大人気で社会現象となった。
    特に今では当たり前となった育成・交換・対戦というコアを
    作り出した点で、革命的ともいえる。
    また、種族値や個体値など隠しパラメータもあり、
    ただ捕まるだけではなく厳選していく面白さもある。
    `,
    videoId: "BoZ0Zwab6Oc",
    year: "90",
    category: "RPG",
    hp: "https://www.pokemon.co.jp/",
  },
  {
    title: "Pokémon GO",
    description: `
    世界的人気コンテンツとIngressのNianticによる
    コラボから生まれたゲーム。
    ARを通して実際に歩くことでポケモンを捕まえられるという点で、
    全てのポケモンファンにとって夢のようなゲームとなった。
    その人気は爆発的であり、一部社会問題化するレベルであった。
    当初は育成のみであったが、現在は交換と対戦も行えるようになり、
    ますますポケモンの世界観を築き上げている。
    `,
    videoId: "lKUwVYUKii4",
    year: "10",
    category: "Mobile",
    hp: "https://www.pokemongo.jp/",
  },
  {
    title: "Another Century's Episode",
    description: `
    全てのロボット好きがプレイするべきゲーム。
    フロム・ソフトウェアによる緻密なロボットのモデリングと挙動、
    そしてシリーズを通して提供される美麗なオープニングは、
    ロボット好きならば確実に胸を熱くする。
    最新作はもう10年近く出ていないが、今でも再開を待ち望んでいる。
    3は本当に名作なので、機会があればプレイしてもらいたい。
    `,
    videoId: "uZzrz3oAknk",
    year: "00",
    category: "Action",
    hp: "https://www.jp.playstation.com/software/title/slps25784.html",
  },
  {
    title: "キャサリン",
    description: `
    独特な世界観とゲームシステムを持ったホラーテイストパズルゲーム。
    パズルの謎解きだけではなく、日常パートにおける謎解きも求められる。
    その独自性から好き嫌いは分かれると思うが、その空気感から
    ハマる人には本当にハマるゲーム。
    ただし、パズルの難易度やホラー要素も相当なので注意が必要。
    `,
    videoId: "NqVOssrCTd8",
    year: "10",
    category: "Puzzle",
    hp: "http://fullbody.jp/",
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    description: `
    オープンワールドゲームの金字塔、エルダースクロール。
    前作のオブリビオンも名作であるが、それを上回るのがSkyrim。
    圧倒的な自由度と映像美により世界中のファンの心を掴んだ。
    そのままでも十分楽しいゲームであるが、その真骨頂はMODを導入することで
    自分好みにカスタマイズできることである。
    圧倒的量と質のMODにより、10年経った今でも色褪せることのない名作。
    `,
    videoId: "JSRtYpNRoN0",
    year: "10",
    category: "RPG",
    hp: "https://elderscrolls.bethesda.net/ja/skyrim",
  },
  {
    title: "League of Legends",
    description: `
    世界で最もプレイヤーが多く、そしてeSportsの代表的タイトル。
    日本では、世界ほどプレイヤー数は多くないものの、
    好きな人はとことん好きになるゲームである。
    一方、その難解なゲームシステムや覚えることがひたすら多い点など、
    確かに初心者にとって寄り付き難い点があるのも事実である。
    全くの初心者にとっては難しいかも知れないが、まずは10試合程試してみて、
    自分に合うか合わないかを見定めるのが良いかもしれない。
    `,
    videoId: "ggVB9gzwRIw",
    year: "00",
    category: "MOBA",
    hp: "https://jp.leagueoflegends.com/ja-jp/",
  },
  {
    title: "実況パワフルプロ野球",
    description: `
    野球ゲームの代表的タイトル。
    野球好きでゲーム好きであれば、ほとんどの人がプレイしているのではないか。
    野球ゲームとしては勿論面白いのであるが、その真価は育成にある。
    「サクセス」というモードでオリジナルの選手が作成可能であり、
    元となる選手の能力やイベントなど運要素も絡むため非常にやりこみがいがある。
    野球に興味がなくてもサクセスは面白いので、是非ともプレイしてほしい。
    `,
    videoId: "PhQkyi8VjU4",
    year: "90",
    category: "Sports",
    hp: "https://www.konami.com/pawa/2020/",
  },
  {
    title: "Dark Souls",
    description: `
    ソウルライクゲームという新たなジャンルを作り出した名作。
    ステージやボスが初見では攻略が非常に難しいため取っ付きにくさはあるものの、
    プレイヤースキルの向上や攻略法を見出だせられればクリア可能な絶妙な難易度が醍醐味。
    また、オンライン連携が優れており、敵として他人のプレイに介入することや、
    逆に味方として他人を支援することも可能となっている。
    自分自身が強くなっていくという達成感を味わいたい人におすすめしたいゲーム。
    `,
    videoId: "Woe0PYZPxRw",
    year: "10",
    category: "RPG",
    hp: "https://www.darksouls.jp/",
  },
  {
    title: "モンスターハンター",
    description: `
    様々なモンスターを狩っていくことで装備を拡充していくゲーム。
    最大の魅力は協力であり、一人ではハントが難しいモンスターであっても、
    他人と協力することで狩猟可能となる。
    また、アクション性や武器の種類もシリーズを増すごとに増えていっているため、
    アクションゲームとしての魅力も大きい。
    友達とアクションゲームで楽しみたいという時に最適のゲーム。
    `,
    videoId: "xe-RAeDfOMM",
    year: "00",
    category: "Action",
    hp: "https://www.monsterhunter.com/",
  },
  {
    title: "グランツーリスモ",
    description: `
    緻密な挙動と美麗な映像による本格的な運転を楽しめるゲーム。
    現実世界ではなかなか運転できない車であっても、
    本当に運転しているような感覚を得られる。
    そのままのコントローラーでも勿論楽しめるが、
    別売りのハンドルコントローラーを使うと没入感が高まるので、
    是非試してみることをおすすめしたい！
    `,
    videoId: "5CfLs8Be6Q8",
    year: "90",
    category: "Racing",
    hp: "https://www.gran-turismo.com/jp/",
  },
  {
    title: "かまいたちの夜",
    description: `
    サウンドノベルの草分け的な存在。
    今ではコンシューマ機やモバイル問わず多くのサウンドノベルがあり、
    少々シナリオや演出の古臭さは否めないものの、
    古典的名作として依然としてプレイする価値はある。
    現在では移植された端末も古くなってきているので、
    なかなか挑戦する機会は難しいかもしれないがプレイしてもらいたい。
    `,
    videoId: "WzeJ8C9QRq8",
    year: "90",
    category: "Novel",
    hp: "http://5pb.jp/games/kamaitachi/",
  },
  {
    title: "Cities: Skylines",
    description: `
    美麗な画質で楽しくプレイできる都市開発シミュレーションゲーム。
    様々な区画を自ら設定し、適切な建物を建てていくことで、
    都市をどんどん大きくすることが目的のゲーム。
    理想的な都市像を自分の中で持ってプレイすると、その実現のために
    どんどん時間が溶けていくゲーム。終わりどころが難しい。
    渋滞がどうしても発生しがちでその解消に頭を悩ませることになるが、
    そこも含めてやりがいを感じる楽しいゲームである。
    `,
    videoId: "CpWe03NhXKs",
    year: "10",
    category: "Other",
    hp: "https://www.citiesskylines.com/",
  },
  {
    title: "theHunter: Call of the Wild",
    description: `
    「一度でいいからハンティングをしてみたい」
    そんな希望を叶えてくれるゲームである。リアルなゲームであり、
    プレイヤーは音を立てないこと、的確な部位を撃つことを求められ、
    人によっては嫌気が差すかもしれない。
    しかし、そのようなリアルにこそ面白さを感じる人は絶対にハマる。
    1つ例を挙げると、本作ではヘッドショットは基本的に悪手だ。
    一般的なゲームでは、ヘッドショットは一撃で相手を沈めるため、
    ナイスショットなのになぜだろうか？
    それは頭は頑丈な頭蓋骨で守られており、一撃で落としにくいからだ。
    逆に心臓や肺の胸や頚椎の折れる首を狙うのが上策とされている。
    このようなこだわりにピンっと来た人、是非ともプレイしてほしい。
    `,
    videoId: "VGOTYfGMyoE",
    year: "10",
    category: "Other",
    hp: "http://callofthewild.thehunter.com/",
  },
];
