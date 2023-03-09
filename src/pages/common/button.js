import {Squares} from "react-activity";

export const LoadableButton = ({...props}) => {
  return <button
    className={'font-nulshock bg-indigo-600 py-2 px-6 rounded-md hover:bg-indigo-500 transition-all ease-in-out ' + props.className + (props.loading ? ' animate-pulse' : '')}
    disabled={props.loading}
    onClick={props.onClick}
  >
    {props.loading === true ?
      <Squares/>
      : (props.caption || "LOAD")}
  </button>
}