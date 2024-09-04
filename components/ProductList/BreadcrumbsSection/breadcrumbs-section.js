export default function BreadcrumbsSection() {
    return(
        <div className="flex gap-2">
            <p className="text-xs font-medium text-gray-400 cursor-pointer hover:text-gray-600">MEN</p>
            <p className="text-xs font-medium text-gray-400">/</p>
            <p className="text-xs font-medium text-gray-400 cursor-pointer hover:text-gray-600">CLOTHES</p>
            <p className="text-xs font-medium text-gray-400">/</p>
            <p className="text-xs font-medium cursor-pointer hover:text-gray-800">TOPS</p>
        </div>
    );
}