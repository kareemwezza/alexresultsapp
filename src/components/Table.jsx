import React from "react";

const Table = ({ data }) => {
  const { name, id, total, ...subjects } = data;

  const rows = Object.entries(subjects).map(([subjectT, obj], i) => {
    return (
      <tr key={i}>
        <td>{subjectT}</td>
        <td>{obj.end}</td>
        <td>{obj.final}</td>
        <td>{obj.total}</td>
        <td>{obj.grade}</td>
      </tr>
    );
  });

  const print = () => {
    try {
      // Print for Safari browser
      document.execCommand("print", false, null);
    } catch {
      window.print();
    }
  };
  return (
    <>
      <h5>Student Data</h5>
      <p>
        Student name: <span>{name}</span>
      </p>
      <p>
        Student ID: <span>{id}</span>
      </p>
      <p>
        Total Grade: <span>{total.grade}</span>
      </p>
      <p>
        Total Percentage: <span>{total.percentage}</span>
      </p>
      <p>
        Total: <span>{total.sum}</span>
      </p>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>End Round</th>
            <th>Final MCQ</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
      <div className="Print hide-print" style={{ marginTop: "50px" }}>
        <button
          onClick={() => print()}
          className="waves-effect waves-light btn-large light-blue darken-1"
        >
          <i className="material-icons left">cloud</i>Save Results
        </button>
      </div>
    </>
  );
};

export default Table;
