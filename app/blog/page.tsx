import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'Blog route for Portfolio',
};

export default function Home() {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <main className="flex-grow px-8">
                <section className="mx-auto max-w-screen-sm px-5 pt-10 pb-2">
                    <div className="space-y-6">
                        <h1 className="text-1xl font-bold">Blog / Yap</h1>
                        <p className="text-foreground leading-relaxed">
                            This will be a dedicated page for my background, interest, and other stuff I&apos;m interested in. 
                            My interest for tech started when I was a kid. I was always playing games on Roblox or Facebook during the 2010&apos;s and it got me into hacking.
                            I started watching tutorials on YouTube on how to get those hacks and it taught me how to use a tool called Cheat Engine. Looking back at it,
                            I realized how it was able to do all those things because during my first programming class, we were taught about data types such as integers, floats, etc. 
                            and Cheat Engine allowed you to change certain memory to whatever you want. I haven&apos;t learned Assembly but the GUI for Cheat Engine looked similar so I understand
                            now how it was able to do all hacks back then. Another thing that got me into tech was my friends and family. I come from a family of immigrants so my parents
                            didn&apos;t speak English very well. I was able to learn English through school and YouTube tutorials so they would come to me for tech related stuff. I hope to use my
                            knowledge to help others or just make whatever I want that comes to mind. 
                        </p>
                        <p className="text-foreground leading-relaxed">
                            In my spare time I like to listen to music, go to the gym, drive, read mangas and books, eat food, and try new things. I also like to volunteer from time to time.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            It&apos;s currently summer right now so I&apos;m trying to find a job and build projects along the way. I&apos;m also trying to get an AWS certificate along the way.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            Summer has passed and unfortunately I wasn&apos;t able to get any AWS certifications but Oracle had an event called Race to Certifications and I was able to get 3 of them!!
                            I want to get more certifications but I feel like I need better projects ideas to land an internship. Anyways I&apos;ll be studying for AWS certifications from a website called 
                            learn.cantrill.io, which I got from my professor. I will also try to do projects.. Oh yea here are the certifications I earned over the summer!
                        </p>

                        <h1 className="text-1xl font-bold mt-8">Certifications</h1>
                        <div className="space-y-2">
                            <Link href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=CDB9DB7A5B906505FF25DC5D2012FEF1A1D76A560C223EDBCCE4A3C366276F63" className="block hover:text-primary transition-colors">
                                <p className="hover:underline">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</p>
                            </Link>
                            <Link href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E13AA640D56CDBC6012E3A3180474AE8DBAD2055565C4B23F9F017A19D4ECEE9" className="block hover:text-primary transition-colors">
                                <p className="hover:underline">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</p>
                            </Link>
                            <Link href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=FD33DBE6C6F4ED85564632FED1A85F95395E51169FA209499021A9B079254966" className="block hover:text-primary transition-colors">
                                <p className="hover:underline">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}