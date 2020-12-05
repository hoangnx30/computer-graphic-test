const fs = require('fs')
const data = [
  {
    question: 'Thiết bị đầu vào thường dùng nhất là?',
    choice: ['Chuột (Mouse)', 'Máy quét (Scanner)', 'Máy in (Printer)', 'Bàn phím (Keyboard)'],
    answer: 3,
  },
  {
    question: `Những phím nào cho phép người dùng nhập các hoạt động thường xuyên sử dụng trong một lần ấn phím (key stroke)?`,
    choice: [
      'Phím chức năng (Function keys)',
      'Phím điều khiển con trỏ (Cursor control keys)',
      'Thiết bị chỉ “Trackball” (Trackball)',
      'Phím điều khiển (Control keys)',
    ],
    answer: 0,
  },
  {
    question: `Điền vào phần bỏ trống ________ được dùng để đo độ xoay vòng quay?`,
    choice: [
      'Chiết áp (Potentiometers).',
      'Chỉ đáp án thứ nhất.',
      'Máy đo điện thế (Volta meter).',
      'Tham số (Parameter).',
    ],
    answer: 1,
  },
  {
    question: 'Thiết bị dùng để chỉ vị trí con trỏ trên màn hình là',
    choice: [
      'Chuột (Mouse).',
      'Phím điều khiển trò chơi (Joystick).',
      'Cả đáp án thứ nhất và thứ 2.',
      'Găng tay cảm nhận (Data glove).',
    ],
    answer: 0,
  },
  {
    question: `Điền vào phần bỏ trống _________ được dùng để phát hiển chuyển động của chuột?`,
    choice: [
      'Cảm biến quang học (Optical sensor)',
      'Bi cuộn dưới đáy chuột (Rollers on the bottom of mouse)',
      'Cả đáp án thứ nhất và thứ 2',
      'Cảm biến (Sensor)',
    ],
    answer: 2,
  },
  {
    question: 'Trackball là?',
    choice: [
      'Thiết bị trỏ vị trí 3 chiều (Three- dimensional positioning device).',
      'Không lựa chọn nào ở trên.',
      'Thiết bị trỏ vị trí 2 chiều (Two- dimensional positioning device).',
      'Thiết bị trỏ (Pointing device).',
    ],
    answer: 2,
  },
  {
    question: 'Loại thiết bị nào có thể xoay bằng cách xoay với ngón tay hoặc long bàn tay?',
    choice: ['Space ball', 'Trackball', 'Không phải Trackball', 'Space ball'],
    answer: 1,
  },
  {
    question: `Điền vào phần bỏ trống
    Space ball cung cấp ________ bậc tự do?`,
    choice: ['10 bậc', '8 bậc', '12 bậc', '6 bậc'],
    answer: 3,
  },
  {
    question: `Điền vào phần bỏ trống
    ________ được sử dụng cho trỏ 3 chiều, mô hình hóa, hoạt cảnh và các ứng dụng
    khác?`,
    choice: ['Spac ball', 'Space ball', 'Trackball', 'Sai hết.'],
    answer: 1,
  },
  {
    question: 'Chiết áp được gắn vào phần đế của phím điều khiển trò chơi đề đo?',
    choice: [
      'Hướng chuyển động (The direction)',
      'Vị trí (Position)',
      'Lượng chuyển động (The amount of movement) ',
      'Độ phân giải (Resolution)',
    ],
    answer: 2,
  },
]

// let newChoices

for (let i = 0; i < data.length; i++) {
  const choices = data[i].choice
  const newChoices = choices.map((choice, index) => {
    return {
      id: index,
      choice,
    }
  })
  data[i].choice = [...newChoices]
}

fs.writeFileSync('data.txt', JSON.stringify(data), { encoding: 'utf-8' })

console.log(JSON.stringify(data))
