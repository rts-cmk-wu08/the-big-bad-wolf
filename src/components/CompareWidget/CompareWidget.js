import { IoCloseCircleOutline, IoOptionsOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CompareContext } from "../../contexts/CompareContext";
import "./CompareWidget.scss";

const CompareWidget = () => {
    
    const [compCards, setCompCards] = useContext(CompareContext);
    
    const removeCard = (id) => {
        setCompCards(compCards.filter(compCard => compCard.id !== id ));
    };

    return ( 

        <div className="compProdWidget alignfull">
            <div className="compProdWidget__inner container">
                <div className="compProdWidget__cards">
                
                    {compCards?.map((card, index) => (
                        <div className="card compProdWidgetCard" key={index}>
                            <div className='card_compare compProdWidgetCard__compare'>
                                <button className='card__compare-btn' onClick={() => {removeCard(card.id)}}>Remove <IoCloseCircleOutline className='icon-close'/></button>
                            </div>
                            <div className="compProdWidgetCard__inner" >
                                <div className="compProdWidgetCard__img" >
                                    {Object.values(card.attributes?.Images).map((img, index) => ( 
                                        <LazyLoadImage effect="opacity" src={img[0].attributes.url} key={index} alt={''} />
                                    ))}
                                </div>
                                <div className="compProdWidgetCard__content">
                                    <h3 className='card__title'>{card.attributes.Name}</h3>
                                    <span className='card__price'><span>£</span>{card.attributes.Price}.00</span>
                                </div>
                            </div>
                        </div>
                    ))} 


                </div>
                <div className="compProdWidget__btn-compare">
                    <Link to={"/comparison"} className="btn">Compare <IoOptionsOutline /></Link>
                </div>

            </div>
        </div>

     );

}
 
export default CompareWidget;