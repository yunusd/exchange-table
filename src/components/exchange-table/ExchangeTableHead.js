const CurrencyTableHead = ({columns, ...rest}) => {
    return (
        <thead>
            <tr>
                {columns.map((column, key) => <th key={key} {...rest}>{column}</th>)}
            </tr>
        </thead>
    )
}

export default CurrencyTableHead;