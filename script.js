const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function func(emp) {
    let [data1, data2, data3, data4, data5] = emp;
    console.log(data1, data2, data3);
}
func(data);