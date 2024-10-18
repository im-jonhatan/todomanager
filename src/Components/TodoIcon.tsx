import { TodoIconProps } from "../interfaces/TodoIcon"
import CompletedSVG from "../assets/check-square-completed.svg?react";
import SquaredSVG from "../assets/check-square.svg?react";
import CloseSVG from "../assets/x.svg?react";

const iconType:{ [key: string]: JSX.Element } = {
  "checked": <CompletedSVG />,
  "square": <SquaredSVG />,
  "close": <CloseSVG />,
}


function TodoIcon({type, onClick}: TodoIconProps): JSX.Element {
  return (
    <span
      className={`todo-item__${type === "close" ? "close" : "icon"}`}
      onClick={onClick}
    >
      {iconType[type]}
    </span>
  )
}

export { TodoIcon }
