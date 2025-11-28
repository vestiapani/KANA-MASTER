export interface StoryPage {
  content: string;
  romaji: string;
  translation: string;
}

export interface Story {
  id: string;
  title: string;
  titleJapanese: string;
  level: "beginner" | "intermediate";
  script: "hiragana" | "katakana" | "mixed";
  pages: StoryPage[];
  illustration: string;
}

export const storiesData: Story[] = [
  {
    id: "1",
    title: "My Family",
    titleJapanese: "わたしのかぞく",
    level: "beginner",
    script: "hiragana",
    illustration: "story-family",
    pages: [
      {
        content: "わたしのなまえはさくらです。わたしは、にほんにすんでいます。",
        romaji:
          "Watashi no namae wa Sakura desu. Watashi wa, nihon ni sundeimasu.",
        translation: "My name is Sakura. I live in Japan.",
      },
      {
        content:
          "わたしのかぞくは、よにんです。おとうさんと、おかあさんと、おにいさんと、わたしです。",
        romaji:
          "Watashi no kazoku wa, yonin desu. Otousan to, okaasan to, oniisan to, watashi desu.",
        translation:
          "My family has four people. Father, mother, older brother, and me.",
      },
      {
        content:
          "おとうさんはかいしゃいんです。まいにち、でんしゃでかいしゃにいきます。",
        romaji:
          "Otousan wa kaishain desu. Mainichi, densha de kaisha ni ikimasu.",
        translation:
          "My father is a company employee. Every day, he goes to the company by train.",
      },
      {
        content:
          "おかあさんはせんせいです。しょうがっこうでこどもたちにべんきょうをおしえます。",
        romaji:
          "Okaasan wa sensei desu. Shougakkou de kodomotachi ni benkyou wo oshiemasu.",
        translation:
          "My mother is a teacher. She teaches children at elementary school.",
      },
      {
        content:
          "おにいさんはだいがくせいです。まいにちいっしょうけんめいべんきょうしています。",
        romaji:
          "Oniisan wa daigakusei desu. Mainichi isshoukenmei benkyou shiteimasu.",
        translation:
          "My older brother is a university student. He studies hard every day.",
      },
      {
        content:
          "わたしはこうこうせいです。ともだちとたくさんあそびます。とてもたのしいです。",
        romaji:
          "Watashi wa koukousei desu. Tomodachi to takusan asobimasu. Totemo tanoshii desu.",
        translation:
          "I am a high school student. I play with my friends a lot. It's very fun.",
      },
    ],
  },
  {
    id: "2",
    title: "A Nice Day",
    titleJapanese: "いいてんき",
    level: "beginner",
    script: "hiragana",
    illustration: "story-park",
    pages: [
      {
        content: "きょうは、とてもいいてんきです。そらがあおくて、きれいです。",
        romaji: "Kyou wa, totemo ii tenki desu. Sora ga aokute, kirei desu.",
        translation:
          "Today is very nice weather. The sky is blue and beautiful.",
      },
      {
        content: "たいようがあかるくかがやいています。あたたかいです。",
        romaji: "Taiyou ga akaruku kagayaiteimasu. Atatakai desu.",
        translation: "The sun is shining brightly. It's warm.",
      },
      {
        content:
          "わたしは、ともだちとこうえんにいきます。こうえんはいえからちかいです。",
        romaji:
          "Watashi wa, tomodachi to kouen ni ikimasu. Kouen wa ie kara chikai desu.",
        translation:
          "I go to the park with my friends. The park is close to my house.",
      },
      {
        content: "こうえんには、たくさんのひとがいます。みんなたのしそうです。",
        romaji: "Kouen niwa, takusan no hito ga imasu. Minna tanoshisou desu.",
        translation: "There are many people at the park. Everyone looks happy.",
      },
      {
        content:
          "こどもたちが、げんきにあそんでいます。ボールであそんでいます。",
        romaji: "Kodomotachi ga, genki ni asondeimasu. Booru de asondeimasu.",
        translation:
          "Children are playing energetically. They are playing with a ball.",
      },
      {
        content:
          "わたしたちも、いっしょにあそびました。とてもたのしいいちにちでした。",
        romaji:
          "Watashitachi mo, issho ni asobimashita. Totemo tanoshii ichinichi deshita.",
        translation: "We also played together. It was a very fun day.",
      },
    ],
  },
  {
    id: "3",
    title: "My Cat",
    titleJapanese: "わたしのねこ",
    level: "beginner",
    script: "hiragana",
    illustration: "story-cat",
    pages: [
      {
        content: "わたしは、ねこをかっています。なまえは、ミケです。",
        romaji: "Watashi wa, neko wo katteimasu. Namae wa, Mike desu.",
        translation: "I have a cat. Her name is Mike.",
      },
      {
        content: "ミケは、さんさいです。ちいさくて、とてもかわいいです。",
        romaji: "Mike wa, sansai desu. Chiisaku te, totemo kawaii desu.",
        translation: "Mike is three years old. She is small and very cute.",
      },
      {
        content:
          "ミケのからだは、しろとくろとちゃいろです。ふわふわしています。",
        romaji:
          "Mike no karada wa, shiro to kuro to chairo desu. Fuwafuwa shiteimasu.",
        translation: "Mike's body is white, black, and brown. She is fluffy.",
      },
      {
        content:
          "まいにち、わたしはミケとあそびます。ボールをなげると、おいかけます。",
        romaji:
          "Mainichi, watashi wa Mike to asobimasu. Booru wo nageru to, oikakemasu.",
        translation:
          "Every day, I play with Mike. When I throw a ball, she chases it.",
      },
      {
        content: "ミケは、さかながだいすきです。まいにち、さかなをたべます。",
        romaji:
          "Mike wa, sakana ga daisuki desu. Mainichi, sakana wo tabemasu.",
        translation: "Mike loves fish. She eats fish every day.",
      },
      {
        content: "ミケは、げんきなねこです。わたしのだいじなともだちです。",
        romaji:
          "Mike wa, genki na neko desu. Watashi no daiji na tomodachi desu.",
        translation: "Mike is an energetic cat. She is my precious friend.",
      },
    ],
  },
  {
    id: "4",
    title: "Shopping",
    titleJapanese: "かいもの",
    level: "beginner",
    script: "hiragana",
    illustration: "story-shopping",
    pages: [
      {
        content: "きのう、わたしはおかあさんといっしょにスーパーにいきました。",
        romaji: "Kinou, watashi wa okaasan to issho ni suupaa ni ikimashita.",
        translation: "Yesterday, I went to the supermarket with my mother.",
      },
      {
        content:
          "スーパーは、おおきくて、あかるいです。たくさんのひとがいました。",
        romaji:
          "Suupaa wa, ookikute, akarui desu. Takusan no hito ga imashita.",
        translation:
          "The supermarket is big and bright. There were many people.",
      },
      {
        content:
          "まず、やさいのうりばにいきました。トマトときゅうりをかいました。",
        romaji:
          "Mazu, yasai no uriba ni ikimashita. Tomato to kyuuri wo kaimashita.",
        translation:
          "First, we went to the vegetable section. We bought tomatoes and cucumbers.",
      },
      {
        content:
          "つぎに、くだもののうりばにいきました。りんごとバナナをかいました。",
        romaji:
          "Tsugi ni, kudamono no uriba ni ikimashita. Ringo to banana wo kaimashita.",
        translation:
          "Next, we went to the fruit section. We bought apples and bananas.",
      },
      {
        content:
          "それから、パンとぎゅうにゅうもかいました。バスケットがいっぱいになりました。",
        romaji:
          "Sorekara, pan to gyuunyuu mo kaimashita. Basuketto ga ippai ni narimashita.",
        translation:
          "After that, we also bought bread and milk. The basket became full.",
      },
      {
        content:
          "おかあさんとたくさんかいものをしました。とてもたのしかったです。",
        romaji:
          "Okaasan to takusan kaimono wo shimashita. Totemo tanoshikatta desu.",
        translation: "I did a lot of shopping with my mother. It was very fun.",
      },
    ],
  },
  {
    id: "5",
    title: "Foods I Like",
    titleJapanese: "すきなたべもの",
    level: "intermediate",
    script: "mixed",
    illustration: "story-food",
    pages: [
      {
        content:
          "わたしは、たべることがだいすきです。とくに、にほんのたべものがすきです。",
        romaji:
          "Watashi wa, taberu koto ga daisuki desu. Tokuni, nihon no tabemono ga suki desu.",
        translation: "I love eating. Especially, I like Japanese food.",
      },
      {
        content:
          "いちばんすきなのは、すしです。サーモンとマグロがとてもおいしいです。",
        romaji:
          "Ichiban suki na no wa, sushi desu. Saamon to maguro ga totemo oishii desu.",
        translation:
          "My favorite is sushi. Salmon and tuna are very delicious.",
      },
      {
        content: "ラーメンもよくたべます。あついスープとめんがさいこうです。",
        romaji: "Raamen mo yoku tabemasu. Atsui suupu to men ga saikou desu.",
        translation:
          "I often eat ramen too. The hot soup and noodles are the best.",
      },
      {
        content:
          "スパゲッティやピザもおいしいです。ともだちといっしょにレストランでたべます。",
        romaji:
          "Supagetti ya piza mo oishii desu. Tomodachi to issho ni resutoran de tabemasu.",
        translation:
          "Spaghetti and pizza are also delicious. I eat them at restaurants with friends.",
      },
      {
        content:
          "デザートは、アイスクリームとケーキがすきです。あまくておいしいです。",
        romaji:
          "Dezaato wa, aisukuriimu to keeki ga suki desu. Amakute oishii desu.",
        translation:
          "For dessert, I like ice cream and cake. They are sweet and delicious.",
      },
      {
        content: "にほんのたべものは、せかいでいちばんおいしいとおもいます。",
        romaji: "Nihon no tabemono wa, sekai de ichiban oishii to omoimasu.",
        translation:
          "I think Japanese food is the most delicious in the world.",
      },
    ],
  },
  {
    id: "6",
    title: "My Weekend",
    titleJapanese: "しゅうまつ",
    level: "intermediate",
    script: "mixed",
    illustration: "story-weekend",
    pages: [
      {
        content:
          "しゅうまつは、いつもたのしみです。がっこうがやすみで、ゆっくりできます。",
        romaji:
          "Shuumatsu wa, itsumo tanoshimi desu. Gakkou ga yasumi de, yukkuri dekimasu.",
        translation:
          "I always look forward to weekends. School is closed and I can relax.",
      },
      {
        content:
          "どようびのあさは、おそくまでねます。そして、おいしいあさごはんをたべます。",
        romaji:
          "Doyoubi no asa wa, osoku made nemasu. Soshite, oishii asagohan wo tabemasu.",
        translation:
          "On Saturday morning, I sleep late. Then, I eat a delicious breakfast.",
      },
      {
        content:
          "ごごは、ともだちとカラオケにいきました。たくさんうたをうたいました。",
        romaji:
          "Gogo wa, tomodachi to karaoke ni ikimashita. Takusan uta wo utaimashita.",
        translation:
          "In the afternoon, I went to karaoke with friends. We sang many songs.",
      },
      {
        content:
          "よるは、レストランでばんごはんをたべました。ハンバーガーとポテトをたべました。",
        romaji:
          "Yoru wa, resutoran de bangohan wo tabemashita. Hanbaagaa to poteto wo tabemashita.",
        translation:
          "In the evening, we ate dinner at a restaurant. We ate hamburgers and potatoes.",
      },
      {
        content:
          "にちようびは、えいがかんにいきました。アクションえいががとてもおもしろかったです。",
        romaji:
          "Nichiyoubi wa, eigakan ni ikimashita. Akushon eiga ga totemo omoshirokatta desu.",
        translation:
          "On Sunday, I went to the cinema. The action movie was very interesting.",
      },
      {
        content:
          "しゅうまつは、あっというまにおわってしまいました。また、らいしゅうがたのしみです。",
        romaji:
          "Shuumatsu wa, attoiuma ni owatte shimaimashita. Mata, raishuu ga tanoshimi desu.",
        translation:
          "The weekend ended in the blink of an eye. I'm looking forward to next week again.",
      },
    ],
  },
];
