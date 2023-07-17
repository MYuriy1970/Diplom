import ProductBuy from "../productbuy/ProductBuy";
import ProductCover from "../productcover/ProductCover";
import "./style.css"

const ProductItem = ({item}) => {
	return (
    <div className="item-product">
		<ProductCover image={item.img}/>
      <div className="item-product__details">
        <span className="item-product__title">{item.title}</span>
        <div className="item-product__buy">
			<ProductBuy item={item}/>
		  </div>
      </div>
    </div>
  );
}
 
export default ProductItem;