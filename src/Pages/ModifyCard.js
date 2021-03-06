import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

function printfcard(listCards, usrID) {
    let str = listCards.map((card) => {
        if (card.user_id == usrID) {
            return (
                <p>
                    Your {card.brand} card (XXXX-XXXX-XXXX-{card.last_4}) expire at {card.expired_at}.
            </p>
            );
        }
    });
    if (str == "") {
        return ("No Cards");
    }
    return (str);
}

export default function modifycard(obj, listCards) {
    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    {obj.connected() || obj.acceptNotLoginFnc() ?
                        <>
                            {printfcard(listCards, obj.getCurrentID())}
                            <Form inputNames={["last_4", "newBrand"]} inputTexts={["Last 4 digits of the card", "New brand"]} buttonText={"Change the brand"} onSend={obj.handleBrandChangeForm} />
                        </>
                        : "Connection requise"}
                </>
            } />
        </div>
    )




}
