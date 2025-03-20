5. Generics với React Component
📝 Ví dụ: Generic Table Component
import React from "react";

interface TableProps<T> {
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

const Table = <T,>({ data, renderRow }: TableProps<T>) => {
  return (
    <table border={1}>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};

// ✅ Sử dụng với danh sách User
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const App = () => {
  return (
    <Table
      data={users}
      renderRow={(user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
        </tr>
      )}
    />
  );
};

export default App;
