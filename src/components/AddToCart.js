import "./AddToCart.scss";


const AddToCart = (details) => { 


    return (
        
        <form className="form addtocart">

            <div className="color-select form__fieldgroup">

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="black" name="color-select" value="black" defaultChecked/>
                        Black
                    </label>
                </div>

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="silver" name="color-select" value="silver" />
                        Silver
                    </label>
                </div>

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="gold" name="color-select" value="gold" />
                        Gold
                    </label>
                </div>
            </div>


            <div className="price form__fieldgroup">
                    <span className="addtocart__price">£ {details.Price}.00</span>
                    <span className="addtocart__stock">{details.Stock} <span className="inStock"></span></span>
            </div>


            <div className="amount form__fieldgroup">

                <div className="cart-amount cart-add__item">
                    <button className="cart-amount__btn">-</button>
                    <input className="cart-amount__input" type="number" name="amount"  />
                    <button className="cart-amount__btn">+</button>
                </div>

                <div className="cart-add__item">
                    <button className="btn cart-add__btn">Add to cart</button>
                </div>

            </div>



        </form>



    );
}

export default AddToCart;