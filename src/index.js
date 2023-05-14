const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

// Cho ai có cùng câu hỏi tại sao 
// / một cái lại vào public app.use() là một phương thức trong ExpressJS để đăng ký middleware cho ứng dụng web của bạn. 
// Middleware là một hàm trung gian được sử dụng để xử lý yêu cầu HTTP trước khi chúng được chuyển đến các route.

// Trong đoạn mã này, app.use() được sử dụng để đăng ký middleware express.static để phục vụ các tài nguyên tĩnh như các tệp CSS, JavaScript, 
// hình ảnh, font chữ... từ thư mục "public".

// express.static() là một middleware tích hợp sẵn trong ExpressJS để phục vụ các tài nguyên tĩnh. 
// Hàm này chấp nhận một tham số đường dẫn tới thư mục chứa các tài nguyên tĩnh cần phục vụ. Trong trường hợp này, đường dẫn được tạo ra 
// bằng cách sử dụng path.join() để nối đường dẫn hiện tại với tên thư mục "public".

// __dirname là một biến toàn cục trong NodeJS chứa đường dẫn tuyệt đối của thư mục hiện tại của script. 
// Bằng cách sử dụng path.join(), ta có thể tạo ra một đường dẫn tuyệt đối đến thư mục "public" trong ứng dụng.

// Vì vậy, đoạn mã app.use(express.static(path.join(__dirname, "public"))) sẽ đăng ký middleware express.static để phục vụ các tài nguyên tĩnh 
// từ thư mục "public" của ứng dụng.
app.use(express.static(path.join(__dirname, 'resources/public')))

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
));


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, './views'))
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

