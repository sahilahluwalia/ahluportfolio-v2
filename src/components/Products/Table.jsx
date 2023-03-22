import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <div className='table-responsive text-center'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              {data[0] &&
                Object.keys(data[0]).map((heading) => <th>{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                {Object.values(row).map((value) => (
                  <td>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
