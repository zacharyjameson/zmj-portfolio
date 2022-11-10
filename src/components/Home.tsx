import { Link } from "react-router-dom"

export interface IHomeBaseComponentProps {}

export const HomeBase: React.FunctionComponent<IHomeBaseComponentProps> = () => {
  return (
    <div className="wrapper">
      <h1 className="line__1">
        Hi, I'm Zack Jameson
      </h1>
      <h1 className="line__2">
        I'm a Cloud Engineer
      </h1>
      <Link to="/portfolio">
        <button>View My Work</button>
      </Link>
    </div>
  )
}
