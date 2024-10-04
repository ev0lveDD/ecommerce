import ProductDetails from "@/components/ProductDetails/product-details";

export default function MenProductDetails( { params } ) {
    return(
        <ProductDetails productId={params.slug}/>
    );

}

