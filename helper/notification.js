import notification from 'antd/lib/notification'

notification.config({
  duration: 1,
})

export const openSuccessNotification = () => {
  notification.success({
    message: 'Correct Answer',
  })
}

export const openFailNotification = () => {
  notification.warning({
    message: 'Wrong Answer',
  })
}
