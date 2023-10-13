import Dimmed from "./Dimmed";

const Modal = ({ style, text, onClick }: any) => {
  return <div onClick={onClick} style={{
    ...style,
    zIndex: 101,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',

    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Dimmed />
    <div style={{
      zIndex: 101,
      backgroundColor: 'white',
      padding: '40px 60px',
      color: 'black',
      borderRadius: '20px',
    }}> {text} </div>
  </div>
}

export default Modal;

const modalWrapperStyle = {
  zIndex: 101,
}