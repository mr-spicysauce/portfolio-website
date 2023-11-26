import skillsStyles from './skills.module.css'

export const SkillsHero = () => {
    return (
        <div className={skillsStyles.heroContainer}>
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
                    Basic 3D modelling <br />
                    Basic Animating <br />
                    Cycles and Eevee rendering
                </SkillsItem>

                <SkillsItem
                    name="Unreal Engine"
                    imageSrc="/assets/UnrealEngineIcon.png"
                >
                    Learning basics of Unreal <br />
                    Learning basic C++
                </SkillsItem>

                <SkillsItem name="Figma" imageSrc="/assets/FigmaIcon.png">
                    UI/UX Design <br />
                    Games Design/Planning
                </SkillsItem>
            </div>
        </div>
    )
}

const SkillsItem = ({ imageSrc, skillName, children }) => {
    return (
        <div className="skillsItem">
            <img className="skillsImage" src={imageSrc}></img>
            <h2 className="skillsItemHeader">{skillName}</h2>
            <div>
                <p className="MainSubtext">{children}</p>
            </div>
        </div>
    )
}
