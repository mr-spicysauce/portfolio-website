import skillsStyles from './skills.module.css'

export const SkillsHero = ({ takeRef }) => {
    return (
        <div ref={takeRef} id="skills" className={skillsStyles.heroContainer}>
            <div className={skillsStyles.heroOverview}>
                <h1>Skills & Tools</h1>
                <p>
                    Over the course of a year developing games, I've acquired{' '}
                    <br />
                    an extensive skill set and explored various tools.
                </p>
            </div>

            <div className={skillsStyles.heroContent}>
                <SkillsItem
                    name="Godot Engine"
                    imageSrc="/assets/GodotIcon.png"
                >
                    Full game development <br />
                    Use of GDScript <br />
                    Environment building <br />
                    Leading a Godot club at College
                </SkillsItem>

                <SkillsItem name="Blender" imageSrc="/assets/BlenderIcon.png">
                    Simple 3D modelling <br />
                    Simple Animating <br />
                    Cycles and Eevee rendering
                </SkillsItem>

                <SkillsItem
                    name="Unreal Engine"
                    imageSrc="/assets/UnrealEngineIcon.png"
                >
                    Learning Unreal Engine
                    <br />
                    Learning C++
                </SkillsItem>

                <SkillsItem name="Figma" imageSrc="/assets/FigmaIcon.png">
                    UI/UX Design <br />
                    Games Design/Planning
                </SkillsItem>
            </div>
        </div>
    )
}

const SkillsItem = ({ imageSrc, name, children }) => {
    return (
        <div className="skillsItem">
            <img className="skillsImage" src={imageSrc}></img>
            <h2 className="skillsItemHeader">{name}</h2>
            <div>
                <p className="MainSubtext">{children}</p>
            </div>
        </div>
    )
}
