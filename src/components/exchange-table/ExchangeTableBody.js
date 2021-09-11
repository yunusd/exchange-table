const CurrencyTableBody = ({children, ...rest}) => {
    return(
        <tbody {...rest}>
            {children}
        </tbody>
    )
}

export default CurrencyTableBody;