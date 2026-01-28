import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TeachingSection {
  title: string;
  content: string;
}

const teachings: TeachingSection[] = [
  {
    title: "What is Sadhna or Spiritual Discipline?",
    content: `In order to understand it, first of all one should know how the individual self (soul) lands in the state of disturbance and sorrow and thereafter how it can be liberated. First we need to understand the "Evolution of Creation".`
  },
  {
    title: "Evolution of Creation",
    content: `Creation of the universe - At first there was Atma, the conscious self. A current emerged from it and formed a sphere around itself. This was called Anandmaya kosh. The Atma could now see itself in this sphere. As soon as this happened a feeling of "I am" arose and this created another sphere around the first one. There was the element of intellect in this sphere. This sphere was known as Vigyanmaya kosh. The essence in this sphere was called cosmic intellect.

With this emergence of knowledge, "it" started thinking. Thoughts of further expansion and shape of things started emerging in its mind. As soon as this happened another sphere was created around it and this was called Manomaya kosh. The essence in this sphere was called cosmic mind. The mind and the intellect are both inert. They have no power of their own. But the "conscious super" being enters them and starts using these as instruments, then they come into action and start working.

In the body the eyes see, the mind thinks etc. but these organs are not able to do anything when the Conscious power goes out of the body. In the same way the Cosmic mind and the Cosmic intellect function only with the help of the Supreme cosmic being. The holy scriptures have described the 'Pervading Conscious being' of these places as Causal and intellectual souls.

The cosmic mind resolved for the further creation of the gross universe. He drew the imaginary forms in his mind. When he had decided the pattern of all these forms a current emerged to form another sphere called the Pranmaya kosh. This sphere was formed to give life to those forms. Whatever images he had drawn in his mind in the Manomaya kosh and all the mental forms of human beings, animals, birds, gods, demons and others started floating with the life element in this sphere.

As the rays of the Sun illuminate the objects by entering into them, similarly particles of the rays of the Primordial Conscious soul entered into the bodies and lighted them. After receiving these tiny portions they manifested themselves in the form of living beings. Whatever powers were present in that ocean of Consciousness, small parts of those were provided to all the living beings.

The living being, having these less powers and feeling deprived of the special knowledge and special capacities became unhappy and proceeded further to get rid of the distress. It was supposed to move upward, i.e. backward to the source, but due to the thrust of delusion (Maya) it fell downward. The current of delusion or stream of Nature also descended pushing these beings, and instantaneously formed a coating of earth and encircled the Pranmaya kosh. This was called the Annamaya kosh. Thus, an universe consisting of these five spheres (strata) was created. This is the law of creation.`
  },
  {
    title: "How the Confusion Arose",
    content: `The individual soul always has one aim, to get peace and happiness. It searches for pleasure in every object, all its efforts are only towards this. It goes on collecting objects of happiness through its life. It accumulates wealth, gets married, produces children, builds houses, maintains vehicles etc. Life after life ends but its longing does not diminish.

As it goes on finding glimpses of pleasure in the unreal objects, his latent subtle desires for them goes on increasing. His intellect and eyes which are covered with dust cannot realize that the object he is searching for is not here. It is somewhere else. But it continues going on like a blind traveler who can neither see the path nor knows the direction. This is the state of living beings.

Under the state of ignorance they are searching for pleasure in objects where it does not exist at all. The flower after which he runs like a nightingale withers in no time. Like a bee which goes to collect nectar from a bud, the same bud imprisons it. In the hope of pleasure they go on searching and are put in troubles. They get glimpses of momentary pleasure at times but like a flash of lightning it is not permanent. Then they get plunged in the sea of sorrow.

The individual soul keeps on lying in such conditions, amidst clouds of restlessness and disturbance and goes on wandering stray. Sometimes they stumble, fall down and get entangled in thorns or drowned in water, but they never come to proper senses. They never turn to their goal. This is the confusion and the delusion of the individual soul.

The foolish individual embraces woman and searches for pleasure there, wants to be happy by caressing his son but where is that object present in the body of flesh and bones. Sometimes he searches for it in wealth and glory but it is not found even there. At last he is disappointed all around.

Only those can become spiritual seekers who have got such experiences of the world and have understood its unreality. Those who take to Sadhna (spiritual practice) for show or on hearsay from others are imperfect. It is very difficult for them to proceed in the right path. They sometimes move this way and sometimes that way. They sometimes ascend and sometimes descend. In this struggle their time is wasted without any result. Until the mind does not come to the conclusion that the real pleasure does not lie in the worldly objects rather the store of pleasure is somewhere else, there cannot be performed any spiritual practice nor should it be done.`
  },
  {
    title: "Dispassion (Vairagya)",
    content: `Out of thousands of aspirants only one or two are able to reach their goal, the rest go astray or end their lives in some whirlpool. The reason is nothing else but their wavering determination. They have not yet believed that their desired object is not to be found at this place but they have to move to some other place for the same. This is the weakness that does not enable aspirants to achieve success, otherwise who wants to be deprived of the benefits. To attain such intellect is called "dispassion". It means detachment from worldly objects and to lessen allurement for them. Unless it is attained spiritual practice does not proceed well.

One can go in one direction at a time. How can a man traveling east also travel towards west at the same time. We desire for attaining both, the pleasures of the world as well as the blissful God. Therefore we fail in both. Neither the Maya is gained nor the Lord and we get deprived of both.

It does not mean that we should relinquish everything. We have to live in this world and perform all the worldly duties but should not get attached to it. By applying your reasoning you think about its redundance. It will help in the progress of spiritual practice and you will be able to reach the goal quickly.

If you cannot do this even, at least devote one hour during morning and evening for the upliftment of self and the rest of the time for your body. Do one thing at a time. When you sit for self-upliftment do not allow your mind to have any relation with your body and the things connected with it and if it does so, bring it back forcibly to engage in the work that you have started. And when you work for your body, do not think of the other side.

If there is simply one work and one determination either of this side or that, it is achieved quickly. Cultivate this habit, dispassion will automatically evolve. Dispassion is not to give up matters related with the body, but only to keep the mind aloof. Spiritual practice cannot progress without detachment. To remain aloof from worldly desires at the time of prayers and by contemplating over it rest of the time, sense of dispassion becomes firm. This elevates man and he becomes spiritually great.`
  },
  {
    title: "Sadhna (Spiritual Practice)",
    content: `Whatever endeavors a person makes for realizing soul or God, all those efforts can be termed Sadhna. For the beginners, chanting of holy syllables, pilgrimage etc. are the external "Sadhna". It prepares the field and causes upliftment of the soul. Then comes the stage for internal "Sadhna". The practitioner now gets engaged in the attempt to clear the impurities of mind and intellect, purifies the inner self and removes its filth and coverings.

In this way, deriving pleasures from various Samadhis through concentration and meditation he reaches the state of Asampragyat Samadhi (state of super consciousness). In reality this is spiritual practice (Sadhna) and this word is used for it.

There is another arena of Maya beyond Asampragyat samadhi. Here also some efforts are needed. But the efforts needed here are beyond the capacity of the individual. As a lamp assimilates a moth by annihilating its very existence along with its name and form, in the same way some divine attraction pulls the practitioner upwards, who gets attracted unconsciously.

Since in this condition the lover himself becomes restless to see and embrace his beloved and draws himself near to embrace him, therefore this phenomenon does not come in the definition of spiritual practice (Sadhna). Many saints have called it the state of being Siddha (Stage of attainment). Lovers have called it "Prem (love) yoga" and the holy scriptures have termed it as "Samarpan (surrender) yoga".`
  },
  {
    title: "Transcendental Ascent",
    content: `It has been mentioned above that the store of bliss and joy was above and due to illusion we proceeded downward and started searching there and became restless when it was not found there. There is only one way to remove the restlessness, and that is to move upwards from the place where we are standing and go on proceeding with firm determination till we reach the source of nectar.

Difficulties and obstructions would come in the way, sometimes one has to face great difficulties, but with faith and courage one should always go on ascending. To rise upwards in this way with complete faith is called Sadhna and one who practices is called aspirant (Sadhak).

The path which leads to the source of Nectar, has been divided into five parts in the holy scriptures with separate names. These are called spiritual strata (kosh) which have been explained above. These are the five stages of spiritualism. They have to be reached and crossed. The Sadhna for each of them is separate. There are some spiritual rituals which enable us to cross the first destination while others to cross the second one, and similarly some third and some fourth.

Only one type of Sadhna (spiritual practice) does not work until the end. The Sadhna for the temporal strata (Annamaya kosh) does not work in the Pranmaya kosh; that of Pranmaya kosh cannot help in crossing the Manomaya kosh and that of Manomaya kosh is not helpful in the Vigyanmaya kosh (Ethereal strata) and the strata of bliss (Anandmaya kosh).

Therefore a Guide or a Guru is needed in spiritual practice. He determines and tells you that you have crossed till a particular strata in your previous life and you have to proceed further with the help of a particular Sadhna. It is a folly and a waste of time to start Sadhna by simply reading books or by listening to someone else.`
  },
  {
    title: "Example of the Journey",
    content: `For example try and understand it in this way. There was a man who lived in a desert. He started to travel to the mountains. As he stepped out of his house, there was only sandy desert and except camel there was no other conveyance. He crossed it on the back of a camel. Further ahead there was a big river so he left the camel there and boarded a boat and crossed the river. At the third stage he had to proceed by train. He purchased a ticket and entered into a compartment. The train also left him on the plains below a mountain and in the fourth stage he had to travel in a car which took him a few miles further, where it stopped.

Now the fifth stage came. A very big mountain was facing him and it was steep. Those who tried to climb used to slip down, but a few had climbed up somehow. He became nervous and cried for help from them. They threw a rope and instructed, "Catch it, we will pull you up. It will take no time, but catch the rope firmly. If it slips from your hand you will fall in the ditch and break your bones."

Just as these five stages have been crossed by five different means, the same applies to the journey of spiritual destination. Those who were at the summit are called "Gurus" who take disciple beyond the fifth strata.

Temporal strata (Annamaya kosh) is like the sandy desert. It is formed of the earth element. So it can be crossed by external endeavors like performing penance, pilgrimage to holy places etc. The spiritual practice of Hath-yoga (The yoga of spiritual perfection through physical practices), Mudras, breathing practices etc. are the practices of the second strata, Pranmaya kosh. Meditation is for Manomaya kosh. Buddhi (Intellect) yoga is for Vigyanmaya kosh (Causal Strata). Complete dedication is the spiritual practice for Anandmaya kosh. Those who go on doing the same type of spiritual practice for the whole life cannot make any progress.`
  },
  {
    title: "Different Spiritual Communities",
    content: `There are different divisions even in these five kind of Sadhnas. The number of spiritual practices or Sadhnas that are presently popular are countless. With these differences it has divided human beings into different spiritual communities or sects. A group formed by persons performing one kind of Sadhna is called a community. When we observe different natures, Sanskars and tastes in different persons then how can their thoughts and actions be the same? That is why different spiritual communities have come into existence.

They are all spiritual in nature and all of them uplift human beings to an extent. Therefore it is wrong to criticize other communities and to have malice against any one of them and to fight their followers.

Your duty is only to the extent to politely warn them that they should not simply stick to it but proceed further and attain spiritual progress. If you know then on their request explain to them the next stage of Sadhna or else send them to some Guru who knows it. If they are not prepared to proceed ahead, be indifferent, thinking that their Sanskar is limited to this stage therefore they are unable to understand the Sadhna of higher stage.`
  },
  {
    title: "Guru and Disciple",
    content: `In Sadhna both the Guru and the disciple should be perfect. If there is shortcoming in any one of them, it will not work well. The Guru should be fully experienced, who knows the path, its ups and downs and the disciple should be of strong will, courageous and fully dedicated. If the Guru does not know what will he direct and if the disciple is slack what will he learn.

That is why, as a rule, the disciple should take a test of the Guru and the Guru should test the disciple and only then a relation of Guru and disciple should be established. Nowadays there is abundance of professional Gurus. Such Gurus impress the innocent disciples by words, by showing miracles, and entrap them in their clutches, take various services from the disciples and waste their time. Therefore it is necessary for a disciple to test a person from all angles before accepting him as Guru as one may be deceived in haste.

It is difficult task. How can a disciple, who does not know even the elementary letters come forward to test his Guru, and even more so when the Guru is highly learned of spiritual science and a scholar of spiritual knowledge, whose personality, way of life and behavior are also unintelligible? Great spiritual men move in this world in many forms. It is impossible for a common man to conclude whether a particular person is a saint.

But it is not so, as there is a process for this also. If by sitting in the company of a person your worldly anxieties vanish, your disturbed and turbulent heart gets peace and tranquility, waves of thought of inner self (soul) emerge in you or you begin to think about God and your mind gets automatically attracted towards him, you start feeling light and if you do not like to leave the place then deduce that he is an exceptionally great spiritual person.

Shri Kabir Sahib has said - "Guru mila tab janie jab mite moha santap". Meaning that when restlessness and sorrow are removed from one's company you should conclude that you have found the real Guru.`
  },
  {
    title: "How to be a Disciple",
    content: `In this path of Sadhna, where Guru is found with difficulty, similarly it is also very difficult to become a spiritual disciple. Merely by declaring one does not become disciple. He has to stake his body, mind, wealth and life. Everything has to be sacrificed. Only he is a disciple who is ready to sacrifice everything, even the dearest one, and by completely surrendering himself is desirous of acquiring knowledge.

As good materials are spoilt when kept in a bad container, likewise an undeserving disciple cannot retain sublime Sadhna safely. He starts misusing it. Therefore, Guru subjects him to tests and then only discloses the secrets when he (disciple) succeeds.

For this the disciple should be very vigilant. In ancient time, very hard tests were conducted. But in the present age Gurus have discontinued taking difficult tests because people of this age have no patience, and want quick results. Everybody is so impatient that he wants to have the glimpse of the Lord at once without doing anything.

He does not know to have patience and to endeavor or to obey with devotion the directions of Guru. He wants that worldly work should not suffer neither he should have to spend money, there should not be slightest physical strain nor should he bow down before the Guru with politeness and humility; but he should acquire all the attainments of his Guru at once.

The Almighty should also not delay and should appear as soon as he starts Sadhna and if there is any delay, he boycotts both. He retains no concern with Guru or God and distrusts both. This is the condition of present day aspirants. How can one test them?

Therefore great spiritual personages have changed the rule. They do not disappoint anyone. They teach them spiritual practice and also uplift them and provide different types of experiences too, but do not initiate them as disciple. In this way after having years of spiritual practice, when they become eligible, they are initiated.`
  },
  {
    title: "Three Stages of Being a Disciple",
    content: `It is desirable for a practitioner to catch hold of a Guru from the moment he wants to proceed on the path of Spiritual practice. Spiritual practice does not come of itself, neither is it mentioned in any book. For this it is essential to take help of a Guru and is completed on the day when the trilogy between Guru, God and the aspirant is eliminated.

The ego of the practitioner gets submerged in Guru and one starts feeling that neither I am there nor God is there, only the Guru exists. The Guru is God and God is Guru. There is no scope for any reasoning or disbelief in mind or intellect. This is the time of complete dedication, but this has also got three stages.

In the first stage, the disciple sees his Guru in the form of a human being but also realizes at the same time, that he is not an ordinary person, and thinks that he possesses special powers, and is a great person with knowledge of spiritualism. It will be beneficial to follow the path as directed by him, and vision of God can be obtained. One starts feeling that on account of his mercy he will be benefited in this world and even beyond. This type of feeling is nourished in the heart of the practitioner for quite some time. This is the first stage of being a disciple.

In the second category there are those persons who consider the Guru like God, and not God himself. In this feeling there is some disrespect for his Guru, because in this stage the sense of trilogy is not fully eliminated from the heart of the disciple, and that is why this stage is considered as of medium degree in the discipline of Sadhna, and this stage also lasts for several years.

Lastly the turn of the third stage comes, in which during the continuous process of meditation the practitioner gets the vision of his object of worship. He clearly sees that his God is seated before him. During this condition sometimes, one gets the vision of his God in all his glories, while some see him in a gross form. All this may happen as per the wish of that Almighty, or due to ones own feelings, and nothing can be said about it.

When one experiences this, at that very moment the presence of the physical form of the Guru also comes before him. It is so realized that the very Divine element has acquired human form for the benefit of this world. He has come physically in the form of this great person, in order to uplift myself, and he is nothing but God personified. In some olden days, this very Divine element had resurrected religion by taking the forms of Ram and Krishna. Today he has come in the form of Guru to help in crossing the ocean of sorrows, and both are the same.

The moment one clearly observes this, at that very time, the belief becomes perfect that the Guru himself is God and the disciple gets prepared to dedicate his everything at the feet of his Guru. He submits completely under his care and this is known as being a true disciple. This is the proper time for parting Diksha (indoctrination).`
  },
  {
    title: "Diksha (Indoctrination)",
    content: `Diksha or indoctrination is that custom according to which, a devotee becomes a disciple. That is the time for offerings and acceptance. The disciple offers and the Guru accepts. The dedication of the disciple is acknowledged by his Guru. If any one of the two does not perform his duty, Diksha is not solemnized.

If the disciple does not devote by his inner will and the Guru accepts that, then also Diksha is not performed; similarly if the disciple is willing to donate his everything and the Guru is not willing to accept it then also the act of Diksha remains incomplete, because it is useless to perform the superficial custom of Diksha. Diksha is only perfected by submitting ones heart from ones inner will, and not by giving away wealth and properties.

If one devotes his heart, then his everything is donated, but this is extremely difficult. We can submit our everything which is material but it is not easily possible to give ones heart and only a few can do that. The custom of Diksha in Muslims is called 'Baiyat' which means selling oneself - an act of performing complete dedication.

At the time of Diksha the Guru introduces his disciple to the salvated souls of his spiritual heritage and recommends his devotee to them so that they may help him in reaching the difficult stages during his spiritual ascent and may be helpful in reaching his desired goal, because during further advancement there are some such places which are not possible to be crossed by the mere capabilities of the practitioner.

For this work only, every religion and spiritual community maintains the tradition of its heritage separately, but the ultimate goal of everyone is the same.`
  },
  {
    title: "Samarpan (Surrender) Yoga",
    content: `There is a general conviction that the Guru cannot do anything for his disciple and one has to attain everything by his own endeavors. But only those persons who have not seen or attended such holy company (Satsang) can imagine these things as impossible.

Personally, I have obtained everything from my Guru and he guides seekers on this very path. Those who do not believe can come and see it for themselves. Of course, in this practice the disciple has to surrender himself completely and it is imperative that he must submit himself whole heartedly in the care of his Guru, without which the vehicle cannot move, because this is not 'Kriya Yoga' or attainment by ones own practice, but on other hand it is 'Samarpan Yoga' or act of complete surrender.

In this the disciple after relinquishing his ego, gains according to his sense and degree of dedication. For those persons, who still believe that they are capable enough, and can attain by their own endeavors, for them there is 'Karma Yoga'. The 'Samarpan Yoga' is not meant for them. They are not authorized for it, who are proud of their own powers and intellect.`
  },
  {
    title: "The Behavior of a Disciple",
    content: `In the present times three things are given priorities. One should respect his Guru, try to obey his Guru as far as practicable and should not allow any other thoughts to enter his brain when coming in front of his Guru. So whatsoever one does, if one tries to follow these three disciplines, the Guru remains pleased with him and bestows his mercy on him.

The disciple who does not have regard or does not obey, and does not pay attention to his Guru and goes on thinking good or evil things in his presence, is not liked by his Guru. In all these three disciplines according to gradation, one is more difficult than the previous one, and it is very difficult that no other idea or thought enters the brain while sitting before his Guru.

The hearts of saints are pure, sacred and transparent like mirror. Whenever any person starts thinking of any good or evil subject while sitting before them, they (Guru) start getting reflection or focus of these within themselves and are greatly pained by it. They have cleaned their mirror to have a glimpse of their dearest one (The Omniscient) and when something else is reflected in it it becomes intolerable for them.

The pure and enlightened thoughts give them some solace, but the worldly thoughts of sex, anger, greed and pride make them restless. A disciple must save himself from such acts while sitting before his Guru, as this is a great disregard. But in the nature of saintly person, only love and affection are to be found, and they have immense capacity to control, so they suffer themselves but never give vent to their feelings and neither speak anything bitter from their mouth.`
  },
  {
    title: "Concentration and Transcendental Ascent",
    content: `The ultimate goal of the individual soul is to ascend through the five spiritual strata to reach its own abode. This is the ultimate aim of spiritual practice because without reaching there it is not possible to obtain perfect peace and real happiness.

Primarily, one has to struggle with his own mind, because it produces hindrances and tries to push it further downwards by creating innumerable hindrances and obstructions. Sometimes it bestows worldly laurels on the aspirants and on other occasions puts him in the whirlpool of respect and prestige, while on occasions it throws the net of wealth and sex or stimulates the ego and greed.

Often it tries to produce evil desires by suppressing sublime and sometimes causes disrespect for Guru and God; while at times creates doubts in the sayings of saints and spiritual scripts or tries to imprison him in the worldly lust and greed. These are the tricks of the mind and its power, which with the help of perceptible senses, tries to entangle the soul and push it downwards and whenever it succeeds in its effort, the soul is further pushed lower.

So, in order to ascend upwards one has to gain control over his mind and get free from its clutches. Hence, to struggle with mind and dispel the hindrances produced by it, with the help of Guru or with ones own efforts, is called spiritual practice or Sadhna.

In this conflict between individual soul and mind sometimes the mind becomes victorious while at others the individual soul and this cycle goes on revolving, which may involve hundreds of rebirth, and finally God is kind enough to recall the individual soul and shower his love. He himself enters the body of some enlightened person and helps the soul to liberate from the clutches of these evil powers and ultimately calls it to his abode. These great persons who guide and show the real path are spiritually attained Gurus and the process through which this goal is attained either by mere mercy of the Guru or through ones own endeavors is called Sadhna.`
  },
  {
    title: "The Path for Householders",
    content: `His methods are well suited for persons having lack of time and leading household life.

The Ramashram Satsang teaches that one need not renounce the world to find God. The householder can attain spiritual realization while fulfilling all worldly duties. The key lies in living as a "guest" in this world - enjoying its blessings while remaining anchored in the eternal truth.

By devoting even one hour each morning and evening to spiritual practice, while carrying out worldly responsibilities with detachment during the rest of the day, one can make steady progress on the path. The friction of family life itself becomes a tool for polishing the soul.

May Guruji grant us faith and fortitude to tread the path shown by him.`
  }
];

export default function Teachings() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            The Sacred Teachings
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            Understanding Sadhna - The Path of Spiritual Discipline
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <p className="text-amber-800 leading-relaxed text-lg">
            The following teachings explain the nature of spiritual practice (Sadhna),
            the relationship between Guru and disciple, and the path to liberation.
            These timeless principles guide seekers on their journey from the confusion
            of worldly existence to the peace of Self-realization.
          </p>
        </div>

        <div className="space-y-4">
          {teachings.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-50 transition-colors"
              >
                <h2 className="text-lg font-serif font-semibold text-amber-900 pr-4">
                  {section.title}
                </h2>
                {expandedSection === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                )}
              </button>

              {expandedSection === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-amber-100 pt-4">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-amber-800 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <p className="text-amber-800 text-center italic text-lg">
            "The more spiritual a person is, the more human they are."
          </p>
          <p className="text-amber-600 text-center text-sm mt-2">
            - Param Guru Shri Chaturbhuj Sahai Ji Maharaj
          </p>
        </div>
      </div>
    </div>
  );
}
