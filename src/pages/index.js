import MainHeader from '../../componets/MainHeader'

import DownArrow from '../../public/assets/SVG/DownArrow'
import FuncDownArrow from '../../public/assets/SVG/FuncDownArrow'
import GodotIndent from '../../public/assets/SVG/GodotIndent'
import RoleIcon from '../../public/assets/SVG/Roles'
import TimeIcon from '../../public/assets/SVG/Time'
import ToolIcon from '../../public/assets/SVG/Tool'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
    const [headerFilled, setHeaderFilled] = useState(false)

    const main1Ref = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY, main1Ref?.current?.offsetHeight)
            if (window.scrollY >= main1Ref?.current?.offsetHeight - 45) {
                setHeaderFilled(true)
            } else {
                setHeaderFilled(false)
            }
        })
    }, [])

    return (
        <>
            <MainHeader headerFilled={headerFilled}></MainHeader>
            <div id="Main1Holder">
                <div id="Main1" ref={main1Ref}>
                    <header id="HeaderBottom"></header>
                    <div id="Main1Content">
                        <h1 id="NameHeader">Jack G</h1>
                        <h3 className="MainSubtext">
                            Game developer & Programmer
                        </h3>
                        <div id="IconButtonHolder">
                            <a
                                className="IconButtons"
                                href="https://github.com/mr-spicysauce"
                            >
                                <img src="/assets/github.png"></img>
                            </a>
                            <a
                                className="IconButtons"
                                href="https://www.linkedin.com/"
                            >
                                <img src="/assets/itch-io.png"></img>
                            </a>
                            <a className="IconButtons" href="https://itch.io/">
                                <img src="/assets/linkedin.png"></img>
                            </a>
                            <a
                                className="IconButtons"
                                href="https://www.youtube.com/"
                            >
                                <img src="/assets/youtube.png"></img>
                            </a>
                        </div>
                    </div>
                    <header id="HeaderBottom"></header>
                </div>
            </div>

            <div id="Main2">
                <header>
                    <h1 className="MainHeading">Skills & Tools</h1>
                    <h3 className="MainSubtext">
                        Over the course of a year developing games, I’ve
                        acquired <br />
                        an extensive skill set and explored various tools.
                    </h3>
                </header>

                <div id="Main2Content">
                    <div className="skillsItem">
                        <img
                            className="skillsImage"
                            src="/assets/GodotIcon.png"
                        ></img>
                        <h2 className="skillsItemHeader">Godot Engine</h2>
                        <div>
                            <h3 className="MainSubtext">
                                Full game development <br />
                                Use of GDScript <br />
                                Environment building <br />
                                Leading a Godot club at College
                            </h3>
                        </div>
                    </div>

                    <div className="skillsItem">
                        <img
                            className="skillsImage"
                            src="/assets/BlenderIcon.png"
                        ></img>
                        <h2 className="skillsItemHeader">Blender</h2>
                        <div>
                            <h3 className="MainSubtext">
                                Basic 3D modelling <br />
                                Basic Animating <br />
                                Cycles and Eevee rendering
                            </h3>
                        </div>
                    </div>

                    <div className="skillsItem">
                        <img
                            className="skillsImage"
                            src="/assets/UnrealEngineIcon.png"
                        ></img>
                        <h2 className="skillsItemHeader">Unreal Engine</h2>
                        <div>
                            <h3 className="MainSubtext">
                                Learning basics of Unreal <br />
                                Learning basic C++
                            </h3>
                        </div>
                    </div>

                    <div className="skillsItem">
                        <img
                            className="skillsImage"
                            src="/assets/FigmaIcon.png"
                        ></img>
                        <h2 className="skillsItemHeader">Figma</h2>
                        <div>
                            <h3 className="MainSubtext">
                                UI/UX Design <br />
                                Games Design/Planning
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div id="Main3">
                <header id="portfolioHeader">
                    <div id="portfolioHeaderText">
                        <h1 className="MainHeading">Portfolio</h1>
                        <h3 className="MainSubtext">
                            A showcase of both current and previous projects{' '}
                            <br />
                            that highlights my experience developing games
                        </h3>
                    </div>

                    <div className="VideoEmbed">
                        <iframe
                            src="https://www.youtube.com/embed/xj3SZv5lle4?si=5ipg063tolte4QAH"
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </header>
                <div className="PortfolioContainer">
                    <div className="PortfolioItem">
                        <h1 className="PortfolioItemHeader">
                            The Walking Stead
                        </h1>
                        <div className="PortfolioItemImageHolder">
                            <img
                                src="/assets/WalkingsteadImg.png"
                                className="PortfolioItemImage"
                            ></img>
                            <div className="PortfolioItemImageSelector">
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                            </div>
                        </div>

                        <div className="PortfolioItemContent">
                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <ToolIcon></ToolIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Tools:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">
                                    Godot,Blender
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <TimeIcon></TimeIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Time Spent:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">2 months</h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <RoleIcon></RoleIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Roles:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemRoleText">
                                    Project Lead, Solo Programmer, <br />{' '}
                                    Environment Builder
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <div className="PortfolioItemDescriptionHolder">
                                    <text className="PortfolioItemDescriptionText">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut scelerisque dui id
                                        tellus luctus porta et a metus. Duis
                                        porttitor lectus ex, eu laoreet justo
                                        euismod viverra. Aliquam eu erat
                                        ultrices, venenatis dolor sed, auctor
                                        purus. Sed eget felis metus. Aenean
                                        mattis.
                                    </text>
                                </div>
                            </div>

                            <a className="PortfolioReadMoreButton">
                                <h3 className="PortfolioItemContentSectionHeadertext">
                                    Read more
                                </h3>
                                <DownArrow></DownArrow>
                            </a>
                        </div>
                    </div>

                    <div className="PortfolioItem">
                        <h1 className="PortfolioItemHeader">VR Aim Trainer</h1>
                        <div className="PortfolioItemImageHolder">
                            <img
                                src="/assets/VRaim.png"
                                className="PortfolioItemImage"
                            ></img>
                            <div className="PortfolioItemImageSelector">
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                            </div>
                        </div>

                        <div className="PortfolioItemContent">
                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <ToolIcon></ToolIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Tools:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">
                                    Godot,Blender,Figma
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <TimeIcon></TimeIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Time Spent:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">1 months</h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <RoleIcon></RoleIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Roles:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemRoleText">
                                    Solo Developer
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <div className="PortfolioItemDescriptionHolder">
                                    <text className="PortfolioItemDescriptionText">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut scelerisque dui id
                                        tellus luctus porta et a metus. Duis
                                        porttitor lectus ex, eu laoreet justo
                                        euismod viverra. Aliquam eu erat
                                        ultrices, venenatis dolor sed, auctor
                                        purus. Sed eget felis metus. Aenean
                                        mattis.
                                    </text>
                                </div>
                            </div>

                            <a className="PortfolioReadMoreButton">
                                <h3 className="PortfolioItemContentSectionHeadertext">
                                    Read more
                                </h3>
                                <DownArrow></DownArrow>
                            </a>
                        </div>
                    </div>

                    <div className="PortfolioItem">
                        <h1 className="PortfolioItemHeader">
                            Dungeon Resurgence
                        </h1>
                        <div className="PortfolioItemImageHolder">
                            <img
                                src="/assets/DungeonImg.png"
                                className="PortfolioItemImage"
                            ></img>
                            <div className="PortfolioItemImageSelector">
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                                <ellipse className="ellipse"></ellipse>
                            </div>
                        </div>

                        <div className="PortfolioItemContent">
                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <ToolIcon></ToolIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Tools:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">
                                    Godot,Blender
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <TimeIcon></TimeIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Time Spent:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemText">3 weeks</h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <header className="PortfolioItemContentSectionHeaderHolder">
                                    <RoleIcon></RoleIcon>
                                    <h3 className="PortfolioItemContentSectionHeadertext">
                                        Roles:
                                    </h3>
                                </header>
                                <h3 className="PortfolioItemRoleText">
                                    Solo Developer
                                </h3>
                            </div>

                            <div className="PortfolioItemContentSection">
                                <div className="PortfolioItemDescriptionHolder">
                                    <text className="PortfolioItemDescriptionText">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut scelerisque dui id
                                        tellus luctus porta et a metus. Duis
                                        porttitor lectus ex, eu laoreet justo
                                        euismod viverra. Aliquam eu erat
                                        ultrices, venenatis dolor sed, auctor
                                        purus. Sed eget felis metus. Aenean
                                        mattis.
                                    </text>
                                </div>
                            </div>

                            <a className="PortfolioReadMoreButton">
                                <h3 className="PortfolioItemContentSectionHeadertext">
                                    Read more
                                </h3>
                                <DownArrow></DownArrow>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

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
