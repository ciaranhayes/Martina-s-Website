import Image from "next/image"

export default function PhotoOnRight({
    url,
    alt,
    title,
    body,
}: {
    url: string
    alt: string
    title: string
    body: string
}) {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-50">
            <div className="mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="p-10 border-l">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                                    Education
                                </h1>
                                <p className="mt-6 text-xl/8">
                                    Martina Rosaria O’Connell is an experienced music educator in flute and music theory, dedicated to making music accessible and enjoyable for learners of all ages.
                                    She holds a First Class Honours Bachelor of Music Education from Trinity College Dublin and the Royal Irish Academy of Music (RIAM), which included a six-month Erasmus placement at the Royal Conservatoire of Scotland. She also earned a Master’s in Flute Performance from RIAM and Trinity College Dublin, graduating with distinction and achieving the highest result in her year.
                                    Martina was a music scholarship student at Wesley College Dublin for the duration of her post-primary education. She began studying at Technological University Dublin (formerly DIT) at the age of 16 with Ciaran O’Connell and has since learned from many of the world’s top flautists, including nationally William Dowdall, Vourneen Ryan, Sinéad Farrell, and Susan Doyle, and internationally Sir James Galway, Lady Jeanne Galway, Ruth Morley, Wissam Boustany, and Ian Clarke. Her participation in international courses—such as the Camerata Ireland Academy, Saline Royale Academy in France, the Scottish International Flute Summer School, and the Groolo Flute Sessions in the Netherlands—has given her a broad perspective on global standards, repertoire, and teaching approaches.
                                    A qualified post-primary music teacher, Martina has extensive experience in both classroom and community settings. She has taught Junior Musicianship at RIAM since her time as an 1848 Scholar during her master’s studies and is now in her second year teaching in both the RIAM Junior and Adult Divisions. She curated the Adult Introduction to Music Theory course at RIAM, which sold out in two consecutive runs and led to the creation of a continuation course with an exam focus.
                                    She served as Head of Education for the West Wicklow Chamber Music Festival, developing accessible and engaging Music Appreciation classes for adults. She has also coordinated and led music camps and outreach projects both nationally and internationally, including the It’s Time Music Education Outreach Project, which was featured on RTÉ News2Day.
                                    Martina also runs a private flute studio, offering biweekly lessons that focus on developing strong technical skills, musicianship, and a rich, personal sound.
                                    Her teaching blends formal training with a commitment to inclusive, creative, and inspiring learning experiences, ensuring that music can be enjoyed by all—regardless of age, ability, or background.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-auto -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Image
                            src="/photo9.jpg"
                            width={1080}
                            height={720}
                            alt="photo of Martina"
                            className="w-full max-w-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
