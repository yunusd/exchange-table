const CurrencyTableRow = ({rows, excludes = [], ...rest}) => {
    return (
        <>
            {rows.map((row, key) => (
                <tr key={key}>
                    {Object.keys(row).map((rowKey, index) => excludes?.find(render => render === rowKey)  ? null : (
                        <td {...rest} key={index}>{row[rowKey]}</td>
                    ))}
                </tr>
            ))}
        </>
    )
}


export default CurrencyTableRow;