export default function MainHeader({ headerFilled }) {
    return (
        <header className={headerFilled ? 'header filled' : 'header'}>
            <div className="headerContainer">
                <a id="HeaderTitle">Jack G</a>
                <div id="headerCenter">
                    <a id="HeaderButtons">Skills</a>
                    <a id="HeaderButtons">Portfolio</a>
                    <a id="HeaderButtons">About</a>
                    <a id="HeaderButtons">Contact</a>
                </div>
                <a id="HeaderSpacer"></a>
            </div>
        </header>
    )
}
