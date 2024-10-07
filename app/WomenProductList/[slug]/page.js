import ProductDetails from "@/components/ProductDetails/product-details";

export default function WomenProductDetails( { params } ) {
    return(
        <ProductDetails productId={params.slug}/>
    );

}

