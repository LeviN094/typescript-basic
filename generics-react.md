5. Generics với React Component
📝 Ví dụ: Generic Table Component

import React from "react";
 
✅ interface TableProps<T> là một interface dùng Generics giúp định nghĩa kiểu dữ liệu của props mà component <Table<T>> nhận vào 

interface TableProps<T> {
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

<!-- --- -->
const Table = <T,>({ data, renderRow }: TableProps<T>) => {
  return (
    <table border={1}>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};
🔹 Dùng dấu "," trong <T,> khi dùng Generic trong khai báo function kiểu arrow function. 
--> Nếu không có "," TypeScript có thể nhầm <T> với một JSX element thay vì một Generic.
📌 Lưu ý: Nếu bạn dùng function thông thường, thì không cần dấu ,
✅ data.map(renderRow) sẽ lặp qua từng phần tử trong data và gọi renderRow(item, index) để tạo các dòng <tr>. Thoả mãn kiểu dữ định nghĩa bên trên Interface renderRow: (item: T, index: number).
- item chính là user bên trong return bên trong const App = () ..

<!-- --- -->
✅ data: T[]: Mảng các đối tượng kiểu T
➡ Tại đây, ta có thể thấy T = { id: number, name: string }.

➡ data có kiểu { id: number, name: string }[]. Tương tự như kiểu number[], string[], nhưng ở đây nhận T hay 1 object T = { id: number, name: string } làm kiểu dữ liệu.

➡ renderRow nhận vào một user và trả về một hàng <tr> trong bảng.

<!-- ----- -->
✅ Sử dụng với danh sách User
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const App = () => {
  return (
    <Table
      data={users}
      renderRow={(user, index) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
        </tr>
      )}
    />
  );
};

export default App;
