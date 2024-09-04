export default function ProductListHeader ({ categoryName, filteredItemsQuantity }) {
    return(
        <>
            {/* Category Name and filtered items quantity / number */}

            <div className="flex justify-start gap-4">
                <h1 className="text-5xl md:text-6xl font-medium animate-slidein">{categoryName}</h1>
                <p className="text-sm md:text-md font-medium">
                    {filteredItemsQuantity}
                </p>
            </div>
        </>
    );
}