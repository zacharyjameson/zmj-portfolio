import { Link } from "react-router-dom"

export interface IHomeBaseComponentProps {}

export const HomeBase: React.FunctionComponent<IHomeBaseComponentProps> = () => {
  return (
    <div>
      <h1>
        Hi, I'm Zack Jameson
        <br />
        I'm a Cloud Engineer
      </h1>
      <Link to="/portfolio">
        <button>View My Work</button>
      </Link>
    </div>
  )
}
