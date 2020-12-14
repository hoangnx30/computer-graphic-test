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
        { id: 2, choice: 'Máy đo điện thế (Volta meter).' },
        { id: 3, choice: 'Tham số (Parameter).' },
      ],
      answer: 0,
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
        { id: 1, choice: `Găng tay cảm nhận(Data glove)` },
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
        { id: 3, choice: 'Bảng dữ liệu (Data tablets)' },
        { id: 2, choice: 'Máy quét ảnh (Image scanner)' },
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
      question: 'Thiết bị chuyển đổi từ năng lượng điện thành ánh sáng được gọi là?',
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
        { id: 3, choice: 'Chỉ C' },
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
      id: 1,
      question: 'Các lựa chọn màu được mã hóa số với các giá trị sau.',
      choice: [
        { id: 3, choice: 'Miền bao gồm 0 và các số nguyên dương' },
        { id: 0, choice: 'Miền từ 0 tới 1' },
        { id: 1, choice: 'Miền từ 0 tới -0' },
        { id: 2, choice: 'Chỉ B đúng' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question: 'Trong hệ thống mành có màu, số lượng màu sẵn có phụ thuộc vào',
      choice: [
        { id: 3, choice: 'Dung lượng cung cấp để lưu trữ 1 điểm ảnh trong bộ đệm khung' },
        { id: 0, choice: 'Màu trong bộ đệm khung' },
        { id: 1, choice: 'Màu RGB ' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Màu có mã “000” là màu',
      choice: [
        { id: 0, choice: 'Trắng' },
        { id: 3, choice: 'Đen' },
        { id: 1, choice: 'Xanh dương' },
        { id: 2, choice: 'Xanh lá' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Thông tin màu được lưu trữ trong',
      choice: [
        { id: 0, choice: 'Bộ nhớ chính' },
        { id: 3, choice: 'Bộ đệm khung' },
        { id: 1, choice: 'Bộ nhớ phụ' },
        { id: 2, choice: 'Card đồ họa' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question:
        'Bất cứ khi nào một mã màu cụ thể được mô tả rõ trong một ứng dụng, giá trị nhị phân tương ứng được lưu trữ trong?',
      choice: [
        { id: 3, choice: 'Trực tiếp trong bộ đệm khung (Directly in frame buffer)' },
        { id: 0, choice: 'Bảng tra màu (Color look-up table)' },
        { id: 2, choice: 'Bảng tra video (Video lookup table)' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question: 'Miền giá trị mô tả các mức xám ',
      choice: [
        { id: 0, choice: 'Miền giá trị từ -1 tới 1' },
        { id: 3, choice: 'Miền giá trị từ 0 tới 1' },
        { id: 1, choice: 'Miền giá trị từ 0 tới -1' },
        { id: 2, choice: 'Bất cứ lựa chọn nào ở trên' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question:
        'Với 3 bit cho một điểm ảnh, chúng ta có thể biểu diễn 8 mức xám. Nếu chúng ta sử dụng 8 bit cho một điểm ảnh thì có thể biểu diễn được bao nhiêu mức xám?',
      choice: [
        { id: 0, choice: '18 mức xám' },
        { id: 3, choice: '256 mức xám' },
        { id: 1, choice: '128 mức xám' },
        { id: 2, choice: 'Không màu' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Với cường độ hiển thị tương ứng với màu cho trước, chỉ số ci được tính như sau',
      choice: [
        { id: 3, choice: 'Intensity=0.5[min(r, g, b)+ max(r, g, b)] ' },
        { id: 0, choice: 'Intensity=0.5[max(r, g, b)+ max(r, g, b)] ' },
        { id: 1, choice: 'Intensity=0.5[min(r, g, b)+ min(r, g, b)] ' },
        { id: 2, choice: 'Intensity=0.5[max(r, g, b)- max(r, g, b)] ' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question: 'Một người sử dụng có thể thiết lập đầu vào bảng màu trong chương trình ứng dụng PHIGS với hàm',
      choice: [
        { id: 0, choice: 'setColorRepresentation (ws, ci, colorptr)' },
        { id: 3, choice: 'setColourRepresentation (ws, ci, colorptr)' },
        { id: 1, choice: 'setColour (ws, ci, colorptr' },
        { id: 2, choice: 'setColourRepresentation ()' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question:
        'Nếu bất cứ giá trị cường độ vào gần 0.33 có thể được lưu trữ thành giá trị nhị phân 1 trong bộ đệm khung thì nó biểu ',
      choice: [
        { id: 0, choice: 'Màu xanh lá tối' },
        { id: 3, choice: 'Màu xám tối' },
        { id: 1, choice: 'Màu xám sáng' },
        { id: 2, choice: 'Trắng hoặc đen' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question: 'Một kiểu tô màu cơ bản trong chương trình PHIGS là hàm',
      choice: [
        { id: 3, choice: 'setInteriorStyle (fs)' },
        { id: 0, choice: 'setStyle (fs)' },
        { id: 1, choice: 'SetfillStyle (fs)' },
        { id: 2, choice: 'setInteriorStyleIndex (fs)' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Loại này không phải kiểu tô màu cơ bản?',
      choice: [
        { id: 3, choice: 'Tối (Dark)' },
        { id: 0, choice: 'Rỗng (Hollow)' },
        { id: 1, choice: 'Màu đặc (solid color)' },
        { id: 2, choice: 'Mẫu (Pattern)' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: 'Quá trình tô màu một vùng với mẫu hình chữ nhật được gọi là',
      choice: [
        { id: 0, choice: 'Linear fill' },
        { id: 3, choice: 'Tiling' },
        { id: 1, choice: 'Tint-fill' },
        { id: 2, choice: 'Soft-fill' },
      ],
      answer: 3,
    },
    {
      id: 14,
      question:
        'Thuật toán tô màu lại một vùng mà trước đó đã được tô bằng cách trộn màu “foreground color F” và ”background color B” khi F!=B là',
      choice: [
        { id: 3, choice: 'Linear soft-fill' },
        { id: 0, choice: 'Tint fill' },
        { id: 1, choice: 'Flood fill' },
        { id: 2, choice: 'Boundary fill' },
      ],
      answer: 3,
    },
    {
      id: 15,
      question: 'Màu tô kết hợp với màu nền “ là',
      choice: [
        { id: 0, choice: 'Soft fill' },
        { id: 1, choice: 'Tint fill' },
        { id: 2, choice: 'Không lựa chọn nào' },
        { id: 3, choice: 'Cả A và B' },
      ],
      answer: 3,
    },
    {
      id: 16,
      question: 'Thủ tục tô màu vân “Hatch fill” được gọi để vẽ',
      choice: [
        { id: 0, choice: 'Single hatching' },
        { id: 1, choice: 'Cross hatching' },
        { id: 3, choice: 'A hoặc B' },
      ],
      answer: 3,
    },
    {
      id: 17,
      question:
        'Khi hai màu nền (background color) B1 và B2 được trộn với màu ”foreground color F”, kết quả được màu P được tính như sau',
      choice: [
        { id: 0, choice: 'P=t0*F+t1*B1+(1-t0-t1)B2' },
        { id: 1, choice: 'P=t0*F-t1*B1+(1-t0-t1)B2' },
        { id: 2, choice: 'P=t0*F+t1*B1+(1+t0+t1)B2' },
      ],
      answer: 0,
    },
    {
      id: 18,
      question: 'Phép toán được dùng để kết hợp mẫu tô (fill pattern) với mẫu nền (background pattern) là',
      choice: [
        { id: 3, choice: 'Tất cả đáp án trên' },
        { id: 0, choice: 'AND ' },
        { id: 1, choice: 'OR ' },
        { id: 2, choice: 'X-OR ' },
      ],
      answer: 3,
    },
    {
      id: 19,
      question: 'Vùng rỗng (Hollow areas) được hiển thị chỉ dùng',
      choice: [
        { id: 0, choice: 'Lộ trình vẽ đường thẳng (Line-drawing routine)' },
        { id: 3, choice: 'Viền biên (Boundary outline)' },
        { id: 1, choice: 'Mẫu vân sọc (Hatched patterns)' },
        { id: 2, choice: 'Chuỗi các đường thẳng khép kín (Closed poly line)' },
      ],
      answer: 3,
    },
    {
      id: 20,
      question: 'Các lựa chọn cho tô màu một vùng được định nghĩa bao gồm một lựa chọn giữa __________',
      choice: [
        { id: 0, choice: 'Màu đặc hoặc mẫu (Solid color or a pattern fill)' },
        { id: 1, choice: 'Các lựa chọn cho các màu và mẫu cụ thể (Choices for particular colors and pattern)' },
        { id: 3, choice: 'Cả A và B ' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 21,
      question: 'Các dòng quét được sử dụng để quét từ',
      choice: [
        { id: 3, choice: 'Đỉnh tới đáy (Top to bottom)' },
        { id: 0, choice: 'Đáy tới đỉnh (Bottom to top)' },
        { id: 1, choice: 'Cả A và B' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
  ],
  CacThuatToanVeDuongThangDuongTron: [
    {
      id: 1,
      question: 'Phương trình đường thẳng dưới dạng hệ số góc (Cartesian slope-intercept equation) có dạng như sau',
      choice: [
        { id: 0, choice: 'y = b.x + m' },
        { id: 3, choice: 'y = m.x + b' },
        { id: 1, choice: 'y = x.x + m' },
        { id: 2, choice: 'y = b + m.m' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        'Đối với các đường thẳng có hệ số góc m với |m|<1, khi áp dụng thuật toán đơn giảng để vẽ đường thẳng thì',
      choice: [
        { id: 3, choice: 'Tăng x lên 1 đơn vị rồi tính y' },
        { id: 0, choice: 'Tăng y lên 1 đơn vị rồi tính x' },
        { id: 1, choice: 'Cả A và B' },
        { id: 2, choice: 'Không lựa chọn nào ở trên' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Trong hệ thống mành hóa, các đường thẳng được vẽ dưới dạng',
      choice: [
        { id: 0, choice: 'Đường thẳng' },
        { id: 3, choice: 'Điểm ảnh' },
        { id: 1, choice: 'Chấm' },
        { id: 2, choice: 'Không lựa chọn nào ở trên' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Tên đầy đủ của DDA trong thuật toán DDA là',
      choice: [
        { id: 3, choice: 'Digital differential analyzer' },
        { id: 0, choice: 'Digital difference analyzer' },
        { id: 1, choice: 'Direct differential analyzer' },
        { id: 2, choice: 'Data differential analyzer' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question:
        'Thuật toán nào là phương pháp nhanh nhất tìm vị trí của điểm ảnh khi vẽ đường thẳng trong số các thuật toán dưới đây?',
      choice: [
        { id: 3, choice: 'Thuật toán vẽ đường thẳng Bresenham' },
        { id: 0, choice: 'Thuật toán vẽ đường thẳng dùng đường thẳng hệ số góc đơn giản' },
        { id: 1, choice: 'Thuật toán điểm giữa vẽ đường thẳng ' },
        { id: 2, choice: 'Thuật toán DDA vẽ đường thẳng ' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question: 'Một thuật toán mành hóa vẽ đường thẳng chính xác và hiệu quả là',
      choice: [
        { id: 0, choice: 'Thuật toán vẽ đường thẳng dùng đường thẳng hệ số góc đơn giản' },
        { id: 3, choice: 'Thuật toán vẽ đường thẳng Bresenham' },
        { id: 1, choice: 'Thuật toán DDA vẽ đường thẳng' },
        { id: 2, choice: 'Thuật toán điểm giữa vẽ đường thẳng ' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Trong thuật toán Bresendham vẽ đường thẳng, Nếu d1 < d2 thì tham số quyết định Pk là______',
      choice: [
        { id: 3, choice: 'Âm' },
        { id: 0, choice: 'Dương' },
        { id: 1, choice: 'Tương đương' },
        { id: 2, choice: 'A hoặc B' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Thuật toán vẽ đường thẳng nào là tốt nhất trong việc cân bằng tải xử lý giữa các bộ xử lý?',
      choice: [
        { id: 3, choice: 'Thuật toán song song vẽ đường thẳng' },
        { id: 0, choice: 'Thuật toán DDA vẽ đường thẳng' },
        { id: 1, choice: 'Thuật toán điểm giữa vẽ đường thẳng ' },
        { id: 2, choice: 'Thuật toán vẽ đường thẳng Bresenham' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question: 'Thuật toán sử dụng nhiều bộ xử lý để tính toán các vị trí của điểm ảnh là',
      choice: [
        { id: 3, choice: 'Thuật toán song song vẽ đường thẳng' },
        { id: 0, choice: 'Thuật toán DDA vẽ đường thẳng' },
        { id: 1, choice: 'Thuật toán vẽ đường thẳng Bresenham' },
        { id: 2, choice: 'Thuật toán điểm giữa vẽ đường thẳng ' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question: 'Tham chiếu tọa độ trong hàm vẽ chuỗi đường thẳng được chỉ ra như',
      choice: [
        { id: 3, choice: 'Giá trị tọa độ tuyệt đối (Absolute coordinate values' },
        { id: 0, choice: 'Vị trí hiện tại (Current position)' },
        { id: 1, choice: 'Giá trị tọa độ liên quan (Relative coordinate values)' },
        { id: 2, choice: 'Giá trị tọa độ thực (Real coordinate values)' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question: 'Để áp dụng phương pháp điểm giữa vẽ đường tròn, chúng ta định nghĩa',
      choice: [
        { id: 0, choice: 'circle(x, y)= x + y2 - r 2' },
        { id: 3, choice: 'circle(x, y)= x 2+ y2 - r 2' },
        { id: 1, choice: 'circle(x, y)= x 2+ y- r' },
        { id: 2, choice: 'circle(x, y)= x 2+ y2 - z 2' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question:
        'Điền vào phần bỏ trống _______ được định nghĩa là tập các điểm sao tổng khoảng cách từ điểm đó tới 2 điểm cố định cho trước không đổi.',
      choice: [
        { id: 0, choice: 'Đường tròn' },
        { id: 3, choice: 'Elip' },
        { id: 1, choice: 'Đường thẳng' },
        { id: 2, choice: 'Tam giác' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question:
        'Nếu đường biên được mô tả với một màu, thì thuật toán xuất phát từ một điểm xử lý từng điểm ảnh cho đến khi gặp được màu biên được gọi là',
      choice: [
        { id: 3, choice: 'Thuật toán tô màu loang (Flood-fill algorithm)' },
        { id: 0, choice: 'Thuật toán đường cong song song (Parallel curve algorithm)' },
        { id: 1, choice: 'Thuật toán tô biên (Boundary-fill algorithm)' },
        { id: 2, choice: 'Thuật toán tô màu dòng quét (Scan-line fill algorithm)' },
      ],
      answer: 3,
    },
    {
      id: 14,
      question: 'Thuật toán tô phủ loang dùng quan hệ láng giềng nào',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: '4 láng giềng' },
        { id: 1, choice: '8 láng giềng' },
        { id: 2, choice: 'Chỉ B' },
      ],
      answer: 3,
    },
    {
      id: 15,
      question: 'Thuộc tính cơ bản của đoạn thẳng là',
      choice: [
        { id: 0, choice: 'Kiểu' },
        { id: 3, choice: 'Tất cả đáp án' },
        { id: 1, choice: 'Độ rộng' },
        { id: 2, choice: 'Màu' },
      ],
      answer: 3,
    },
    {
      id: 16,
      question: 'Một đường thẳng tô nét đứt (dashed line) được hiển thị bằng cách sinh ra _________.',
      choice: [
        { id: 3, choice: 'Inter dash spacing' },
        { id: 0, choice: 'Very short dashes' },
        { id: 1, choice: 'Cả A và B' },
        { id: 2, choice: 'A hoặc B' },
      ],
      answer: 3,
    },
    {
      id: 17,
      question: 'Một đường thẳng tô dưới dạng điểm (dotted line) có thể được hiển thị bằng cách sinh ra',
      choice: [
        { id: 0, choice: 'Very short dashes với khoảng trắng nhỏ hơn hoặc bằng cỡ của dash' },
        { id: 3, choice: 'Very short dashes với khoảng trắng lớn hơn hoặc bằng cỡ của dash' },
        { id: 1, choice: 'Very long dashes với khoảng trắng lớn hơn hoặc bằng cỡ của dash' },
        { id: 2, choice: 'Dots' },
      ],
      answer: 3,
    },
    {
      id: 18,
      question: 'Lựa chọn nào dưới đây không phải kiểu đường thẳng (line-type)?',
      choice: [
        { id: 3, choice: 'Chỉ C đúng' },
        { id: 0, choice: 'Dashed line' },
        { id: 1, choice: 'Dark line' },
        { id: 2, choice: 'Dotted line' },
      ],
      answer: 3,
    },
    {
      id: 19,
      question: 'Trong một ứng dụng, để thiết lập thuộc tính kiểu đường thẳng (line-type) chúng ta dùng câu lệnh',
      choice: [
        { id: 0, choice: 'SetLinetype(lt)' },
        { id: 3, choice: 'setLinetype(lt)' },
        { id: 1, choice: 'SETLINETYPE(lt)' },
        { id: 2, choice: 'SETLINE()' },
      ],
      answer: 3,
    },
    {
      id: 20,
      question:
        'Thuật toán hiển thị thuộc tính kiểu đường thẳng (line-type) bằng cách vẽ từng nhịp điểm ảnh (pixel span) là',
      choice: [
        { id: 3, choice: 'Raster line algorithm' },
        { id: 0, choice: 'Random scan algorithm' },
        { id: 1, choice: 'Raster scan algorithm' },
        { id: 2, choice: 'Random line algorithm' },
      ],
      answer: 3,
    },
    {
      id: 21,
      question: 'Mặt nạ điểm ảnh (Pixel mask) có nghĩa là',
      choice: [
        { id: 3, choice: 'Chuỗi chứa 0 và 1' },
        { id: 0, choice: 'Chuỗi chỉ chứa 0' },
        { id: 1, choice: 'Chuỗi chỉ chứa 1' },
      ],
      answer: 3,
    },
    {
      id: 22,
      question: 'Một “heavy line” trên màn hình video có thể hiển thị như',
      choice: [
        { id: 3, choice: 'Adjacent parallel lines' },
        { id: 0, choice: 'Adjacent perpendicular lines' },
        { id: 1, choice: 'Cả A và B' },
        { id: 2, choice: 'Hoặc A hoặc B' },
      ],
      answer: 3,
    },
    {
      id: 23,
      question: 'Tham số cho “setLineWidthScaleFactor (lw) “ được mô tả là?',
      choice: [
        { id: 3, choice: 'Độ rộng của đường thẳng đang vẽ (Relative width of the line)' },
        { id: 0, choice: 'Độ rộng chuẩn (Standard width)' },
        { id: 1, choice: 'Độ dày của đường thẳng đang vẽ (Thickness of the line)' },
        { id: 2, choice: 'Tất cả các lựa chọn trên' },
      ],
      answer: 3,
    },
    {
      id: 24,
      question:
        'Chúng ta có thể chỉnh hình dáng của các điểm cuối (line ends) của đường thẳng có bề ngoài tốt hơn sử dụng',
      choice: [
        { id: 0, choice: 'Line spacing' },
        { id: 3, choice: 'Line caps' },
        { id: 1, choice: 'Round cap' },
        { id: 2, choice: 'More dots' },
      ],
      answer: 3,
    },
    {
      id: 25,
      question: 'Độ dày đường thẳng (Thick line) được vẽ với ',
      choice: [
        { id: 3, choice: 'Tất cả các lựa chọn trên' },
        { id: 0, choice: 'Butt caps' },
        { id: 1, choice: 'Round caps' },
        { id: 2, choice: 'Projecting square caps' },
      ],
      answer: 3,
    },
    {
      id: 26,
      question: 'Chúng ta thiết lập giá trị màu đường thẳng (line-color value) trong PHIGS bằng hàm',
      choice: [
        { id: 3, choice: 'setPolylineColorIndex (lc)' },
        { id: 0, choice: 'setline Color()' },
        { id: 1, choice: 'Chỉ A đúng' },
        { id: 2, choice: 'SETPOLYLINECOLORINDEX (lc)' },
      ],
      answer: 3,
    },
    {
      id: 27,
      question:
        'Điền vào phần bỏ trống Nếu góc giữa hai đoạn thẳng nối nhau là rất nhỏ thì ________ có thể sinh ra sự tăng đột biến làm biến dạng bề ngoài của polyline.',
      choice: [
        { id: 0, choice: 'Round join' },
        { id: 3, choice: 'Miter join' },
        { id: 1, choice: 'Bevel join' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 28,
      question: 'Một đường thẳng được vẽ với màu nền thì',
      choice: [
        { id: 0, choice: 'Visible' },
        { id: 3, choice: 'Invisible' },
        { id: 1, choice: 'Visible or Invisible' },
      ],
      answer: 3,
    },
    {
      id: 29,
      question: 'Giá trị của tham số t nằm giữa',
      choice: [
        { id: 0, choice: '1 và 2' },
        { id: 3, choice: '1 và 10' },
        { id: 1, choice: '0 và 1' },
        { id: 2, choice: '0 và 3' },
      ],
      answer: 3,
    },
  ],
  CacThuatToanCatXen: [
    {
      id: 1,
      question: 'Quá trình ánh xạ từ cửa sổ thế giới từ hệ tọa độ thế giới sang viewport được gọi là',
      choice: [
        { id: 0, choice: 'Viewport' },
        { id: 3, choice: 'Transformation viewing ' },
        { id: 1, choice: 'Clipping window ' },
        { id: 2, choice: 'Screen coordinate system' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        'Quá trình trích chọn một phần của cơ sở dữ liệu hoặc một ảnh bên trong/ bên ngoài của một vùng được gọi là',
      choice: [
        { id: 0, choice: 'Transformation ' },
        { id: 3, choice: 'Clipping' },
        { id: 1, choice: 'Projection ' },
        { id: 2, choice: 'Mapping' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Phần hình chữ nhật của một cửa sổ giao diện nơi mà bức ảnh sẽ xuất hiện được gọi là',
      choice: [
        { id: 0, choice: 'Transformation viewing' },
        { id: 3, choice: 'View port ' },
        { id: 1, choice: 'Clipping window ' },
        { id: 2, choice: 'Screen coordinate system' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Hệ tọa độ của cửa sổ nơi đối tượng thật xuất hiện được gọi là .............. ',
      choice: [
        { id: 0, choice: 'Device coordinates ' },
        { id: 3, choice: 'World coordinates ' },
        { id: 1, choice: 'Screen coordinates ' },
        { id: 2, choice: 'Cartesian coordinates' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: 'Hệ tọa độ của viewport được gọi là ............',
      choice: [
        { id: 0, choice: 'World coordinates ' },
        { id: 3, choice: 'Screen coordinates ' },
        { id: 1, choice: 'Polar coordinates ' },
        { id: 2, choice: 'Cartesian coordinates' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question: 'Vùng chứa đối tượng sau khi bị cắt xén được gọi là ..............',
      choice: [
        { id: 0, choice: 'Boundary ' },
        { id: 3, choice: 'Clip window' },
        { id: 1, choice: 'Enclosing rectangle ' },
        { id: 2, choice: 'Clip square' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Điền vào phần bỏ trống ............. để xác định vùng ảnh nằm ngoài cửa sổ cắt xén (clip window)',
      choice: [
        { id: 3, choice: 'Exterior clipping ' },
        { id: 0, choice: 'Interior clipping ' },
        { id: 1, choice: 'Extraction' },
        { id: 2, choice: 'Không lựa chọn nào ở trên' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Xác định thuật toán dùng để cắt xén đoạn thẳng',
      choice: [
        { id: 0, choice: 'Cohen- Sutherland algorithm ' },
        { id: 1, choice: 'Liang-Barsky clipping ' },
        { id: 2, choice: 'Nicholl-Lee-Nicholl clipping' },
        { id: 3, choice: 'Tất cả đáp án trên' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question: 'Điền vào phần bỏ trống Mã dùng để mã hóa vùng cửa sổ cắt xén là ............',
      choice: [
        { id: 0, choice: '0001' },
        { id: 3, choice: '0000' },
        { id: 1, choice: '1000' },
        { id: 2, choice: '1111' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question:
        'Theo thuật toán Cohen-Sutherland, một đoạn thẳng hoàn toàn nằm bên ngoài cửa sổ cắt xén nếu ............',
      choice: [
        { id: 0, choice: "Mã của hai đầu mút đoạn thẳng có cùng bit '0' tại cùng vị trí." },
        { id: 3, choice: "Mã của hai đầu mút đoạn thẳng có cùng bit '1' tại cùng vị trí." },
        { id: 1, choice: 'Nếu bit L và R khác 0.' },
        { id: 2, choice: 'Mã của hai đầu mút đoạn thẳng có giá trị khác 0' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question:
        'Điền vào phần bỏ trống Mã của một điểm là 1001. Điểm đó nằm ở vùng ..............… so với cửa sổ cắt xén.',
      choice: [
        { id: 0, choice: 'Botton right' },
        { id: 3, choice: 'Top left ' },
        { id: 1, choice: 'Bottom left ' },
        { id: 2, choice: 'Top right ' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Kết quả của phép toán AND với mã của các đầu mút với giá trị khác 0. Câu nào sau đây đúng?',
      choice: [
        { id: 3, choice: 'Đoạn thẳng nằm hoàn toàn bên ngoài cửa sổ cắt' },
        { id: 0, choice: 'Đoạn thẳng nằm hoàn toàn bên trong cửa sổ cắt' },
        { id: 1, choice: 'Đoạn thẳng có một phần nằm bên trong cửa sổ cắt' },
        { id: 2, choice: 'Đoạn thẳng đã được cắt' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: "Điền vào phần bỏ trống Bit bên trái (L bit ) của mã của điểm (X,Y) là '1' nếu ......................",
      choice: [
        { id: 0, choice: 'X > XWMIN ' },
        { id: 3, choice: 'X< XWMIN ' },
        { id: 1, choice: 'X< XWMAX ' },
        { id: 2, choice: 'X>XWMAX' },
      ],
      answer: 3,
    },
    {
      id: 14,
      question: "Bit bên phải (R bit ) của mã của điểm (X,Y) là '1' nếu......................",
      choice: [
        { id: 0, choice: 'X< XWMAX' },
        { id: 3, choice: 'X>XWMAX' },
        { id: 1, choice: 'X< XWMIN ' },
        { id: 2, choice: 'X > XWMIN' },
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "Điền vào phần bỏ trống Bit trên đỉnh (T bit ) của mã của điểm (X,Y) là '1' nếu ......................",
      choice: [
        { id: 0, choice: 'Y< YWMAX ' },
        { id: 3, choice: 'Y>YWMAX' },
        { id: 1, choice: 'Y< YWMIN ' },
        { id: 2, choice: 'Y > YWMIN ' },
      ],
      answer: 3,
    },
    {
      id: 16,
      question: "Bit dưới đáy (B bit ) của mã của điểm (X,Y) là '1' nếu .......................",
      choice: [
        { id: 0, choice: 'Y>YWMAX' },
        { id: 3, choice: 'Y< YWMIN' },
        { id: 1, choice: 'Y< YWMAX ' },
        { id: 2, choice: 'Y > YWMIN ' },
      ],
      answer: 3,
    },
    {
      id: 17,
      question:
        'Điền vào phần bỏ trống Thuật toán ...................... chia không gian 2 chiều thành 9 vùng, trong đó vùng ở giữa (viewport) chứa phần hiển thị của đối tượng',
      choice: [
        { id: 0, choice: 'Liang Barsky ' },
        { id: 3, choice: 'Cohen-Sutherland ' },
        { id: 1, choice: 'Sutherland Hodegeman ' },
        { id: 2, choice: 'N-L-N' },
      ],
      answer: 3,
    },
    {
      id: 18,
      question: 'Phép toán được sử dụng để kiểm tra đoạn thẳng có bị cắt xén hay không.............',
      choice: [
        { id: 3, choice: 'logical AND ' },
        { id: 0, choice: 'logical XOR ' },
        { id: 1, choice: 'logical OR ' },
        { id: 2, choice: 'Cả B và C' },
      ],
      answer: 3,
    },
    {
      id: 19,
      question: 'Thuật toán Sutherland Hodgeman hoạt động tốt trong trường hợp cắt xén...........',
      choice: [
        { id: 0, choice: 'Concave polygon ' },
        { id: 3, choice: 'Convex polygon ' },
        { id: 1, choice: 'Smooth curves ' },
        { id: 2, choice: 'Line segment' },
      ],
      answer: 3,
    },
    {
      id: 20,
      question:
        'Điền vào phần bỏ trống Một phép biến đổi làm xiên (slants) hình dáng của đối tượng được gọi là ....................',
      choice: [
        { id: 3, choice: 'Shear ' },
        { id: 0, choice: 'Scaling' },
        { id: 1, choice: 'Distortion ' },
        { id: 2, choice: 'Reflection ' },
      ],
      answer: 3,
    },
  ],
  CacPhepBienDoi: [
    {
      id: 1,
      question: 'Phép biến đổi tịnh tiến được áp dụng cho một đối tượng (object) bằng cách',
      choice: [
        { id: 3, choice: 'Đặt lại vị trí của đối tượng dọc theo một đường thẳng' },
        { id: 0, choice: 'Đặt lại vị trí của đối tượng dọc theo một cung tròn' },
        { id: 1, choice: 'Chỉ B' },
        { id: 2, choice: 'Tất cả đáp án trên' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question: 'Chúng ta tịnh tiến một điểm 2 chiều bằng cách cộng thêm',
      choice: [
        { id: 3, choice: 'Khoảng cách dịch chuyển' },
        { id: 0, choice: 'Độ lệch theo X' },
        { id: 1, choice: 'Độ lệch theo Y' },
        { id: 2, choice: 'X và Y' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Các khoảng cách dịch chuyển (dx, dy) được gọi là',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Véc tơ dịch chuyển' },
        { id: 1, choice: 'Véc tơ tịnh tiến' },
        { id: 2, choice: 'Không lựa chọn nào đúng' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question:
        'Trong tịnh tiến 2 chiều, một điểm (x, y) có thể dịch chuyển sang vị trí mới (x’, y’) bằng cách sử dụng phương trình',
      choice: [
        { id: 3, choice: 'x’=x+dx and y’=y+dy' },
        { id: 0, choice: 'x’=x+dx and y’=y+dx' },
        { id: 1, choice: 'X’=x+dy and Y’=y+dx' },
        { id: 2, choice: 'X’=x-dx and y’=y-dy' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: 'Phương trình của phép biến đổi tịnh tiến khi điểm biểu diễn dưới dạng tọa độ Đecác là',
      choice: [
        { id: 3, choice: 'P’=P+T' },
        { id: 0, choice: 'P’=P-T' },
        { id: 1, choice: 'P’=P*T' },
        { id: 2, choice: 'P’=p' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        'Điền vào phần bỏ trống _________ là một phép biến đổi không biến đổi hình dạng (rigid body transformation) chỉ thay đổi vị trí đối tượng mà không làm biến dạng nó.',
      choice: [
        { id: 3, choice: 'B và D' },
        { id: 0, choice: 'Quay' },
        { id: 1, choice: 'Co dãn' },
        { id: 2, choice: 'Tịnh tiến' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Một đoạn thẳng được tịnh tiến bằng cách áp dụng phương trình biến đổi',
      choice: [
        { id: 3, choice: 'P’=P+T' },
        { id: 0, choice: 'Dx và Dy' },
        { id: 1, choice: 'P’=P+P' },
        { id: 2, choice: 'Chỉ B đúng' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question:
        'Điền vào phần bỏ trống. Các đa giác được dịch chuyển bằng cách công thêm __________ vào vị trí tọa độ của mỗi đỉnh và thiết lập thuộc tính hiện tại.',
      choice: [
        { id: 3, choice: 'Véc tơ tịnh tiến' },
        { id: 0, choice: 'Đường đi một đường thẳng' },
        { id: 1, choice: 'Độ lệch' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question: 'Để thay đổi vị trí của một đường tròn hay elip chúng ta tịnh tiến',
      choice: [
        { id: 0, choice: 'Tọa độ tâm' },
        { id: 3, choice: 'Tọa độ tâm và vẽ lại hình ở vị trí mới' },
        { id: 1, choice: 'Các tạo độ biên' },
        { id: 2, choice: 'Tất cả các lựa chọn trên' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question: 'Các phép biến đổi hình học afin bao gồm',
      choice: [
        { id: 0, choice: 'Tịnh tiến' },
        { id: 3, choice: 'Tất cả đáp án trên' },
        { id: 1, choice: 'Quay' },
        { id: 2, choice: 'Co dãn' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question: 'Một phép quay hai chiều được áp dụng cho một đối tượng bằng cách ',
      choice: [
        { id: 0, choice: 'Đặt lại vị trí của đối tượng dọc theo một đường thẳng' },
        { id: 3, choice: 'Đặt lại vị trí của đối tượng dọc theo một cung tròn' },
        { id: 2, choice: 'Tất cả các lựa chọn trên' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Để sinh ra một phép quay, chúng ta phải mô tả',
      choice: [
        { id: 0, choice: 'Khoảng cách dx và dy' },
        { id: 3, choice: 'Góc quay ϴ' },
        { id: 1, choice: 'Khoảng cách quay' },
        { id: 2, choice: 'Tất cả các lựa chọn trên' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: 'Các giá trị dương trong phép quay của góc quay ϴ định nghĩa',
      choice: [
        { id: 0, choice: 'Góc quay ngược chiều kim đồng hồ xung quanh điểm cần quay' },
        { id: 3, choice: 'Góc quay ngược chiều kim đồng hồ xung quanh tâm quay' },
        { id: 1, choice: 'Tịnh tiến ngược chiều kim đồng hồ quanh tâm quay' },
        { id: 2, choice: 'Hướng âm' },
      ],
      answer: 3,
    },
    {
      id: 14,
      question: 'Trục quay vuông góc với mặt phẳng xy và đi qua một điểm chốt được gọi là',
      choice: [
        { id: 0, choice: 'Phép tịnh tiến' },
        { id: 3, choice: 'Phép quay' },
        { id: 1, choice: 'Phép có dãn' },
        { id: 2, choice: 'Phép kéo' },
      ],
      answer: 3,
    },
    {
      id: 15,
      question: 'Tọa độ Đềcac của một điểm trong hệ tọa độ cực là',
      choice: [
        { id: 3, choice: 'X’=r cos (Ф +ϴ) and Y’=r sin (Ф +ϴ)' },
        { id: 0, choice: 'X’=r cos (Ф +ϴ) and Y’=r cos (Ф +ϴ)' },
        { id: 1, choice: 'X’=r cos (Ф -ϴ) and Y’=r cos (Ф -ϴ)' },
        { id: 2, choice: 'X’=r cos (Ф +ϴ) and Y’=r sin (Ф -ϴ)' },
      ],
      answer: 3,
    },
    {
      id: 16,
      question: 'Phương trình phép quay 2 chiều là',
      choice: [
        { id: 0, choice: 'P’=P+T' },
        { id: 3, choice: 'P’=R*P' },
        { id: 1, choice: 'P’=P*P' },
        { id: 2, choice: 'P’=R+P' },
      ],
      answer: 3,
    },
    {
      id: 17,
      question: 'Điền vào phần bỏ trống ________ là phép biến đổi di chuyển đối tượng theo quĩ đạo tròn',
      choice: [
        { id: 0, choice: 'Kéo' },
        { id: 3, choice: 'Quay' },
        { id: 1, choice: 'Co dãn' },
        { id: 2, choice: 'Tịnh tiến' },
      ],
      answer: 3,
    },
    {
      id: 18,
      question: 'Một elip có thể quay quanh tâm của nó bằng cách quay',
      choice: [
        { id: 3, choice: 'Trục lớn, trục nhỏ' },
        { id: 0, choice: 'Các điểm đầu mút' },
        { id: 1, choice: 'Không lựa chọn nào ở trên' },
      ],
      answer: 3,
    },
    {
      id: 19,
      question: 'Chỉ ra phép biến đổi được sử dụng để thay đổi kích cỡ của đối tượng',
      choice: [
        { id: 3, choice: 'Co dãn' },
        { id: 0, choice: 'Quay' },
        { id: 1, choice: 'Tịnh tiến' },
        { id: 2, choice: 'Phản xạ' },
      ],
      answer: 3,
    },
    {
      id: 20,
      question: 'Phương trình của phép co dãn 2 chiều',
      choice: [
        { id: 0, choice: 'P’=R+S' },
        { id: 3, choice: 'P’=S*P' },
        { id: 1, choice: 'P’=P+T' },
        { id: 2, choice: 'P’=P*R' },
      ],
      answer: 3,
    },
    {
      id: 21,
      question: 'Co dãn một hình đa giác bằng cách tính',
      choice: [
        { id: 0, choice: 'Chia hệ số co dãn (x,y) cho từng đỉnh' },
        { id: 3, choice: 'Nhân hệ số co dãn (x, y) với từng đỉnh' },
        { id: 1, choice: 'Các tọa độ tâm' },
        { id: 2, choice: 'Các tọa độ đỉnh' },
      ],
      answer: 3,
    },
    {
      id: 22,
      question: 'Nếu các hệ số co dãn sx và sy < 1 thì',
      choice: [
        { id: 3, choice: 'Phép biến đổi giảm kích cỡ đối tượng' },
        { id: 0, choice: 'Phép biến đổi tăng kích cỡ đối tượng' },
        { id: 1, choice: 'Phép biến đổi làm xiên đối tượng' },
        { id: 2, choice: 'Không đối tượng nào' },
      ],
      answer: 3,
    },
    {
      id: 23,
      question: 'Nếu giá trị của các hệ số co dãn sx và sy bằng nhau thì',
      choice: [
        { id: 3, choice: 'Phép biến đổi là phép co dãn đồng nhất' },
        { id: 1, choice: 'Phép co dãn không thể thực hiện được' },
        { id: 2, choice: 'Phép biến đổi là phép quay đồng nhất' },
      ],
      answer: 3,
    },
    {
      id: 24,
      question: 'Các đối tượng được biến đổi theo phương trình P’=S*P có thể là',
      choice: [
        { id: 3, choice: 'B và C' },
        { id: 0, choice: 'Bị co dãn' },
        { id: 1, choice: 'Bị xác định lại vị trí' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 25,
      question: 'Chúng ta kiểm soát vị trí của đối tượng bị co dãn bắng cách chọn một điểm được biết đến là',
      choice: [
        { id: 3, choice: 'Điểm cố định (Fixed point)' },
        { id: 0, choice: 'Điểm xoay (Pivot point)' },
        { id: 1, choice: 'Co dãn không đồng nhất' },
        { id: 2, choice: 'Co dãn đồng nhất' },
      ],
      answer: 3,
    },
    {
      id: 26,
      question: 'Nếu các giá trị co dãn là sx=1 và sy=1 thì',
      choice: [
        { id: 0, choice: 'Đối tượng bị giảm kích cỡ' },
        { id: 3, choice: 'Đối tượng không thay đổi kích cỡ' },
        { id: 1, choice: 'Biến dạng bức ảnh' },
        { id: 2, choice: 'Đối tượng bị tăng kích cỡ' },
      ],
      answer: 3,
    },
    {
      id: 27,
      question: 'Các đa giác bị co dãn bởi áp dụng phương trình biến đổi sau.',
      choice: [
        { id: 3, choice: 'X’=x * Sx + Xf(1-Sx) and Y’=y * Sy + Yf(1-Sy)' },
        { id: 0, choice: 'X’=x * Sx * Xf(1-Sx) and Y’=y * Sy * Yf(1-Sy)' },
        { id: 1, choice: 'X’=x * Sx + Xf(1-Sx) and Y’=y * Sy – Yf(1-Sy)' },
        { id: 2, choice: 'X’=x * Sx + Xf(1+Sx) and Y’=y * Sy + Yf(1+Sy)' },
      ],
      answer: 3,
    },
    {
      id: 28,
      question: 'Biểu diễn dạng ma trận của phép tịnh tiến trong hệ tọa độ đồng là',
      choice: [
        { id: 3, choice: 'P’=T*P' },
        { id: 0, choice: 'P’=T+P' },
        { id: 1, choice: 'P’=S*P' },
        { id: 2, choice: 'P’=R*P' },
      ],
      answer: 3,
    },
    {
      id: 29,
      question: 'Nếu giá trị của các hệ số co dãn sx và sy không bằng nhau thì',
      choice: [
        { id: 0, choice: 'Phép biến đổi là phép co dãn đồng nhất' },
        { id: 3, choice: 'Phép biến đổi là phép co dãn không đồng nhất' },
        { id: 1, choice: 'Phép co dãn không thể thực hiện được' },
        { id: 2, choice: 'Không phải lựa chọn {Đ} cũng không phải lựa chọn {T1}' },
      ],
      answer: 3,
    },
    {
      id: 30,
      question: 'Biểu diễn mà trận cho biến đổi co dãn trong hệ tọa độ đồng nhất là',
      choice: [
        { id: 0, choice: 'P’=dx+dy' },
        { id: 3, choice: 'P’=S*P' },
        { id: 1, choice: 'P’=dx+dy' },
        { id: 2, choice: 'P’=R*P' },
      ],
      answer: 3,
    },
    {
      id: 31,
      question: 'Biểu diễn mà trận cho phép quay trong hệ tọa độ đồng nhất là',
      choice: [
        { id: 3, choice: 'P’=R*P' },
        { id: 0, choice: 'P’=T+P' },
        { id: 1, choice: 'P’=S*P' },
        { id: 2, choice: 'P’=dx+dy' },
      ],
      answer: 3,
    },
    {
      id: 32,
      question: 'Việc sử dụng của hệ tọa độ đồng nhất và biểu diễn ma trận là để',
      choice: [
        { id: 0, choice: 'Thực hiện phép kéo' },
        { id: 3, choice: 'Biểu diễn các phép biến đổi theo một cách đồng nhất' },
        { id: 1, choice: 'Thực hiện phép quay' },
        { id: 2, choice: 'Thực diễn co dãn' },
      ],
      answer: 3,
    },
    {
      id: 33,
      question:
        'Nếu một điểm được biểu diễn trong hệ tọa độ đồng nhất thì cặp (x, y) trông hệ tạo độ Đecac sẽ được biểu diễn như sau',
      choice: [
        { id: 3, choice: '(x’, y’, w)' },
        { id: 0, choice: '(x’, y’, w)' },
        { id: 1, choice: '(x, y, z)' },
        { id: 2, choice: '(x’, y’, z’)' },
      ],
      answer: 3,
    },
    {
      id: 34,
      question: 'Trong phép biến đổi hai chiều giá trị thành phần tọa độ thứ 3 w=?',
      choice: [
        { id: 3, choice: 1 },
        { id: 0, choice: 0 },
        { id: 1, choice: -1 },
        { id: 2, choice: 'Bất cứ giá trị nào' },
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        'Chúng ta có thể kết hợp các phép biến đổi 2 chiều thành một phép biến đổi dùng biểu diễn các điểm trong hệ trục tọa độ đồng nhất bằng cách mở rộng biểu diễn ma trận',
      choice: [
        { id: 0, choice: 'ma trận 2 x 2 thành ma trận 4x4 ' },
        { id: 3, choice: 'ma trận 2 x 2 thành ma trận 3x3' },
        { id: 1, choice: 'ma trận 3 x 3 thành ma trận 2x 2' },
      ],
      answer: 3,
    },
    {
      id: 36,
      question: 'Biểu diễn tọa độ trong hệ trục tọa độ đồng nhất có thể viết như sau',
      choice: [
        { id: 0, choice: '(h.x, h.y, h.z)' },
        { id: 3, choice: '(h.x, h.y, h)' },
        { id: 1, choice: '(x, y, h.z)' },
        { id: 2, choice: '(x,y,z)' },
      ],
      answer: 3,
    },
  ],
  XacDinhBeMatHien: [
    {
      id: 1,
      question: 'Các bề mặt bị khóa hoặc ẩn trong khung cảnh 3 chiều được gọi là',
      choice: [
        { id: 3, choice: 'Các bề mặt ẩn (Hidden surface)' },
        { id: 0, choice: 'Bộ đệm khung (Frame buffer)' },
        { id: 1, choice: 'Cây tứ phân (Quad tree)' },
        { id: 2, choice: 'Bề mặt bị mất (Lost surface)' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question: 'Nhiệm vụ của bài toán loại bỏ bề mặt ẩn là',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Loại bỏ bề mặt ẩn (Removal of hidden surface)' },
        { id: 1, choice: 'Nhận diện các bề mặt ẩn (Identification of hidden surface)' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Tại sao chúng ta cần phải loại bỏ bề mặt ẩn',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Để hiển thị cảnh thực' },
        { id: 1, choice: 'Để xác định bề mặt hiện gần nhất' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Thuật toán của bài toán loại bỏ bề mặt ẩn là',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Chính xác theo đối tượng (Object-space method)' },
        { id: 1, choice: 'Chính xác theo ảnh (Image-space method)' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question:
        'Phương pháp dựa trên nguyên lý so sánh các đối tượng và các phần của đối tượng với nhau để tìm ra thành phần ẩn và thành phần hiển thị được gọi là',
      choice: [
        { id: 3, choice: 'Chính xác theo đối tượng (Object-space method)' },
        { id: 0, choice: 'Chính xác theo ảnh (Image-space method)' },
        { id: 1, choice: 'Chính xác theo bề mặt (Surface-space method' },
        { id: 2, choice: 'Cả A và B' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        'Phương pháp dựa trên nguyên lý kiểm cha điểm hiển thị với mỗi vị trí điểm ảnh trên mặt phẳng chiếu được gọi là',
      choice: [
        { id: 3, choice: 'Chính xác theo ảnh (Image-space method)' },
        { id: 0, choice: 'Chính xác theo đối tượng (Object-space method)' },
        { id: 1, choice: 'Cả A và B' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Các kiểu của thuật toán loại bỏ bề mặt ẩn',
      choice: [
        { id: 3, choice: 'Tất cả các đáp án trên' },
        {
          id: 0,
          choice: 'So sánh độ sâu, Z-buffẻ, loại bỏ mặt quay vào trong (Depth comparison, Zbuffer, back-face removal)',
        },
        { id: 1, choice: 'Thuật toán dòng quét, thuật toán ưu tiên (Scan line algorithm, priority algorithm)' },
        { id: 2, choice: 'Phân hoạch nhị phân, chia nhỏ vùng (BSP method, area subdivision method)' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Thuật toán bề mặt nào dựa trên khía cạnh độ sâu?',
      choice: [
        { id: 0, choice: 'BSP ' },
        { id: 3, choice: 'Z-buffer' },
        { id: 1, choice: 'Loại bỏ mặt quay vào trong' },
        { id: 2, choice: 'Chia nhỏ vùng' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question: 'Thuật toán tương thích với dòng quét được phát triển bởi',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Wylie' },
        { id: 1, choice: 'Evans' },
        { id: 2, choice: 'Cat mull' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question: '“Ray-tracing” (theo dấu tia) là mở rộng của',
      choice: [
        { id: 0, choice: 'Ray sampling' },
        { id: 3, choice: 'Ray casting' },
        { id: 1, choice: 'Ray calling' },
        { id: 2, choice: 'Ray coherence' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question: 'Z -buffer là thuật toán',
      choice: [
        { id: 3, choice: 'Đơn giản nhất' },
        { id: 0, choice: 'Không lựa chọn nào' },
        { id: 1, choice: 'Rộng nhất' },
        { id: 2, choice: 'Phức tạp nhất' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Kiểu cây nào của cấu trúc dữ liệu mà mỗi nút trong có 4 nút con',
      choice: [
        { id: 3, choice: 'Cây tứ phân (Quad tree)' },
        { id: 0, choice: 'Không lựa chọn nào' },
        { id: 1, choice: 'Cây 4 cạnh (Edge quad tree)' },
        { id: 2, choice: 'Cây 4 điểm (Point quad tree)' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: 'Thuật toán người thợ sơn dựa trên thuộc tính của',
      choice: [
        { id: 0, choice: 'Không lựa chọn nào' },
        { id: 3, choice: 'Bộ đệm khung (Frame buffer)' },
        { id: 1, choice: 'Bộ đệm độ sâu (Depth buffer)' },
        { id: 2, choice: 'Đa giác (Polygon)' },
      ],
      answer: 3,
    },
  ],
  DuongCongVaBeMat: [
    {
      id: 1,
      question: 'Tham số chính của thuộc tính đường cong và bề mặt là',
      choice: [
        { id: 3, choice: 'Tất cả đáp án trên' },
        { id: 0, choice: 'Kiểu (Type)' },
        { id: 1, choice: 'Độ rộng (Width)' },
        { id: 2, choice: 'Màu sắc (Color)' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question: 'Các đường cong mành hóa với các độ rộng khác nhau có thể được hiển thị sử dụng',
      choice: [
        { id: 3, choice: 'Các nhịp ngang hoặc dọc (Horizontal and vertical spans)' },
        { id: 1, choice: 'Các nhịp ngang (Horizontal spans)' },
        { id: 2, choice: 'Các nhịp dọc (Vertical spans)' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Nếu độ lớn của hệ số góc đoạn cong nhỏ hơn 1 thì',
      choice: [
        { id: 0, choice: 'Chúng ta có thể vẽ các nhịp ngang' },
        { id: 3, choice: 'Chúng ta có thể vẽ các nhịp dọc' },
        { id: 2, choice: 'Tất cả các lựa chọn trên' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Nếu hệ số góc là 1 thì đường tròn, elip và các loại đường cong khác sẽ ở dạng',
      choice: [
        { id: 0, choice: 'Dày (Thick)' },
        { id: 3, choice: 'Nhỏ nhất (Thinnest)' },
        { id: 1, choice: 'Lớn (Big)' },
        { id: 2, choice: 'Gồ ghề (Rough)' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: 'Một trong các phương pháp hiển thị đường con dày là',
      choice: [
        { id: 0, choice: 'Độ rộng (Curve width)' },
        { id: 3, choice: 'Hệ số góc (Curve slope)' },
        { id: 1, choice: 'Đầu mút (Curve cap)' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        'Mặt nạ điểm ảnh (pixel masks) để thực thi lựa chọn kiểu đường thẳng được sử dụng trong thuật toán sau để tạo ra các mẫu gạch (dashed) hoặc chấm (dotted)',
      choice: [
        { id: 3, choice: 'Thuật toán đường cong mành (Raster curve algorithm)' },
        { id: 0, choice: 'Thuật toán đường thẳng mành (Raster line algorithm)' },
        { id: 1, choice: 'Thuật toán quét mành (Raster scan algorithm)' },
        { id: 2, choice: 'Thuật toán đường cong ngẫu nhiên (Random curve algorithm)' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question:
        'Chúng ta có thể sinh ra các mẫu gạch (dashed) trong các mẫu 1/8 cung tròn (octant), đoạn của hình tròn, đoạn nằm ngang sử dụng ',
      choice: [
        { id: 3, choice: 'Tính đối xứng của đường tròn (Circle symmetry)' },
        { id: 1, choice: 'Hệ số góc đoạn cong (Curve slope)' },
        { id: 2, choice: 'Đường tròn (Circles)' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Chức năng của mặt nạ điểm ảnh (pixel mask) là',
      choice: [
        {
          id: 3,
          choice: 'Để hiện thị mẫu gạch (dashes) và khoảng trống giữa các mẫu gạch (inter dash spaces) theo hệ số góc',
        },
        { id: 0, choice: 'Để hiển thị thuộc tính cong' },
        { id: 1, choice: 'Để hiển thị các đường cong dày' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question:
        'Nếu chúng ta muốn hiển thị các mẫu gạch có độ dài cố định (constant-length dashes), chúng ta cần phải.',
      choice: [
        { id: 0, choice: 'Điều chỉnh số lượng các chấm' },
        { id: 3, choice: 'Điều chỉnh số lượng điểm ảnh trong mỗi mẫu gạch' },
        { id: 1, choice: 'Sử dụng các hàm kiểu đường thẳng' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question: 'Các đường cong được hiển thị với các bút hình chữ nhật sẽ',
      choice: [
        { id: 3, choice: 'Mảnh hơn và hệ số góc nhỏ hơn 1 (Thicker and magnitude slope is 1)' },
        { id: 0, choice: 'Mảnh hơn (Thinner)' },
        { id: 1, choice: 'Dày hơn và hệ số góc lớn hơn 1 (Thicker and magnitude slope >1' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question:
        'Điền vào phần bỏ trống ______là một dải linh hoạt (flexible strip) được sử dụng để tạo ra đường cong mượt sử dụng một tập các điểm.',
      choice: [
        { id: 3, choice: 'Đường spline (Spline)' },
        { id: 0, choice: 'Phương pháp dòng quét (Scan-line method)' },
        { id: 1, choice: 'Phương pháp sắp xếp độ sâu (Depth-sorting method' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Kiểu của đường cong spline là',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Đường spline mở (Open spline)' },
        { id: 1, choice: 'Đường spline đóng (Closed spline)' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: 'Spline bậc 3 là',
      choice: [
        { id: 3, choice: 'Cả B và C' },
        { id: 0, choice: 'Đơn giản để tính toán' },
        { id: 1, choice: 'Cung cấp các đường cong liên tục' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 14,
      question: 'Dạng tham số của đường spline 3D là',
      choice: [
        { id: 0, choice: 'X=a0,y=b0,z=c0' },
        { id: 3, choice: 'X=f(t),y=g(t),z=h(t)' },
        { id: 1, choice: 'F(t)=0,g(t)=0,h(t)=0' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
  ],
  AnhSang: [
    {
      id: 1,
      question: 'Hai mô hình màu là',
      choice: [
        { id: 3, choice: 'RGB và CMYK' },
        { id: 0, choice: 'RGB và CMKY ' },
        { id: 1, choice: 'RBG và CYMK ' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 2,
      question: 'Mô hình RGB được sử dụng cho',
      choice: [
        { id: 3, choice: 'Màn hình máy tính' },
        { id: 0, choice: 'In ấn' },
        { id: 1, choice: 'Tô màu' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 3,
      question: 'Mô hình CMYK được sử dụng cho',
      choice: [
        { id: 0, choice: 'Tô màu' },
        { id: 3, choice: 'In ấn' },
        { id: 1, choice: 'Màn hình máy tính' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 4,
      question: 'Phần giao của 3 màu cơ bản RGB sẽ tạo ra màu',
      choice: [
        { id: 3, choice: 'Trắng' },
        { id: 0, choice: 'Đen' },
        { id: 1, choice: 'Tím' },
        { id: 2, choice: 'Xanh nước biển' },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: 'Phần giao của 3 màu cơ bản CMYK sẽ tạo ra màu',
      choice: [
        { id: 0, choice: 'Trắng' },
        { id: 3, choice: 'Đen' },
        { id: 1, choice: 'Tím' },
        { id: 2, choice: 'Xanh nước biển' },
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        'Kỹ thuật tạo bóng nào dưới đây (shading techniques) tạo ra hiệu ứng bề mặt phẳng (faceted appearance)?',
      choice: [
        { id: 0, choice: 'flat' },
        { id: 3, choice: 'Gouraud' },
        { id: 1, choice: 'Phong' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Kỹ thuật tạo bóng nào dưới dây cho phép miêu tả điểm sang (specular highlights)?',
      choice: [
        { id: 0, choice: 'flat' },
        { id: 3, choice: 'Phong' },
        { id: 1, choice: 'Gouraud' },
        { id: 2, choice: 'Không lựa chọn nào' },
      ],
      answer: 3,
    },
    {
      id: 8,
      question: 'Khẳng định nào dưới đây về các mô hình tạo bóng là đúng',
      choice: [
        {
          id: 0,
          choice: 'Tạo bóng Phong giả định cùng một vectơ pháp tuyến được áp dụng cho mọi điểm ảnh trên bề mặt',
        },
        {
          id: 3,
          choice:
            'Khi áp dụng tạo bóng phẳng, mô hình ánh sang chỉ được áp dụng một lần cho mỗi đa giác, và mọi điểm ảnh trên đa giác đó nhận cùng giá trị cường độ sáng',
        },
        { id: 1, choice: 'Tạo bóng Gouraud luôn có điểm sáng' },
        { id: 2, choice: 'Tạo bóng cố định (Constant) yêu cầu tính toán phức tạp hơn tạo bóng Phong' },
      ],
      answer: 3,
    },
    {
      id: 9,
      question:
        'Trong thuật toán dò tia, nếu ta thêm nhiễu loạn nhỏ vào mỗi tia, điều đó ảnh hưởng thế nào đến hình ảnh kết quả',
      choice: [
        { id: 0, choice: 'Biến dạng ảnh kết quả' },
        { id: 3, choice: 'Mờ ảnh kết quả' },
        { id: 1, choice: 'Xuất hiện hạt trong ảnh kết quả' },
        { id: 2, choice: 'Tăng hiện tượng rang cưa trong ảnh kết quả' },
      ],
      answer: 3,
    },
    {
      id: 10,
      question:
        'Khi sử dụng mô hình phản chiếu Phong (Phong Reflectance Model), việc tính các kênh màu được thực hiện như sau',
      choice: [
        { id: 3, choice: 'các kênh đỏ, xanh lá, xanh dương được tính độc lập.' },
        { id: 0, choice: 'các kênh đỏ, xanh lá, xanh dương được tính cùng nhau.' },
        { id: 1, choice: 'các kênh đỏ, xanh lá được tính độc lập.' },
        { id: 2, choice: 'các xanh lá, xanh dương được tính độc lập.' },
      ],
      answer: 3,
    },
    {
      id: 11,
      question:
        'Mô hình tạo bóng nào yêu cầu tính toán nhiều hơn: mô hình tạo bóng Phong, mô hình tạo bóng Gouraud, mô hình tạo bóng phẳng ',
      choice: [
        { id: 3, choice: 'mô hình tạo bóng Phong ' },
        { id: 0, choice: 'mô hình tạo bóng phẳng ' },
        { id: 1, choice: 'Các mô hình có lượng tính toán như nhau' },
        { id: 2, choice: 'mô hình tạo bóng Gouraud ' },
      ],
      answer: 3,
    },
  ],

  OpenGL: [
    {
      question: 'Ý nghĩa của i,f,v,d… theo qui ước trong các hàm của OpenGL?',
      choice: [
        { id: 0, choice: 'Không có ý nghĩa gì đặc biệt' },
        { id: 3, choice: 'Đặc tả đầu ra (Ví dụ: immediate mode, frame buffer, virtual mode, double-buffer,\r\n…)' },
        { id: 1, choice: 'Không có ý nghĩa gì đặc biệt' },
        { id: 2, choice: 'Đặc tả đầu ra (Ví dụ: immediate mode, frame buffer, virtual mode, double-buffer,\r\n…)' },
      ],
      answer: 3,
    },
    {
      question: 'Đâu là 2 lựa chọn của glShadeModel()?',
      choice: [
        { id: 0, choice: 'DEPTH và STENCIL' },
        { id: 3, choice: 'SMOOTH và FLAT' },
        { id: 1, choice: 'WIDE và NARROW' },
        { id: 2, choice: 'FOREGROUND và BACKGROUND' },
      ],
      answer: 3,
    },
    {
      question: 'Cỡ của ma trận biến đổi 3 chiều',
      choice: [
        { id: 3, choice: '4×4' },
        { id: 0, choice: '2×2' },
        { id: 1, choice: '3×3' },
        { id: 2, choice: '3×4' },
      ],
      answer: 3,
    },
    {
      question: 'Bạn có thể chỉ rõ vị trí của một nguồn sáng trong OpenGL?',
      choice: [
        { id: 3, choice: 'Có' },
        { id: 0, choice: 'Không' },
        { id: 1, choice: 'Thỉnh thoảng' },
        { id: 2, choice: 'Có bởi người sử dụng' },
      ],
      answer: 3,
    },
    {
      question: 'VA hoặc VAO viết tắt cho?',
      choice: [
        { id: 0, choice: 'Vector Array Object' },
        { id: 3, choice: 'Vertex Array Object' },
        { id: 1, choice: 'Vertex Automation Output' },
        { id: 2, choice: 'Vertex Automation Output' },
      ],
      answer: 3,
    },
    {
      question: 'Chúng ta phải làm gì để quay đối tượng quanh một điểm không phải gốc tọa độ?',
      choice: [
        { id: 0, choice: 'Phép quay chỉ thực hiện được quanh gốc tọa độ' },
        { id: 3, choice: 'Dịch đối tượng tới gốc tọa độ, xoay quah gốc tọa độ sau đó dịch tới vị trí ban đầu' },
        { id: 1, choice: 'Thực hiện câu lệnh glRotate và chỉ rõ điểm mà đối tượng quay quanh' },
        { id: 2, choice: 'Thực hiện câu lệnh glRotate và chỉ rõ điểm mà đối tượng quay quanh' },
      ],
      answer: 3,
    },
    {
      question: 'Trong OpenGL, GLSL là viết tắt của?',
      choice: [
        { id: 3, choice: 'Graphics Library Shader Language' },
        { id: 0, choice: 'Graphical Library of Shader Languages' },
        { id: 1, choice: 'Graphical Library of Shader Languages' },
        { id: 2, choice: 'Graphical Language and Shading Library' },
      ],
      answer: 3,
    },
    {
      question: 'glMaterialf(…) thực hiện chức năng?',
      choice: [
        { id: 0, choice: 'glMaterialf(…) thực hiện chức năng?' },
        { id: 3, choice: 'Định nghĩa thuộc tính chất liệu của đối tượng được vẽ cho hiệu ứng hiển thị' },
        { id: 1, choice: 'Chuyển sang chế độ chất liệu để thêm hiệu ứng hiển thị' },
        { id: 2, choice: 'Lấy thuộc tính chất liệu của đối tượng được vẽ' },
      ],
      answer: 3,
    },
    {
      question: 'Hai tham số cho hàm glShadeModel()?',
      choice: [
        { id: 0, choice: 'DEPTH và STENCIL' },
        { id: 3, choice: 'SMOOTH và FLAT' },
        { id: 1, choice: 'WIDE và NARROW' },
        { id: 2, choice: 'FOREGROUND và BACKGROUND' },
      ],
      answer: 3,
    },
    {
      question: 'Dạng đa giác nào hoạt động tốt nhất trong VBO để mô hình hóa đối tượng đặc\r\n(solid)?',
      choice: [
        { id: 0, choice: 'Triangles, quads và N-gons' },
        { id: 3, choice: 'Triangles, Triangle Strips và Triangle Fans' },
        { id: 1, choice: 'Quads, N-gons và unilateral N-gons' },
        { id: 2, choice: 'N-gonal coplanar line strips' },
      ],
      answer: 3,
    },
    {
      question: 'Các thành phần tạo nên nguồn sáng trong OpenGL?',
      choice: [
        { id: 3, choice: 'Specular và Ambient.' },
        { id: 0, choice: 'Diffuse, Specular, và Ambient.' },
        { id: 1, choice: 'Diffuse và Ambient' },
        { id: 2, choice: 'Diffuse, Opaque, Ambient' },
      ],
      answer: 3,
    },
    {
      question: 'Loại dữ liệu nào được lưu trữ trong VBO?',
      choice: [
        { id: 3, choice: 'Đỉnh đa giác (Vertices)' },
        { id: 0, choice: 'Thông tin chia sẻ ngũ cảnh (Context-sharing Information)' },
        { id: 1, choice: 'Điểm ảnhPixels' },
        { id: 2, choice: 'Phân mảnh (Fragments)' },
      ],
      answer: 3,
    },
    {
      question: 'Hằng số hợp lệ cho glStencilOp?',
      choice: [
        { id: 0, choice: 'Một số nằm trong khoảng 0 và 255' },
        { id: 3, choice: 'GL_KEEP, GL_ZERO,GL_REPLACE, GL_INCR, GL_INCR_WRAP,\r\nGL_DECR, GL_DECR_WRAP, GL_INVERT' },
        { id: 1, choice: 'TRUE hoặc FALSE' },
        { id: 2, choice: 'GL_R, GL_G, GL_B, GL_RGB, GL_RGBA, GL_ARGB, GL_BGRA' },
      ],
      answer: 3,
    },
    {
      question: 'Biến đổi (transformation) là gì ?',
      choice: [
        { id: 3, choice: 'Phép toán được sử dụng thể tạo các di chuyển của các điểm và đối tượng theo\r\nmong muốn' },
        { id: 0, choice: 'Chuyển qua lại giữa các bộ đệm' },
        { id: 1, choice: 'Hàm của OpenGL dùng để biến dạng (morph) đa giác thành đa giác khác.' },
        { id: 2, choice: 'Phép biến hình' },
      ],
      answer: 3,
    },
    {
      question:
        'Nói chung, các đa giác nguyên thủy (primitive polygon) nào được dùng để tạo\r\nlưới để biểu diễn các đối tượng phức tạp',
      choice: [
        { id: 3, choice: 'Tam giác (Triangle)' },
        { id: 0, choice: 'Hình vuông (Square)' },
        { id: 1, choice: 'Hình tròn (Circle)' },
        { id: 2, choice: 'Hình chữ nhật (Rectangle)' },
      ],
      answer: 3,
    },
    {
      question: 'Hình chữ nhật (Rectangle)',
      choice: [
        { id: 3, choice: 'glColor()' },
        { id: 0, choice: 'glClearColor()' },
        { id: 1, choice: 'glDisplayfunc()' },
        { id: 2, choice: 'Không hàm nào' },
      ],
      answer: 3,
    },
    {
      question: 'Sự khác nhau giữa glColor3d và glColor3f?',
      choice: [
        { id: 3, choice: 'glColor3d có tham số kiểu double trong khi glColor3f có tham số kiểu float' },
        { id: 0, choice: 'glColor3d chỉ thiết lập RGB, trong khi glColor3f thiết lập R,G,B và A' },
        { id: 1, choice: 'glColor3d cho phép thao tác với màu 3d trong khi glColor3f chỉ cho phép 8-bit\r\nmàu' },
        { id: 2, choice: 'glColor3d trong không gian thực trong khi glColor3f trong không gian số nguyên' },
      ],
      answer: 3,
    },
    {
      question: 'FBO là gì?',
      choice: [
        { id: 0, choice: 'File Buffered Output' },
        { id: 3, choice: 'Framebuffer Object' },
        { id: 1, choice: 'Frictionless Baryonic Oscillation' },
        { id: 2, choice: 'Friday Buy Out' },
      ],
      answer: 3,
    },
    {
      question: 'Hàm nào có thể thiết lập kích cỡ của vùng hiển thị',
      choice: [
        { id: 0, choice: 'gluPerspective()' },
        { id: 3, choice: 'glViewport()' },
        { id: 1, choice: 'Không lựa chọn nào' },
        { id: 2, choice: 'glDisplayfunc()' },
      ],
      answer: 3,
    },
    {
      question: 'Ánh sáng môi trường (ambient light) có trong OpenGL?',
      choice: [
        { id: 3, choice: 'Có' },
        { id: 0, choice: 'Thỉnh thoảng' },
        { id: 1, choice: 'Không' },
        { id: 2, choice: 'Tùy từng phiên bản' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL có hỗ trợ mành hóa (Rasterization)?',
      choice: [
        { id: 3, choice: 'Có' },
        { id: 0, choice: 'Không' },
        { id: 1, choice: 'Thỉnh thoảng' },
        { id: 2, choice: 'Tùy từng phiên bản' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL là viết tắt của',
      choice: [
        { id: 0, choice: 'Open General Liability' },
        { id: 3, choice: 'Open Graphics Library' },
        { id: 1, choice: 'Open Guide Line' },
        { id: 2, choice: 'Open Graphics Layer' },
      ],
      answer: 3,
    },
    {
      question: 'Opengl dùng hệ trục tọa độ nào?',
      choice: [
        { id: 3, choice: 'Hệ tọa độ Decac ba chiều vuông góc' },
        { id: 0, choice: 'Hệ tọa độ Decac hai chiều vuông góc' },
        { id: 1, choice: 'Hệ tọa độ cực ba chiều vuông góc' },
        { id: 2, choice: 'Hệ tọa độ cực hai chiều vuông góc' },
      ],
      answer: 3,
    },
    {
      question: 'Câu lệnh dùng để vẽ các hình nguyên thủy trong OpenGL (OpenGL primitives).',
      choice: [
        { id: 3, choice: 'glVertex' },
        { id: 0, choice: 'glColor' },
        { id: 1, choice: 'glEnable' },
        { id: 2, choice: 'glShadeModel' },
      ],
      answer: 3,
    },
    {
      question: 'Loại dữ liệu nào được lưu trữ trong VAO?',
      choice: [
        { id: 0, choice: 'Các thông tin lũy thửa để phân tích dữ liệu dạng sóng' },
        {
          id: 3,
          choice:
            'Trạng thái của đỉnh (Vertex state) và các thông tin dữ liệu khác dùng cho\r\nrendering trong luồng xử lý đồ họa',
        },
        { id: 1, choice: 'Thông tin tài nguyên của chương trình như trees, lists và data types' },
        { id: 2, choice: 'Các chuỗi nhị phân' },
      ],
      answer: 3,
    },
    {
      question: 'VBO là gì?',
      choice: [
        { id: 0, choice: 'Vertex Binding Object' },
        { id: 3, choice: 'Vertex Buffer Object' },
        { id: 1, choice: 'Variable Buffer Output' },
        { id: 2, choice: 'Vertex Buffer Output' },
      ],
      answer: 3,
    },
    {
      question: '“depth buffer” là gì và chức năng của nó?',
      choice: [
        { id: 3, choice: 'Một kiểu bộ đệm tích lũy thông tin độ sâu trong khung cảnh 3 chiều' },
        { id: 0, choice: 'Một lược đồ tổ chức cảnh 3 chiều' },
        { id: 1, choice: 'Một bộ đệm được đặc tả để thực hiện cảnh dưới nước' },
        { id: 2, choice: 'Một bộ đệm chứa thông tin màu sắc' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL có cung cấp các đối tượng nguyên thủy như cube, cone, pyramid?',
      choice: [
        {
          id: 3,
          choice: 'Không chính thức trong đặc tả của OpenGL nhưng các đối tượng này được cung\r\ncấp bởi thư viện GLUT',
        },
        { id: 0, choice: 'Có nhưng phải dùng glEnable(GL_PRIMITIVES) trước câu lệnh glBegin' },
        { id: 1, choice: 'Có' },
        { id: 2, choice: 'Không bao giờ' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL sử dụng mô hình client-server và một máy trạng thái (state machine)?',
      choice: [
        { id: 0, choice: 'Không liên quan' },
        { id: 3, choice: 'Có' },
        { id: 1, choice: 'Không' },
        { id: 2, choice: 'Thỉnh thoảng' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL có một máy quay (camera) chính thức không?',
      choice: [
        { id: 3, choice: 'Không' },
        { id: 0, choice: 'Có' },
        { id: 1, choice: 'Phải chỉ rõ khi thiết lập môi trường lập trình' },
        { id: 2, choice: 'Có nếu người sử dụng bật lên' },
      ],
      answer: 3,
    },
    {
      question: 'Tổ chức chịu trách nhiệm cho các chuẩn và phát triển của OpenGL?',
      choice: [
        { id: 0, choice: 'Crysis' },
        { id: 3, choice: 'Khronos' },
        { id: 1, choice: 'Cryptic' },
        { id: 2, choice: 'Chronos' },
      ],
      answer: 3,
    },
    {
      question: 'Mục đích của GL_REPEAT trong OpenGL?',
      choice: [
        { id: 3, choice: 'Lặp lại ảnh chất liệu theo một hướng (ngang hoặc dọc)' },
        { id: 0, choice: 'Lặp lại câu lệnh cuối cùng' },
        { id: 1, choice: 'Kích hoạt chế độ 2 bộ đệm' },
        { id: 2, choice: 'Khởi động lại ứng dụng' },
      ],
      answer: 3,
    },
    {
      question:
        'Để có được tính toán chính xác cho việc tạo bóng. Độ dài cho các vecto pháp\r\ntuyến của đối tượng là?',
      choice: [
        { id: 0, choice: 2 },
        { id: 3, choice: '1 (đơn vị độ dài)' },
        { id: 1, choice: 'Bất cứ giá trị nào.' },
        { id: 2, choice: 'Phụ thuộc vào kích cỡ của đối tượng được vẽ' },
      ],
      answer: 3,
    },
    {
      question: 'Tại sao phải xóa bộ đệm?',
      choice: [
        { id: 3, choice: 'Khởi tạo lại một trạng thái' },
        { id: 0, choice: 'Yêu cầu bộ đệm xuất dữ liệu ra màn hình' },
        { id: 1, choice: 'Để hoán đổi ộ đệm' },
        { id: 2, choice: 'Để hiển thị được rõ ràng hơn' },
      ],
      answer: 3,
    },
    {
      question: 'glViewport dùng để làm gì?',
      choice: [
        { id: 3, choice: 'glViewport dùng để làm gì?' },
        { id: 0, choice: 'Thiết lập một viewport hoạt động' },
        { id: 1, choice: 'Yêu cầu dùng cho hàm glOrtho' },
        { id: 2, choice: 'Tắt chế độ tích lũy và kích hoạt viewport chuẩn' },
      ],
      answer: 3,
    },
    {
      question: 'Hai kiểu của shader?',
      choice: [
        { id: 0, choice: 'Fragment và polygon' },
        { id: 3, choice: 'Vertex và fragment.' },
        { id: 1, choice: 'Vertex và polygon' },
        { id: 2, choice: 'Polygon và particle' },
      ],
      answer: 3,
    },
    {
      question: 'Các hàm trộn (blending function) không phụ thuộc thứ tự',
      choice: [
        { id: 3, choice: 'Sai' },
        { id: 0, choice: 'Đúng' },
        { id: 1, choice: 'Thỉnh thoảng' },
        { id: 2, choice: 'Do người lập trình lựa chọn' },
      ],
      answer: 3,
    },
    {
      question: 'X,Y,Z,S,T,U và V là gì?',
      choice: [
        { id: 3, choice: 'Thành phần tọa độ (Coordinate components)' },
        { id: 0, choice: 'Các ký tự trong bảng chữ cái và không có ý nghĩa' },
        { id: 1, choice: 'Tham số lựa chọn trong hàm glVertex*' },
        { id: 2, choice: 'Biến của OpenGL' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL có cung cấp hiệu ứng vật lý (physics), hệ thống hạt (particle systems)?',
      choice: [
        { id: 0, choice: 'Có nhưng trong thư viện mở rộng Box2d' },
        { id: 3, choice: 'Không.' },
        { id: 1, choice: 'Có nhưng tùy phiên bản' },
        { id: 2, choice: 'Chỉ cung cập hiệu ứng vật lý' },
      ],
      answer: 3,
    },
    {
      question: 'Các giá trị “R”, “G”, “B” và “A” trong ngữ cảnh màu sắc có ý nghĩa gì?',
      choice: [
        { id: 0, choice: 'Rotate, Gyrate, Blend và Amorphize' },
        { id: 3, choice: 'Các kênh Red, Green, Blue và Alpha tương ứng' },
        { id: 1, choice: 'Red, Green, Black, Auburn' },
        { id: 2, choice: 'Các giá trị “R”, “G”, “B” và “A” trong ngữ cảnh màu sắc có ý nghĩa gì?' },
      ],
      answer: 3,
    },
    {
      question: 'OpenGL có thực hiện các thủ tục cắt xén không',
      choice: [
        { id: 0, choice: 'Không' },
        { id: 3, choice: 'Có' },
        { id: 1, choice: 'Có nhưng tùy phiên bản' },
        { id: 2, choice: 'Chỉ cắt xen đoạn thẳng' },
      ],
      answer: 3,
    },
    {
      question: 'Loại mảng đỉnh (vertex array) nào không được cung cấp bởi OpenGL?',
      choice: [
        { id: 0, choice: 'Đỉnh (Verticies)' },
        { id: 3, choice: 'Đa giác (Polygons)' },
        { id: 1, choice: 'Màu sắc (Colors)' },
        { id: 2, choice: 'Vecto pháp tuyến (Normals)' },
      ],
      answer: 3,
    },
    {
      question: 'Nếu có phép quay góc α. Phép quay ngược là',
      choice: [
        { id: 0, choice: 'Phép quay góc – α' },
        { id: 1, choice: 'Phép quay góc 2α' },
        { id: 2, choice: 'Phép quay 0 độ' },
      ],
      answer: 0,
    },
  ],
}
export default data

//question 10
