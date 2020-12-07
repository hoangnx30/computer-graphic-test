const data = {
  ThietBi: [
    {
      question: 'Thiết bị đầu vào thường dùng nhất là?',
      choice: [
        { id: 0, choice: 'Chuột (Mouse)' },
        { id: 1, choice: 'Máy quét (Scanner)' },
        { id: 2, choice: 'Máy in (Printer)' },
        { id: 3, choice: 'Bàn phím (Keyboard)' },
      ],
      answer: 3,
    },
    {
      question:
        'Những phím nào cho phép người dùng nhập các hoạt động thường xuyên sử dụng trong một lần ấn phím (key stroke)?',
      choice: [
        { id: 0, choice: 'Phím chức năng (Function keys)' },
        { id: 1, choice: 'Phím điều khiển con trỏ (Cursor control keys)' },
        { id: 2, choice: 'Thiết bị chỉ “Trackball” (Trackball)' },
        { id: 3, choice: 'Phím điều khiển (Control keys)' },
      ],
      answer: 0,
    },
    {
      question: 'Điền vào phần bỏ trống ________ được dùng để đo độ xoay vòng quay?',
      choice: [
        { id: 0, choice: 'Chiết áp (Potentiometers).' },
        { id: 1, choice: 'Chỉ đáp án Parameter.' },
        { id: 2, choice: 'Máy đo điện thế (Volta meter).' },
        { id: 3, choice: 'Tham số (Parameter).' },
      ],
      answer: 1,
    },
    {
      question: 'Thiết bị dùng để chỉ vị trí con trỏ trên màn hình là',
      choice: [
        { id: 0, choice: 'Chuột (Mouse).' },
        { id: 1, choice: 'Phím điều khiển trò chơi (Joystick).' },
        { id: 2, choice: 'Cả đáp án thứ nhất và thứ 2.' },
        { id: 3, choice: 'Găng tay cảm nhận (Data glove).' },
      ],
      answer: 0,
    },
    {
      question: 'Điền vào phần bỏ trống _________ được dùng để phát hiển chuyển động của chuột?',
      choice: [
        { id: 0, choice: 'Cảm biến quang học (Optical sensor)' },
        { id: 1, choice: 'Bi cuộn dưới đáy chuột (Rollers on the bottom of mouse)' },
        { id: 2, choice: 'Cả đáp án thứ nhất và thứ 2' },
        { id: 3, choice: 'Cảm biến (Sensor)' },
      ],
      answer: 2,
    },
    {
      question: 'Trackball là?',
      choice: [
        { id: 0, choice: 'Thiết bị trỏ vị trí 3 chiều (Three- dimensional positioning device).' },
        { id: 1, choice: 'Không lựa chọn nào ở trên.' },
        { id: 2, choice: 'Thiết bị trỏ vị trí 2 chiều (Two- dimensional positioning device).' },
        { id: 3, choice: 'Thiết bị trỏ (Pointing device).' },
      ],
      answer: 2,
    },
    {
      question: 'Loại thiết bị nào có thể xoay bằng cách xoay với ngón tay hoặc long bàn tay?',
      choice: [
        { id: 0, choice: 'Space ball' },
        { id: 1, choice: 'Trackball' },
        { id: 2, choice: 'Không phải Trackball' },
        { id: 3, choice: 'Chỉ có Space ball' },
      ],
      answer: 1,
    },
    {
      question: 'Điền vào phần bỏ trống\n    Space ball cung cấp ________ bậc tự do?',
      choice: [
        { id: 0, choice: '10 bậc' },
        { id: 1, choice: '8 bậc' },
        { id: 2, choice: '12 bậc' },
        { id: 3, choice: '6 bậc' },
      ],
      answer: 3,
    },
    {
      question:
        'Điền vào phần bỏ trống\n    ________ được sử dụng cho trỏ 3 chiều, mô hình hóa, hoạt cảnh và các ứng dụng\n    khác?',
      choice: [
        { id: 0, choice: 'Spac ball' },
        { id: 1, choice: 'Space ball' },
        { id: 2, choice: 'Trackball' },
        { id: 3, choice: 'Sai hết.' },
      ],
      answer: 1,
    },
    {
      question: 'Chiết áp được gắn vào phần đế của phím điều khiển trò chơi đề đo?',
      choice: [
        { id: 0, choice: 'Hướng chuyển động (The direction)' },
        { id: 1, choice: 'Vị trí (Position)' },
        { id: 2, choice: 'Lượng chuyển động (The amount of movement)' },
        { id: 3, choice: 'Độ phân giải (Resolution)' },
      ],
      answer: 2,
    },
    {
      question: `Phím điều khiển trò chơi nhạy cảm áp suất (Pressure-sensitive joysticks) còn
      được gọi là?`,
      choice: [
        { id: 0, choice: 'Phím điều khiển đối xứng (Isometric joystick) ' },
        {
          id: 1,
          choice: 'Phím không chuyển động (Non movable stick)',
        },
        {
          id: 2,
          choice: 'Phím điều khiển (Joystick)',
        },
        {
          id: 3,
          choice: 'Không đáp án nào nêu trên',
        },
      ],
      answer: 0,
    },
    {
      question: `Thiết bị nào dưới đây được xây dựng với các cảm biến dùng để phát hiện chuyển
      động bàn tay và ngón tay?`,
      choice: [
        { id: 0, choice: 'Bộ số hóa (Digitizers)' },
        { id: 1, choice: 'Găng tay cảm nhận (Data glove)' },
        { id: 2, choice: 'Phím điều khiển trò chơi (Joystick)' },
        { id: 3, choice: 'Track ball' },
      ],
      answer: 1,
    },
    {
      question: `Thiết bị nào được sử dụng làm đầu vào là tọa độ 2 chiều bằng cách kích hoạt con
      trỏ tay trên một bề mặt phẳng?`,
      choice: [
        {
          id: 0,
          choice: 'Graphic tablet',
        },
        {
          id: 1,
          choice: 'Data tablet',
        },
        {
          id: 2,
          choice: 'Cả 1 & 2',
        },
        {
          id: 3,
          choice: 'Chỉ 2',
        },
      ],
      answer: 2,
    },
    {
      question: `Điền vào phần bỏ trống
      ___________ được sử dụng để xác định vị trí trên data tablet?`,
      choice: [
        { id: 0, choice: 'Strip microphones' },
        { id: 1, choice: 'Signal strength' },
        { id: 2, choice: `Hoặc Signal strength hoặc coded pulse` },
        { id: 3, choice: `Coded pulse` },
      ],
      answer: 2,
    },
    {
      question: `Điền vào phần bỏ trống
      __________ cho phép vị trí trên màn hình được lựa chọn bằng việc tiếp xúc một
      ngón tay?`,
      choice: [
        { id: 0, choice: `Máy quét ảnh (Image scanner)` },
        { id: 1, choice: 'Light pen' },
        { id: 2, choice: 'Mouse' },
        { id: 3, choice: 'Bảng lựa chọn bằng tiếp xúc (Touch panels)' },
      ],
      answer: 3,
    },
    {
      question: 'Nhược điểm của light pen là gì?',
      choice: [
        { id: 0, choice: 'Không thể phát hiện vị trí trong vùng màu đen' },
        { id: 1, choice: 'Hình dáng' },
        { id: 2, choice: 'Không thể phát hiện vị trí' },
        { id: 3, choice: 'Đọc chính xác' },
      ],
      answer: 0,
    },
    {
      question: `Điền vào phần bỏ trống
      ________ Được sử dụng trong trạm làm việc đồ họa như là thiết bị vào chấp nhận
      các câu lệnh bằng giọng nói?`,
      choice: [
        { id: 0, choice: 'Bộ nhận dạng tiếng nói (Speech recognizers)' },
        { id: 2, choice: 'Bảng lựa chọn bằng tiếp xúc (Touch panels)' },
        { id: 1, choice: 'chi A' },
        { id: 3, choice: 'Tất cả các lựa chọn ở trên' },
      ],
      answer: 0,
    },
    {
      question: `Giọng nói được sử dụng để làm gì trong hệ thống dùng giọng nói?`,
      choice: [
        { id: 0, choice: `Để khởi tạo các thao tác đồ họa (To initiate graphics operation)` },
        {
          id: 1,
          choice: `Để nhập dữ liệu (To enter data)`,
        },
        { id: 2, choice: `Không a cũng không b` },
        { id: 3, choice: `Cả a & b` },
      ],
      answer: 3,
    },
    {
      question: `Điền vào phần bỏ trống. Khi một câu lệnh bằng giọng nói được đưa ra, hệ thống sẽ tìm kiếm
      trong_____________ để đối sánh mẫu tần số.`,
      choice: [
        { id: 1, choice: `Bộ nhớ (Memory)` },
        { id: 0, choice: `Từ điển (Dictionary)` },
        { id: 2, choice: `Dữ liệu vào (Input data)` },
        { id: 3, choice: `Đĩa cứng (Hard disk)` },
      ],
      answer: 0,
    },
    {
      question: `Thiết bị được thiết kế để tối thiểu hóa âm thanh nền là?`,
      choice: [
        { id: 1, choice: `Bộ số hóa (Digitizers)` },
        { id: 2, choice: `Bộ số hóa (Digitizers)` },
        { id: 0, choice: `Micro (Microphone)` },
        { id: 3, choice: `Phím điều khiển trò chơi (Joy stick)` },
      ],
      answer: 0,
    },
    {
      question: `Chất lượng một bức ảnh có được từ thiết bị phụ thuộc vào`,
      choice: [
        { id: 1, choice: `Kích cỡ của 1 điểm (Dot size)` },
        { id: 2, choice: `Số lượng điểm trên mỗi inch` },
        { id: 3, choice: `Số lượng dòng trên mỗi inch` },
        { id: 0, choice: `Tất cả các đáp án trên` },
      ],
      answer: 0,
    },
    {
      question: 'Thiết bị nào dưới đây không phải thiết bị vào?',
      choice: [
        { id: 1, choice: 'Trackball và space ball' },
        { id: 0, choice: 'Dòng máy in tác động (Impact printers)' },
        { id: 2, choice: `Găng tay cảm nhận (Data glove` },
      ],
      answer: 0,
    },
    {
      question: 'Thiết bị nào dưới đây có chứa thumbwheel, trackball và mouse ball chuẩn?',
      choice: [
        { id: 1, choice: 'Điều khiển trò chơi (Joystick)' },
        { id: 0, choice: 'Chuột Z (Z mouse)' },
        { id: 2, choice: 'Chuột (Mouse)' },
        { id: 3, choice: 'Trackball' },
      ],
      answer: 0,
    },
    {
      question: 'Thực tế ảo, CAD, và hoạt cảnh là ứng dụng của',
      choice: [
        { id: 0, choice: 'Chuột Z (Z mouse)' },
        { id: 1, choice: 'Bộ số hóa (Digitizers)' },
        { id: 2, choice: 'Bảng dữ liệu (Data tablets)' },
        { id: 1, choice: 'Máy quét ảnh (Image scanner)' },
      ],
      answer: 0,
    },
    {
      question: 'Thiết bị nào cung cấp thông tin vị trí cho hệ thống đồ họa?',
      choice: [
        { id: 0, choice: 'Thiết bị vào (Input devices)' },
        { id: 1, choice: 'Thiết bị ra (Output devices)' },
        { id: 2, choice: 'Thiết bị trỏ (Pointing devices)' },
        { id: 3, choice: 'Cả A và C' },
      ],
      answer: 3,
    },
    {
      question: `Số lượng điểm ảnh được lưu trữ trong bộ đệm khung của một hệ thống đồ họa
      được biết đến như là?`,
      choice: [
        { id: 1, choice: 'Độ sâu (Depth)' },
        { id: 2, choice: 'Tốc độ làm tươi (Refresh rate)' },
        { id: 0, choice: 'Độ phân giải (Resolution)' },
        { id: 3, choice: 'Dung lượng bộ nhớ (Capacity of memory)' },
      ],
      answer: 0,
    },
    {
      question: `Trong hệ thống đồ họa, mảng các điểm ảnh trong một bức ảnh được lưu trữ trong?`,
      choice: [
        { id: 0, choice: 'Bộ đệm khung (Frame buffer)' },
        { id: 1, choice: 'Bộ nhớ (Memory)' },
        { id: 2, choice: 'Bộ vi xử lý (Processor)' },
        { id: 3, choice: 'B & C' },
      ],
      answer: 0,
    },
    {
      question: `Nhiệt được cung cấp cho ống ca tốt (cathode) bằng một dòng điện đi qua dây
      điện được gọi là?`,
      choice: [
        { id: 1, choice: 'Súng điện tử (Electron gun)' },
        { id: 0, choice: 'Dây tóc (Filament)' },
        { id: 2, choice: 'Dòng điện tử (Electron beam)' },
        { id: 3, choice: 'A nốt và ca tốt (Anode and cathode)' },
      ],
      answer: 0,
    },
    {
      question: `Số lượng tối đa các điểm có thể hiển thị không bị trung nhau trong ống CRT
      được coi như là?`,
      choice: [
        { id: 1, choice: 'Ảnh (Picture)' },
        { id: 0, choice: 'Độ phân giải (Resolution)' },
        { id: 2, choice: 'Đại lượng không đổi (Persistence)' },
        { id: 3, choice: 'A hoặc C' },
      ],
      answer: 0,
    },
    {
      question: `Điền vào phần bỏ trống
      ________ lưu trữ thông tin ảnh như là phân bố sự thay đổi đằng sau màn hình
      phốt pho.`,
      choice: [
        { id: 1, choice: 'Ống tia ca tốt (Cathode ray tube)' },
        { id: 2, choice: 'Màn hình hiển thị phẳng (Flat panel displays)' },
        { id: 0, choice: 'Ống lưu trữ cảnh trực tiếp (Direct-view storage tube)' },
        { id: 3, choice: 'Thiết bị hiển thị ba chiều (3D viewing device)' },
      ],
      answer: 0,
    },
    {
      question: 'Thiết bị chuyển đổi từ năng lượng điện thành ánh sang được gọi là?',
      choice: [
        { id: 1, choice: 'Màn hình tinh thể lỏng (Liquid-crystal displays)' },
        { id: 0, choice: 'Bộ phát (Emitters)' },
        {
          id: 2,
          choice: 'Bộ không phát (Non-emitters)',
        },
        { id: 3, choice: 'Màn hình Plasma (Plasma panels)' },
      ],
      answer: 0,
    },
    {
      question: `Trong hệ thống nào, phương pháp mặt nạ tạo bóng (the Shadow mask methods
        )thường được sử dụng?`,
      choice: [
        { id: 0, choice: 'Hệ thống quét mành (Raster-scan system)' },
        { id: 1, choice: 'Hệ thống quét ngẫu nhiên (Random-scan system)' },
        {
          id: 2,
          choice: 'Chỉ A',
        },
        { id: 3, choice: 'Cả A và B' },
      ],
      answer: 0,
    },
    {
      question: `Quá trình xử lý số hóa một ảnh cho trước thành tập cường độ điểm ảnh lưu trữ
      trong bộ đệm khung được gọi là?`,
      choice: [
        { id: 1, choice: 'Mành hóa (Rasterization)' },
        {
          id: 2,
          choice: 'Mã hóa (Encoding)',
        },
        { id: 0, choice: 'Chuyển đổi quét (Scan conversion)' },
        { id: 3, choice: 'Hệ thống màu thực (True color system)' },
      ],
      answer: 0,
    },
    {
      question: `Thiết bị hiển thị nào cho phép di chuyển xung quanh đối tượng và hiện thị đối
      tượng từ các hướng khác nhau?`,
      choice: [
        { id: 1, choice: 'Ống lưu trữ cảnh trực tiếp (Direct view storage tubes)' },
        {
          id: 2,
          choice: 'Thiết bị hiển thị màn hình phẳng (Flat panel display devices)',
        },
        { id: 3, choice: 'Thiết bị hiển thị plasma (Plasma panel display devices)' },
        { id: 0, choice: 'Thiết bị hiển thị ba chiều (Three-dimensional devices)' },
      ],
      answer: 0,
    },
    {
      question: 'Trong màn hình LCD, tốc độ làm tươi của màn hình là?',
      choice: [
        { id: 1, choice: '80 khung hình /s' },
        { id: 0, choice: '60 khung hình /s' },
        {
          id: 2,
          choice: '30 khung hình /s',
        },
        { id: 3, choice: '100 khung hình /s' },
      ],
      answer: 0,
    },
    {
      question: ' Hệ thống quét ngẫu nhiên được thiết kế cho ?',
      choice: [
        { id: 0, choice: 'Ứng dụng vẽ đường thẳng (Line-drawing applications)' },
        { id: 1, choice: 'Màn hình đổ bóng thực (Realistic shaded screen)' },
        {
          id: 2,
          choice: 'Hiệu ứng sương mù (Fog effect)',
        },
        { id: 3, choice: 'Chỉ có' },
      ],
      answer: 0,
    },
    {
      question: `Điền vào phần bỏ trống
      Thiết bị ra chính trong hệ thống đồ họa là _________?`,
      choice: [
        { id: 0, choice: 'Màn hình hiển thị video (Video monitor)' },
        { id: 1, choice: 'Máy quét' },
        {
          id: 2,
          choice: 'Không A cũng không B',
        },
        { id: 3, choice: 'Máy in' },
      ],
      answer: 0,
    },
    {
      question: `Trên một hệ thống đen trắng với một bit trên một điểm ảnh (one bit per pixel), bộ
      đệm khung thường được gọi là?`,
      choice: [
        { id: 1, choice: 'Pix map' },
        {
          id: 2,
          choice: 'Multi map',
        },
        { id: 0, choice: 'Bitmap' },
        { id: 3, choice: 'Tất cả các đáp án trên' },
      ],
      answer: 0,
    },
    {
      question: '“Aspect ratio” có nghĩa là?',
      choice: [
        {
          id: 0,
          choice: `Tỉ lệ điểm ảnh chiều cao so với chiều rộng (Ratio of vertical points to horizontal
          points)`,
        },
        { id: 1, choice: 'Số lượng điểm ảnh (Number of pixels)' },
        {
          id: 2,
          choice: `Tỉ lệ điểm ảnh chiều rộng so với chiều cao (Ratio of horizontal points to vertical
            points)`,
        },
        { id: 3, choice: 'Cả B và C' },
      ],
      answer: 3,
    },
    {
      question: 'Giao diện đồ họa cơ bản là?',
      choice: [
        { id: 0, choice: 'Thiết bị trỏ (Pointing)' },
        { id: 1, choice: 'Thiết bị định vị (Positioning)' },
        { id: 3, choice: 'Cả A và B' },
        {
          id: 2,
          choice: 'Không lựa chọn nào ở trên',
        },
      ],
      answer: 3,
    },
  ],
  CacThuatToanToMau: [
    {
      question: 'Các lựa chọn màu được mã hóa số với các giá trị sau?',
      choice: [
        { id: 0, choice: 'Miền bao gồm 0 và các số nguyên dương' },
        { id: 1, choice: `Miền từ 0 tới 1` },
        { id: 2, choice: 'Miền từ 0 tới -0' },
        { id: 3, choice: 'Chỉ C' },
      ],
      answer: 0,
    },
  ],
}
export default data

//question 10
