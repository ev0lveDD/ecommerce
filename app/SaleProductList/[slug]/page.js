import ProductDetails from "@/components/ProductDetails/product-details";

export default function SaleProductDetails( { params } ) {
    return(
        <ProductDetails productId={params.slug}/>
    );

}