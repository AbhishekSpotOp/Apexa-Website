
export default function Developers() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Developers
                </h1>
            </div>

             <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://dsc.gg/apexa-support">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1171829500154216509/1399277662228451411/IMG_20250415_002710_189.webp?ex=68886a5f&is=688718df&hm=b1816e0f9026d100a67ad6e4ddbd930ab5158d0a04f0673074b052be3c88651c&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm Abhishek,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                       I'm the developer and founder of Apexa. I know javascript, html, css. Click here to know about me
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://dsc.gg/apexa-support">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/avatars/1389067789100388407/c9c59802615fa8c65f0807d774a27892.png?size=4096" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm<br />Prem,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Hi, I'm the Co Developer of Apexa . With 3 years of experience developing with discord.js and HTML CSS.
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
