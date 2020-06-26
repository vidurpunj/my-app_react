import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    console.log('ingredients')
    console.log(props.ingredients)
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            {/*<button>cancel</button>*/}
            {/*<button>continue</button>*/}
            <Button clicked={props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinueHandler} btnType='Success'>CONTINUE</Button>
        </Aux>
    );

}

export default orderSummary;

