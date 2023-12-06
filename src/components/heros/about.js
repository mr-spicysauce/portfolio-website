import { useEffect } from 'react'
import FuncDownArrow from '../../assets/SVG/FuncDownArrow'
import GodotIndent from '../../assets/SVG/GodotIndent'
import axios from 'axios'
import { useState } from 'react'

export const AboutHero = () => {
    const [currentSong, setCurrentSong] = useState(null)
    useEffect(() => {
        axios.get('/api/current-song').then((res) => {
            setCurrentSong(res.data)
        })
    }, [])

    //I did not write this I took it from stack overflow :)
    function getAge(dateString) {
        var today = new Date()
        var birthDate = new Date(dateString)
        var age = today.getFullYear() - birthDate.getFullYear()
        var m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return (
        <div id="about" className="about">
            <header id="Main4Header">
                <h1 id="Main4HeaderText">About me</h1>
            </header>
            <div id="Main4Content">
                <div id="AboutMeNumbersHolder">
                    {Array(29)
                        .fill()
                        .map((_, i) => (
                            <h4 className="AboutMeNumbers">{i + 1}</h4>
                        ))}
                </div>
                <div id="LineHolder">
                    <div className="line">
                        <div className="funcColapse" />
                        <span className="AboutmeTextVar">extends</span>
                        <span id="AboutmeExtends">
                            &nbsp;
                            {(
                                process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'
                            ).replace(/ /g, '')}
                        </span>
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                        <span className="AboutmeTextVar">var</span>
                        <span className="AboutmeVarName">
                            &nbsp;favouriteFood
                        </span>
                        <span className="AboutMeSymbols">&nbsp;=&nbsp;</span>
                        <span className="AboutmeText">"Pistachio"</span>
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                        <span className="AboutmeTextVar">var</span>
                        <span className="AboutmeVarName">
                            &nbsp;favouriteGames
                        </span>
                        <span className="AboutMeSymbols">&nbsp;= [</span>
                        <span className="AboutmeText">"Minecraft"</span>
                        <span className="AboutMeSymbols">,&nbsp;</span>
                        <span className="AboutmeText">"Valorant"</span>
                        <span className="AboutMeSymbols">,&nbsp;</span>
                        <span className="AboutmeText">"Garry's Mod"</span>
                        <span className="AboutMeSymbols">]</span>
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                        <span className="AboutmeTextVar">const</span>
                        <span className="AboutmeVarName">
                            &nbsp;favouriteSong
                        </span>
                        <span className="AboutMeSymbols">&nbsp;=&nbsp;</span>
                        <span className="AboutmeText">
                            "Out of my head -Fox Stevenson"
                        </span>
                    </div>

                    <div className="line">
                        <div className="funcColapse" />
                    </div>

                    <div className="line">
                        <FuncDownArrow></FuncDownArrow>
                        <span className="AboutmeTextVar">func</span>
                        <span className="AboutMeFunctionName">
                            &nbsp;about_me
                        </span>
                        <span className="AboutMeSymbols">():</span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <span id="GodotPrint">&nbsp;print</span>
                        <span className="AboutMeSymbols">(</span>
                        <span className="AboutmeText">
                            "Hello, I'm Jack, a passionate game developer and
                            programmer from the UK. At the age of
                        </span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            {getAge('2006-01-05')}, I immersed myself in the
                            world of game development and programming for the
                            past {getAge('2021-09-09')}
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            years, constantly improving my skills and pushing
                            boundaries.
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText"></span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            My journey began as a young kid crafting games in
                            Scratch and delving into the intricacies of
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            setting up servers and mini-games in Minecraft,
                            Garry’s Mod, and Fortnite. During my time in
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            college, I took the leap to create my own games,
                            laying the foundation for a promising future
                        </span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            in game development.
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText"></span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            While I'm not behind the code, I indulge in the
                            world of competitive tactical shooters like
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Valorant and Overwatch 2, fueling my competitive
                            drive. On the flip side, I have a deep
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            appreciation for narrative-driven games such as
                            Detroit Become Human, Uncharted and the
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Life is Strange series. And, when I'm in the mood
                            for a change of pace, you'll catch me
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            enjoying rhythm games like Beat Saber and Osu.
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <span className="AboutmeText">&nbsp;"</span>
                        <span className="AboutMeSymbols">)</span>
                    </div>
                    <div className="line">
                        <div className="funcColapse" />
                    </div>

                    <div className="line">
                        <FuncDownArrow></FuncDownArrow>
                        <span className="AboutmeTextVar">func</span>
                        <span className="AboutMeFunctionName">
                            &nbsp;get_song_playing_on_spotify
                        </span>
                        <span className="AboutMeSymbols">():</span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <span className="AboutmeTextVar">var</span>
                        <span className="AboutmeVarName">&nbsp;song</span>
                        <span className="AboutMeSymbols">&nbsp;=&nbsp;</span>
                        <span className="AboutmeText">
                            "
                            {currentSong && currentSong.songTitle
                                ? `${currentSong.songTitle} by ${currentSong.songArtist}`
                                : ''}
                            "
                        </span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <span className="AboutmeTextVar">return</span>
                        <span className="AboutmeVarName">&nbsp;song</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
