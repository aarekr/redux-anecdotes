import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state)
  console.log('Notfication notification:', notification.ilmoitus)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }
  if (notification.ilmoitus === null) {
    return (
      <div></div>
    )
  }
  else if (notification.ilmoitus !== null) {
    return (
      <div style={style}>
        {notification.ilmoitus}
      </div>
    )
  }
}

export default Notification