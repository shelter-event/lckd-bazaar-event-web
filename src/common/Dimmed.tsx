const Dimmed = ({ backgroundColor = 'rgba(0, 0, 0, 0.70)' }: any) => {
  const style = {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '0',
    backgroundColor,
  }

  return <div style={style}>
  </div>
}

export default Dimmed


