import ExchangeTableBody from "./ExchangeTableBody"
import ExchangeTableHead from "./ExchangeTableHead"
import ExchangeTableRow from "./ExchangeTableRow"

import { exchangeData } from '../../@fake-db'

const style = {
    border: '1px solid black'
}

const ExchangeTable = () => {

    return (
        <table style={style}>
            <ExchangeTableHead style={style} columns={["Döviz Cinsi", "Alış(TL)", "Satış(TL)", "Fark(%)"]}/>
            <ExchangeTableBody style={style}>
                <ExchangeTableRow style={style} rows={exchangeData.currencies} excludes={['exchangeFrom', 'exchangeTo']} />
            </ExchangeTableBody>
        </table>
    )
}

export default ExchangeTable;
