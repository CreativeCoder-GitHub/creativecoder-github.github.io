import { BsFillGearFill, BsController } from "react-icons/bs";

function RawHtmlViewer({ htmlContent }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
}

function Card({ 
  title, 
  body, 
  imageURL, 
  btnLabel, 
  btnURL, 
  categoryIcon: CategoryIcon, 
  categoryLabel 
}) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div 
            className="border-l border-b border-t border-gray-400 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={{ backgroundImage: `url('cards/${imageURL}')` }}
            title={title}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r rounded-r-lg p-4 flex flex-col justify-between leading-normal" style={{borderBottomRightRadius: "var(--radius-sm)"}}>
            <div className="mb-8">
            <div className="text-sm text-gray-600 flex items-center">
                <CategoryIcon />
                <RawHtmlViewer htmlContent={"&ThickSpace;"} />
                {categoryLabel}
            </div>
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <div className="text-gray-700 text-base"><RawHtmlViewer htmlContent={body} /></div>
            <br />
            <a href={btnURL}>
                <button className="bg-orange-500 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    {btnLabel}
                </button>
            </a>
            </div>
        </div>
    </div>
  )
}

function Projects() {
  return (
    <>
        <h1 className="text-4xl font-bold mb-4" id="projects">Projects</h1>
        <Card
            title="pygame-topdownengine"
            body="A 2.5D engine for top-down games. It is designed to be highly modular, with most core systems being located in the easily extendible GameObject class. It is built on top of the pygame-ce package, which you can find <a href='https://github.com/pygame-community/pygame-ce/tree/main' class='text-blue-500'>here</a>."
            imageURL="pygame-topdownengine.png"
            btnLabel="View the Repository Now!"
            btnURL="https://github.com/shaurya-sharma-dev/pygame-topdownengine" 
            categoryIcon={BsFillGearFill}
            categoryLabel="Game Engine"
        />
        <br/>
        <Card
            title="Scout of Liberty"
            body="A platformer game made in pygame-ce inspired by the American Revolution. The game makes use of Tiled and the PyTMX Python package in order to dynamically load levels from an editor. The game features engaging levels that task players to problem-solve and fight enemies and a challenging final boss. The game's web version also has integrated mobile support!"
            imageURL="scout-of-liberty.png"
            btnLabel="Play Now!"
            btnURL="scout-of-liberty" 
            categoryIcon={BsController}
            categoryLabel="Video Game"
        />
        <br/>
        <Card
            title="Pixel Patcher"
            body="Race against the clock to patch bugs in your upcoming game in this action-packed platformer! The catch? The game's so broken you have to exploit those bugs to navigate through levels."
            imageURL="pixel-patcher.png"
            btnLabel="Play Now!"
            btnURL="pixel-patcher" 
            categoryIcon={BsController}
            categoryLabel="Video Game"
        />
        <br/>
        <Card
            title="Driver Dilemma"
            body="A driving game made in Ursina that challenges the player to navigate through a series of challenging levels. The game features obstacles, custom camera movement, a pause menu, etc. It relies heavily on custom-textured Blockbench models for the player, the levels, and even some of the obstacles!"
            imageURL="driver-dilemma.png"
            btnLabel="View the Repository Now!"
            btnURL="https://github.com/shaurya-sharma-dev/driver-dilemma" 
            categoryIcon={BsController}
            categoryLabel="Video Game"
        />
    </>
  )
}

export default Projects;