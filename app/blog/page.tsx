export const metadata = {
    title: 'Blog',
    description: 'Blog route for Portfolio',
};

export default function Home() {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-[#101218] text-white">
            <main className="flex-grow px-8">
                <section className="mx-auto max-w-screen-sm px-5 pt-10 pb-2">
                    <div className="space-y-6">
                        <h1 className="text-1xl font-bold">Blog / Yap</h1>
                        <p className="text-white leading-relaxed">
                            This will be a dedicated page for my background, interest, and other stuff I&apos;m interested in. 
                            My interest for tech started when I was a kid. I was always playing games on Roblox or Facebook during the 2010&apos;s and it got me into hacking.
                            I started watching tutorials on YouTube on how to get those hacks and it taught me how to use a tool called Cheat Engine. Looking back at it,
                            I realized how it was able to do all those things because during my first programming class, we were taught about data types such as integers, floats, etc. 
                            and Cheat Engine allowed you to change certain memory to whatever you want. I haven&apos;t learned Assembly but the GUI for Cheat Engine looked similar so I understand
                            now how it was able to do all hacks back then. Another thing that got me into tech was my friends and family. I come from a family of immigrants so my parents
                            didn&apos;t speak English very well. I was able to learn English through school and YouTube tutorials so they would come to me for tech related stuff. I hope to use my
                            knowledge to help others or just make whatever I want that comes to mind. 
                        </p>
                        <p className="text-white leading-relaxed">
                            In my spare time I like to listen to music, go to the gym, drive, read mangas and books, eat food, and try new things. I also like to volunteer from time to time.
                        </p>
                        <p className="text-white leading-relaxed">
                            It&apos;s currently summer right now so I&apos;m trying to find a job and build projects along the way. I&apos;m also trying to get an AWS certificate along the way.
                        </p>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

