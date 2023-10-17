import './Input.css'

export default function Input(props) {
  return (
    <div className='Input'>
        <input type="text" key={props.key} name="" placeholder={props.letra} value={props.letra} id="" maxlength="1"/>
    </div>

  )
}
