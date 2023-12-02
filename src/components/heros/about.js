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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>

                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
                        </span>
                    </div>
                    <div className="line">
                        <GodotIndent />
                        <GodotIndent />
                        <span className="AboutmeText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin vitae orci non neque fringilla
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
