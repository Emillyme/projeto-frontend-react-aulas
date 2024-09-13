import "./styles.css";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonSecondary from "../../components/ButtonInverse";

export default function ProductDetails(){
    return(
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
        </section>
      </main>
    </>
    );
}