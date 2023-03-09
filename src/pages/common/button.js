import {Squares} from "react-activity";

export const LoadableButton = ({...props}) => {
  return <button
    {...props}
    className={'font-nulshock bg-blue-600 py-2 w-24 rounded-md hover:bg-blue-500 transition-all ease-in-out ' + props.className}
    disabled={props.loading}
  >
    {props.loading ?
      <Squares/>
      : (props.caption || "LOAD")}
  </button>
}