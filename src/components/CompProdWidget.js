import { IoCloseOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useContext } from "react";
import { CompareContext } from "../contexts/CompareContext";
import "./CompProdWidget.scss";

const CompProdWidget = () => {
    
    const [compCards, setCompCards] = useContext(CompareContext);
    
    const removeCard = (id) => {
        setCompCards(compCards.filter(compCard => compCard.id !== id ));
    };

    console.log(compCards);

    return ( 

        <div className="compProdWidget alignfull">
            <div className="compProdWidget__inner container">
                <div className="compProdWidget__cards">
                
                    {compCards?.map((card) => (
                        <div className="compProdWidgetCard" key={card.id}>
                            <div className="card__img" >
                                {Object.values(card.attributes.Images).map(img => ( 
                                    <LazyLoadImage effect="opacity" src={img[0].attributes.url} alt={'...'} />
                                ))}
                            </div>
                            <button className='compProdWidgetCard__remove' onClick={() => {removeCard(card.id)}}><IoCloseOutline /></button>
                            <p>{card.attributes.Name}</p>
                            <p>{card.attributes.Price}</p>
                        </div>
                    ))} 


                </div>
                <div className="compProdWidget__btn-compare">
                    <button className="btn">Compare</button>
                </div>

            </div>
        </div>

     );

}
 
export default CompProdWidget;