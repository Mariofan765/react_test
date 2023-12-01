import React from "react";

import "../styles.css"; // Import your CSS file

export default function TableBlock() {
  return (
    <div className="table-block">
      <table>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
          <th>Заголовок 3</th>
        </tr>
        <tr>
          <td>Ячейка 1</td>
          <td>Ячейка 2</td>
          <td>Ячейка 3</td>
        </tr>
        <tr>
          <td>Ячейка 4</td>
          <td>Ячейка 5</td>
          <td>Ячейка 6</td>
        </tr>
      </table>
    </div>
  );
}
