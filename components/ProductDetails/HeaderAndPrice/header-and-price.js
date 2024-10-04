export default function HeaderAndPrice({singleData}) {
    return(
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium">
                {singleData.itemName}
            </h1>
            <p className="text-lg font-medium text-red-500">
                ${singleData.itemPrice}.00
            </p>
        </div>
    );
}