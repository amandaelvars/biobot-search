import React from 'react';

const Results = (props) => {
  const {searchResults} = props;
  console.log('searchResults ', searchResults)
    
    return (
        <div className="search-result">
            <table>
                <thead>
                <tr>
                    <th>Kit ID</th>
                    <th>Shipping Number</th>
                </tr>
                </thead>
                {searchResults.map((info) =>
                <tbody>
                    <tr>
                        <td>{info.label_id}</td>
                        <td>{info.shipping_tracking_code}</td>
                    </tr>
                </tbody>
)}
                       
            </table>
        </div>
    );
}

export default Results;