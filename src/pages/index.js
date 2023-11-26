import { Header } from '@/components/header'
import { MainHero } from '@/components/heros/main'

import DownArrow from '../assets/SVG/DownArrow'
import FuncDownArrow from '../assets/SVG/FuncDownArrow'
import GodotIndent from '../assets/SVG/GodotIndent'
import RoleIcon from '../assets/SVG/Roles'
import TimeIcon from '../assets/SVG/Time'
import ToolIcon from '../assets/SVG/Tool'

import { Suspense, useRef } from 'react'
import { SkillsHero } from '@/components/heros/skills'
import { PortfolioHero } from '@/components/heros/portfolio'

export default function Home() {
    const main1Ref = useRef()

    return (
        <>
            <Header heroRef={main1Ref} />
            <MainHero takeRef={main1Ref} />
            <SkillsHero />
            <PortfolioHero />

            <div id="Main4">
                <header id="Main4Header">
                    <h1 id="Main4HeaderText">About me</h1>
                </header>
                <div id="Main4Content">
                    <div id="AboutMeNumbersHolder">
                        {Array(28)
                            .fill()
                            .map((_, i) => (
                                <h4 className="AboutMeNumbers">{i + 1}</h4>
                            ))}
                    </div>
                    <div id="LineHolder">
                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">extends</text>
                            <text id="AboutmeExtends">&nbsp;JackG</text>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">var</text>
                            <text className="AboutmeVarName">
                                &nbsp;favouriteFood
                            </text>
                            <text className="AboutMeSymbols">
                                &nbsp;=&nbsp;
                            </text>
                            <text className="AboutmeText">"Pistachio"</text>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">var</text>
                            <text className="AboutmeVarName">
                                &nbsp;favouriteGames
                            </text>
                            <text className="AboutMeSymbols">&nbsp;= [</text>
                            <text className="AboutmeText">"Minecraft"</text>
                            <text className="AboutMeSymbols">,&nbsp;</text>
                            <text className="AboutmeText">"Valorant"</text>
                            <text className="AboutMeSymbols">,&nbsp;</text>
                            <text className="AboutmeText">"Garry's Mod"</text>
                            <text className="AboutMeSymbols">]</text>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">const</text>
                            <text className="AboutmeVarName">
                                &nbsp;favouriteSong
                            </text>
                            <text className="AboutMeSymbols">
                                &nbsp;=&nbsp;
                            </text>
                            <text className="AboutmeText">
                                "Out of my head -Fox Stevenson"
                            </text>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                        </div>

                        <div className="line">
                            <FuncDownArrow></FuncDownArrow>
                            <text className="AboutmeTextVar">func</text>
                            <text className="AboutMeFunctionName">
                                &nbsp;about_me
                            </text>
                            <text className="AboutMeSymbols">():</text>
                        </div>

                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <text id="GodotPrint">&nbsp;print</text>
                            <text className="AboutMeSymbols">(</text>
                            <text className="AboutmeText">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>

                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>

                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>
                        <div className="line">
                            <GodotIndent></GodotIndent>
                            <GodotIndent></GodotIndent>
                            <text className="AboutmeText">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vitae orci non neque
                                fringilla
                            </text>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                        </div>

                        <div className="line">
                            <FuncDownArrow></FuncDownArrow>
                            <text className="AboutmeTextVar">func</text>
                            <text className="AboutMeFunctionName">
                                &nbsp;get_song_playing_on_spotify
                            </text>
                            <text className="AboutMeSymbols">():</text>
                        </div>

                        <div className="line">
                            <GodotIndent></GodotIndent>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">var</text>
                            <text className="AboutmeVarName">&nbsp;song</text>
                            <text className="AboutMeSymbols">
                                &nbsp;=&nbsp;
                            </text>
                            <text className="AboutmeText">""</text>
                        </div>

                        <div className="line">
                            <GodotIndent></GodotIndent>
                        </div>

                        <div className="line">
                            <div className="funcColapse" />
                            <text className="AboutmeTextVar">return</text>
                            <text className="AboutmeVarName">&nbsp;song</text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
