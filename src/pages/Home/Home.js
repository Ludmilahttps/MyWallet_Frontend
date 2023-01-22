import React from 'react'
import { HistoricScreen } from './style'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { UserContext } from "../../UserContext.js"
import { useEffect, useState, useContext} from 'react'

function Home(){
    const { info, historic, setInfo, setHistoric} = useContext(UserContext)
    const [userName, setUserName] = useState("Stranger")
    const [userTransactions, setUserTransactions] = useState([])

    function calc() {
        let balance = 0
        userTransactions.forEach(transaction => {
            balance += Number(transaction.value)
        })
        return String(balance)
    }

    return(
        <HistoricScreen>
            <Header info={info}/>
            <section aux={userTransactions.length}>
                    {userTransactions.length ? (
                        <>
                            <feed>
                                {userTransactions.map(transaction => (
                                    <transaction>
                                        <info>
                                            <h2>{transaction.date}</h2>
                                            <h3>{transaction.description}</h3>
                                        </info>
                                        <div>
                                            <transactionValue transactionType={transaction.type}>{transaction.value}</transactionValue>
                                        </div>
                                    </transaction>
                                ))}
                            </feed>
                            <value>
                                <balanceText>VALUE</balanceText>
                                <balanceValue>{calc()}</balanceValue>
                            </value>
                        </>
                    ) : <p>There are no entry or exit records</p>}
                </section>
            <Footer />
        </HistoricScreen>
    )
}

export default Home