import { TodoIconProps } from "../interfaces/TodoIcon"
import { ReactComponent as CompletedSVG } from "../assets/check-square-completed.svg";
import { ReactComponent as SquaredSVG } from "../assets/check-square.svg";
import { ReactComponent as CloseSVG } from "../assets/x.svg";

const iconType:{ [key: string]: JSX.Element } = {
  "checked": <CompletedSVG fill={"none"} stroke={"var(--main-tea)"} />,
  "square": <SquaredSVG fill={"none"} stroke={"var(--main-blue)"} />,
  "close": <CloseSVG />,
}
function TodoIcon({type, onClick}: TodoIconProps): JSX.Element {
  return (
    <span
      className={`todo-item__${type == "close" ? "close" : "icon"}`}
      onClick={onClick}
    >
      {iconType[type]}
    </span>
  )
}

export { TodoIcon }
