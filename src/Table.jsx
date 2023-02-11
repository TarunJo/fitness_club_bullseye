function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return (

        rowsData.map((data, index) => {
            const { name, email, phone, address } = data;
            return (
                <tr key={index}>
                    <td>
                        <input type="text" value={name} onChange={(evnt) => (handleChange(index, evnt))} name="fullName" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={email} onChange={(evnt) => (handleChange(index, evnt))} name="emailAddress" className="form-control" /> </td>
                    <td>
                        <input type="text" value={phone} onChange={(evnt) => (handleChange(index, evnt))} name="salary" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={address} onChange={(evnt) => (handleChange(index, evnt))} name="salary" className="form-control" />
                    </td>
                </tr>
            )
        })

    )

}
export default TableRows;
